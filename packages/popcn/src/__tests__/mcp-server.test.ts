import { describe, it, expect, vi, beforeEach } from "vitest"

// Mock registry before importing server
const mockFetch = vi.fn()
vi.stubGlobal("fetch", mockFetch)

function jsonResponse(data: unknown, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: status === 404 ? "Not Found" : "OK",
    json: () => Promise.resolve(data),
  }
}

const validIndex = {
  version: "1.0.0",
  components: [
    {
      name: "button",
      type: "ui",
      description: "Aurora-styled button",
      dependencies: ["class-variance-authority"],
      registryDependencies: [],
    },
    {
      name: "card",
      type: "ui",
      description: "Card container with glass variants",
      dependencies: ["clsx"],
      registryDependencies: [],
    },
    {
      name: "dialog",
      type: "ui",
      description: "Modal dialog with glass backdrop",
      dependencies: ["@radix-ui/react-dialog"],
      registryDependencies: ["button"],
    },
  ],
  styles: [{ name: "aurorapop", type: "style" }],
  themes: [{ name: "cosmic", type: "theme" }],
}

const validComponent = {
  name: "button",
  type: "ui",
  description: "Aurora-styled button",
  files: [
    {
      path: "components/ui/button.tsx",
      type: "ui",
      content: "export const Button = () => <button>Click</button>",
    },
  ],
  dependencies: ["class-variance-authority"],
  registryDependencies: [],
}

// Import server after mocking
import { server } from "../mcp/index.js"

describe("mcp/server", () => {
  beforeEach(() => {
    mockFetch.mockReset()
  })

  describe("ListToolsRequest", () => {
    it("should return 5 tools", async () => {
      const handler = (server as any)._requestHandlers?.get("tools/list")
      // Use the server's internal method to test tool listing
      const result = await handler?.({
        method: "tools/list",
        params: {},
      })

      expect(result.tools).toHaveLength(5)

      const toolNames = result.tools.map((t: any) => t.name)
      expect(toolNames).toContain("list_components")
      expect(toolNames).toContain("search_components")
      expect(toolNames).toContain("view_component")
      expect(toolNames).toContain("get_add_command")
      expect(toolNames).toContain("get_setup_guide")
    })

    it("should have valid input schemas for all tools", async () => {
      const handler = (server as any)._requestHandlers?.get("tools/list")
      const result = await handler?.({
        method: "tools/list",
        params: {},
      })

      for (const tool of result.tools) {
        expect(tool.inputSchema).toBeDefined()
        expect(tool.inputSchema.type).toBe("object")
        expect(tool.description).toBeTruthy()
      }
    })
  })

  describe("CallToolRequest", () => {
    async function callTool(name: string, args: Record<string, unknown> = {}) {
      const handler = (server as any)._requestHandlers?.get("tools/call")
      return handler?.({
        method: "tools/call",
        params: { name, arguments: args },
      })
    }

    describe("list_components", () => {
      it("should list all components from registry", async () => {
        mockFetch.mockResolvedValueOnce(jsonResponse(validIndex))
        const result = await callTool("list_components")

        expect(result.content[0].type).toBe("text")
        expect(result.content[0].text).toContain("button")
        expect(result.content[0].text).toContain("card")
        expect(result.content[0].text).toContain("dialog")
        expect(result.content[0].text).toContain("3 total")
      })

      it("should return error when registry fetch fails", async () => {
        mockFetch.mockRejectedValueOnce(new Error("offline"))
        const result = await callTool("list_components")

        expect(result.isError).toBe(true)
        expect(result.content[0].text).toContain("Error")
      })
    })

    describe("search_components", () => {
      it("should find components by name", async () => {
        mockFetch.mockResolvedValueOnce(jsonResponse(validIndex))
        const result = await callTool("search_components", {
          query: "button",
        })

        expect(result.content[0].text).toContain("button")
      })

      it("should find components by description", async () => {
        mockFetch.mockResolvedValueOnce(jsonResponse(validIndex))
        const result = await callTool("search_components", {
          query: "glass",
        })

        expect(result.content[0].text).toContain("card")
      })

      it("should return no results message for unmatched query", async () => {
        mockFetch.mockResolvedValueOnce(jsonResponse(validIndex))
        const result = await callTool("search_components", {
          query: "zzzzzzzzzzzzz",
          limit: 5,
        })

        expect(result.content[0].text).toContain("No components found")
      })

      it("should return error for missing query", async () => {
        const result = await callTool("search_components", {})
        expect(result.isError).toBe(true)
      })
    })

    describe("view_component", () => {
      it("should return component detail with source code", async () => {
        mockFetch.mockResolvedValueOnce(jsonResponse(validComponent))
        const result = await callTool("view_component", { name: "button" })

        expect(result.content[0].text).toContain("# button")
        expect(result.content[0].text).toContain("export const Button")
        expect(result.content[0].text).toContain("npx popcn add button")
      })

      it("should return error for missing component", async () => {
        mockFetch.mockResolvedValueOnce(jsonResponse(null, 404))
        const result = await callTool("view_component", {
          name: "nonexistent",
        })

        expect(result.isError).toBe(true)
      })
    })

    describe("get_add_command", () => {
      it("should generate command for single component", async () => {
        const result = await callTool("get_add_command", {
          components: ["button"],
        })

        expect(result.content[0].text).toContain("npx popcn add button")
      })

      it("should generate command for multiple components", async () => {
        const result = await callTool("get_add_command", {
          components: ["button", "card", "dialog"],
        })

        expect(result.content[0].text).toContain("npx popcn add button card dialog")
        expect(result.content[0].text).toContain("components")
      })

      it("should return error for missing components arg", async () => {
        const result = await callTool("get_add_command", {})
        expect(result.isError).toBe(true)
      })
    })

    describe("get_setup_guide", () => {
      it("should return setup guide", async () => {
        const result = await callTool("get_setup_guide")

        expect(result.content[0].text).toContain("npx popcn init")
        expect(result.content[0].text).toContain("Aurora")
        expect(result.content[0].text).toContain("Cosmic")
      })
    })

    describe("unknown tool", () => {
      it("should return error for unknown tool name", async () => {
        const result = await callTool("nonexistent_tool")

        expect(result.isError).toBe(true)
        expect(result.content[0].text).toContain("Unknown tool")
      })
    })
  })
})
