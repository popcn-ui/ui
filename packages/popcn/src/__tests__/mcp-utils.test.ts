import { describe, it, expect } from "vitest"
import {
  formatComponentList,
  formatComponentDetail,
  formatSearchResults,
  formatSetupGuide,
} from "../mcp/utils.js"
import type { RegistryIndex } from "../schemas/registry.js"

describe("mcp/utils", () => {
  describe("formatComponentList", () => {
    it("should format component list with counts", () => {
      const registry: RegistryIndex = {
        version: "1.0.0",
        components: [
          { name: "button", type: "ui", description: "A button" },
          { name: "card", type: "ui", description: "A card" },
        ],
        styles: [],
        themes: [],
      }

      const result = formatComponentList(registry)
      expect(result).toContain("2 total")
      expect(result).toContain("**button**")
      expect(result).toContain("**card**")
      expect(result).toContain("A button")
      expect(result).toContain("npx popcn add")
    })

    it("should show registry dependencies", () => {
      const registry: RegistryIndex = {
        version: "1.0.0",
        components: [
          {
            name: "dialog",
            type: "ui",
            description: "A dialog",
            registryDependencies: ["button"],
          },
        ],
        styles: [],
        themes: [],
      }

      const result = formatComponentList(registry)
      expect(result).toContain("depends on: button")
    })

    it("should handle empty components", () => {
      const registry: RegistryIndex = {
        version: "1.0.0",
        components: [],
        styles: [],
        themes: [],
      }

      const result = formatComponentList(registry)
      expect(result).toContain("No components found")
    })

    it("should handle components without descriptions", () => {
      const registry: RegistryIndex = {
        version: "1.0.0",
        components: [{ name: "button", type: "ui" }],
        styles: [],
        themes: [],
      }

      const result = formatComponentList(registry)
      expect(result).toContain("No description")
    })
  })

  describe("formatComponentDetail", () => {
    it("should format component with all fields", () => {
      const component = {
        name: "button",
        type: "ui",
        description: "Aurora-styled button",
        files: [
          {
            path: "components/ui/button.tsx",
            type: "ui",
            content: "export const Button = () => <button />",
          },
        ],
        dependencies: ["class-variance-authority", "clsx"],
        registryDependencies: ["badge"],
      }

      const result = formatComponentDetail(component)
      expect(result).toContain("# button")
      expect(result).toContain("Aurora-styled button")
      expect(result).toContain("class-variance-authority")
      expect(result).toContain("clsx")
      expect(result).toContain("badge")
      expect(result).toContain("npx popcn add button")
      expect(result).toContain("export const Button")
    })

    it("should handle component without optional fields", () => {
      const component = {
        name: "simple",
        type: "ui",
        files: [{ path: "components/ui/simple.tsx", type: "ui", content: "export {}" }],
      }

      const result = formatComponentDetail(component)
      expect(result).toContain("# simple")
      expect(result).toContain("npx popcn add simple")
      expect(result).not.toContain("## Dependencies")
      expect(result).not.toContain("## Registry Dependencies")
    })
  })

  describe("formatSearchResults", () => {
    it("should format search results", () => {
      const results = [
        { name: "button", description: "A button" },
        { name: "loading-button", description: "Button with loading" },
      ]

      const result = formatSearchResults(results, "button")
      expect(result).toContain('2 components matching "button"')
      expect(result).toContain("**button**")
      expect(result).toContain("**loading-button**")
      expect(result).toContain("npx popcn add button")
      expect(result).toContain("npx popcn add loading-button")
    })

    it("should handle single result", () => {
      const results = [{ name: "card", description: "A card" }]
      const result = formatSearchResults(results, "card")
      expect(result).toContain('1 component matching "card"')
    })

    it("should handle no results", () => {
      const result = formatSearchResults([], "nonexistent")
      expect(result).toContain('No components found matching "nonexistent"')
    })
  })

  describe("formatSetupGuide", () => {
    it("should include all setup steps", () => {
      const result = formatSetupGuide()
      expect(result).toContain("npx popcn init")
      expect(result).toContain("Aurora")
      expect(result).toContain("NeumoPop")
      expect(result).toContain("GlassPop")
      expect(result).toContain("Cosmic")
      expect(result).toContain("Sunset")
      expect(result).toContain("Neon")
      expect(result).toContain("Mono")
      expect(result).toContain("npx popcn add")
      expect(result).toContain("npx popcn list")
      expect(result).toContain('variant="aurora"')
    })
  })
})
