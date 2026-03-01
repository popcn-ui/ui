import { Server } from "@modelcontextprotocol/sdk/server/index.js"
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js"
import { z } from "zod"
import { zodToJsonSchema } from "zod-to-json-schema"
import fuzzysort from "fuzzysort"
import { fetchRegistry, fetchComponent } from "../utils/registry.js"
import {
  formatComponentList,
  formatComponentDetail,
  formatSearchResults,
  formatSetupGuide,
} from "./utils.js"

// --- Tool input schemas ---

const listComponentsSchema = z.object({})

const searchComponentsSchema = z.object({
  query: z.string().describe("Search query to match against component names and descriptions"),
  limit: z
    .number()
    .optional()
    .default(10)
    .describe("Maximum number of results to return (default: 10)"),
})

const viewComponentSchema = z.object({
  name: z.string().describe("The component name (e.g. 'button', 'dialog', 'card')"),
})

const getAddCommandSchema = z.object({
  components: z.array(z.string()).describe("List of component names to generate add commands for"),
})

const getSetupGuideSchema = z.object({})

// --- Server ---

export const server = new Server(
  {
    name: "popcn",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
)

// --- List tools ---

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_components",
        description:
          "List all available popcn/ui components with their names, descriptions, and dependencies. Use this to discover what components are available.",
        inputSchema: zodToJsonSchema(listComponentsSchema),
      },
      {
        name: "search_components",
        description:
          "Search for popcn/ui components by name or description using fuzzy matching. Use this when you need to find a specific type of component.",
        inputSchema: zodToJsonSchema(searchComponentsSchema),
      },
      {
        name: "view_component",
        description:
          "View detailed information about a specific popcn/ui component, including its full source code, dependencies, and usage. Use this to understand how a component works before adding it.",
        inputSchema: zodToJsonSchema(viewComponentSchema),
      },
      {
        name: "get_add_command",
        description:
          "Get the CLI command to add one or more popcn/ui components to the user's project. Returns the exact npx command to run.",
        inputSchema: zodToJsonSchema(getAddCommandSchema),
      },
      {
        name: "get_setup_guide",
        description:
          "Get the complete setup guide for initializing popcn/ui in a new project. Includes steps for init, skin/theme selection, and adding components.",
        inputSchema: zodToJsonSchema(getSetupGuideSchema),
      },
    ],
  }
})

// --- Call tool ---

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const { name, arguments: args } = request.params

    switch (name) {
      case "list_components": {
        const registry = await fetchRegistry()
        return {
          content: [{ type: "text" as const, text: formatComponentList(registry) }],
        }
      }

      case "search_components": {
        const input = searchComponentsSchema.parse(args)
        const registry = await fetchRegistry()

        const results = fuzzysort
          .go(input.query, registry.components, {
            keys: ["name", "description"],
            threshold: -10000,
            limit: input.limit,
          })
          .map((r) => r.obj)

        return {
          content: [
            {
              type: "text" as const,
              text: formatSearchResults(results, input.query),
            },
          ],
        }
      }

      case "view_component": {
        const input = viewComponentSchema.parse(args)
        const component = await fetchComponent(input.name)
        return {
          content: [
            {
              type: "text" as const,
              text: formatComponentDetail(component),
            },
          ],
        }
      }

      case "get_add_command": {
        const input = getAddCommandSchema.parse(args)
        const names = input.components.join(" ")
        const command = `npx popcn add ${names}`
        return {
          content: [
            {
              type: "text" as const,
              text: `Run the following command to add the component${input.components.length > 1 ? "s" : ""}:\n\n\`\`\`bash\n${command}\n\`\`\``,
            },
          ],
        }
      }

      case "get_setup_guide": {
        return {
          content: [{ type: "text" as const, text: formatSetupGuide() }],
        }
      }

      default:
        return {
          content: [
            {
              type: "text" as const,
              text: `Unknown tool: ${name}. Use list_components, search_components, view_component, get_add_command, or get_setup_guide.`,
            },
          ],
          isError: true,
        }
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Invalid input: ${error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ")}`,
          },
        ],
        isError: true,
      }
    }

    const message = error instanceof Error ? error.message : "An unknown error occurred"
    return {
      content: [{ type: "text" as const, text: `Error: ${message}` }],
      isError: true,
    }
  }
})
