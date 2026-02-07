import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import {
  getRegistryUrl,
  RegistryError,
  fetchRegistry,
  fetchComponent,
  fetchStyle,
  fetchTheme,
  fetchUtils,
} from "../utils/registry.js"

// Mock global fetch
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

describe("utils/registry", () => {
  beforeEach(() => {
    mockFetch.mockReset()
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  describe("getRegistryUrl", () => {
    it("should return default URL", () => {
      expect(getRegistryUrl()).toBe("https://popcnui.com/api/registry")
    })

    it("should return env URL when set", () => {
      vi.stubEnv("POPCN_REGISTRY_URL", "https://custom.example.com/api")
      expect(getRegistryUrl()).toBe("https://custom.example.com/api")
    })
  })

  describe("RegistryError", () => {
    it("should create error with code", () => {
      const err = new RegistryError("Not found", "NOT_FOUND")
      expect(err.message).toBe("Not found")
      expect(err.code).toBe("NOT_FOUND")
      expect(err.name).toBe("RegistryError")
      expect(err).toBeInstanceOf(Error)
    })

    it.each(["NOT_FOUND", "NETWORK", "VALIDATION", "UNKNOWN"] as const)(
      "should accept '%s' as error code",
      (code) => {
        const err = new RegistryError("test", code)
        expect(err.code).toBe(code)
      }
    )
  })

  describe("fetchRegistry", () => {
    const validIndex = {
      version: "1.0.0",
      components: [{ name: "button", type: "ui" }],
      styles: [{ name: "aurorapop", type: "style" }],
      themes: [{ name: "cosmic", type: "theme" }],
    }

    it("should fetch and return valid registry", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(validIndex))
      const result = await fetchRegistry()
      expect(result.version).toBe("1.0.0")
      expect(result.components).toHaveLength(1)
    })

    it("should throw NOT_FOUND for 404", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(null, 404))
      try {
        await fetchRegistry()
        expect.unreachable("should have thrown")
      } catch (e) {
        expect(e).toBeInstanceOf(RegistryError)
        expect((e as RegistryError).code).toBe("NOT_FOUND")
      }
    })

    it("should throw NETWORK for non-404 error status", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(null, 500))
      await expect(fetchRegistry()).rejects.toThrow(RegistryError)
    })

    it("should throw VALIDATION for invalid response shape", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse({ invalid: true }))
      try {
        await fetchRegistry()
        expect.unreachable("should have thrown")
      } catch (e) {
        expect(e).toBeInstanceOf(RegistryError)
        expect((e as RegistryError).code).toBe("VALIDATION")
      }
    })

    it("should throw NETWORK on fetch failure", async () => {
      mockFetch.mockRejectedValueOnce(new Error("Network failure"))
      try {
        await fetchRegistry()
        expect.unreachable("should have thrown")
      } catch (e) {
        expect(e).toBeInstanceOf(RegistryError)
        expect((e as RegistryError).code).toBe("NETWORK")
      }
    })
  })

  describe("fetchComponent", () => {
    const validComponent = {
      name: "button",
      type: "ui",
      files: [
        { path: "components/ui/button.tsx", type: "ui", content: "export {}" },
      ],
      dependencies: ["class-variance-authority"],
    }

    it("should fetch and return valid component", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(validComponent))
      const result = await fetchComponent("button")
      expect(result.name).toBe("button")
      expect(result.files).toHaveLength(1)
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("/ui/button")
      )
    })

    it("should throw NOT_FOUND for missing component", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(null, 404))
      await expect(fetchComponent("nonexistent")).rejects.toThrow(RegistryError)
    })

    it("should throw VALIDATION for invalid component data", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse({ name: "bad" }))
      await expect(fetchComponent("bad")).rejects.toThrow(RegistryError)
    })

    it("should throw NETWORK on fetch error", async () => {
      mockFetch.mockRejectedValueOnce(new Error("timeout"))
      await expect(fetchComponent("button")).rejects.toThrow(RegistryError)
    })
  })

  describe("fetchStyle", () => {
    const validStyle = {
      name: "aurorapop",
      type: "style",
      cssVars: {
        dark: { "--ap-primary": "99 102 241" },
        light: { "--ap-primary": "79 70 229" },
      },
    }

    it("should fetch and return valid style", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(validStyle))
      const result = await fetchStyle("aurorapop")
      expect(result.name).toBe("aurorapop")
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("/styles/aurorapop")
      )
    })

    it("should throw NOT_FOUND for 404", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(null, 404))
      await expect(fetchStyle("missing")).rejects.toThrow(RegistryError)
    })

    it("should throw NETWORK on fetch error", async () => {
      mockFetch.mockRejectedValueOnce(new Error("timeout"))
      await expect(fetchStyle("aurorapop")).rejects.toThrow(RegistryError)
    })
  })

  describe("fetchTheme", () => {
    const validTheme = {
      name: "cosmic",
      type: "theme",
      cssVars: { "--ap-primary": "99 102 241" },
    }

    it("should fetch and return valid theme", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(validTheme))
      const result = await fetchTheme("cosmic")
      expect(result.name).toBe("cosmic")
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("/themes/cosmic")
      )
    })

    it("should throw NOT_FOUND for 404", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(null, 404))
      await expect(fetchTheme("missing")).rejects.toThrow(RegistryError)
    })

    it("should throw NETWORK on fetch error", async () => {
      mockFetch.mockRejectedValueOnce(new Error("timeout"))
      await expect(fetchTheme("cosmic")).rejects.toThrow(RegistryError)
    })
  })

  describe("fetchUtils", () => {
    it("should return utils from registry", async () => {
      const validUtils = {
        name: "utils",
        type: "util",
        files: [{ path: "lib/utils.ts", type: "util", content: "export {}" }],
      }
      mockFetch.mockResolvedValueOnce(jsonResponse(validUtils))
      const result = await fetchUtils()
      expect(result.name).toBe("utils")
    })

    it("should return fallback utils on network error", async () => {
      mockFetch.mockRejectedValueOnce(new Error("offline"))
      const result = await fetchUtils()
      expect(result.name).toBe("utils")
      expect(result.files[0].path).toBe("lib/utils.ts")
      expect(result.files[0].content).toContain("clsx")
      expect(result.dependencies).toContain("clsx")
      expect(result.dependencies).toContain("tailwind-merge")
    })

    it("should return fallback utils on non-ok response", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse(null, 500))
      const result = await fetchUtils()
      expect(result.name).toBe("utils")
      expect(result.files[0].content).toContain("twMerge")
    })

    it("should return fallback utils on invalid response shape", async () => {
      mockFetch.mockResolvedValueOnce(jsonResponse({ invalid: true }))
      const result = await fetchUtils()
      expect(result.name).toBe("utils")
    })
  })
})
