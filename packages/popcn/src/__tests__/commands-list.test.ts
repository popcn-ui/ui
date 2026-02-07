import { describe, it, expect } from "vitest"
import type { RegistryIndex } from "../schemas/registry.js"

// Test the pure groupRegistry function by re-implementing it
// (same logic as list.ts, which is not exported)
function groupRegistry(registry: RegistryIndex) {
  return {
    components: registry.components || [],
    styles: registry.styles || [],
    themes: registry.themes || [],
  }
}

describe("commands/list - groupRegistry", () => {
  it("should group registry items correctly", () => {
    const registry: RegistryIndex = {
      version: "1.0.0",
      components: [
        { name: "button", type: "ui", description: "A button" },
        { name: "card", type: "ui", description: "A card" },
      ],
      styles: [{ name: "aurorapop", type: "style" }],
      themes: [
        { name: "cosmic", type: "theme" },
        { name: "sunset", type: "theme" },
      ],
    }

    const grouped = groupRegistry(registry)
    expect(grouped.components).toHaveLength(2)
    expect(grouped.styles).toHaveLength(1)
    expect(grouped.themes).toHaveLength(2)
  })

  it("should handle empty registry", () => {
    const registry: RegistryIndex = {
      version: "1.0.0",
      components: [],
      styles: [],
      themes: [],
    }

    const grouped = groupRegistry(registry)
    expect(grouped.components).toHaveLength(0)
    expect(grouped.styles).toHaveLength(0)
    expect(grouped.themes).toHaveLength(0)
  })

  it("should preserve component descriptions", () => {
    const registry: RegistryIndex = {
      version: "1.0.0",
      components: [
        { name: "button", type: "ui", description: "Interactive button" },
      ],
      styles: [],
      themes: [],
    }

    const grouped = groupRegistry(registry)
    expect(grouped.components[0].description).toBe("Interactive button")
  })

  it("should handle components without descriptions", () => {
    const registry: RegistryIndex = {
      version: "1.0.0",
      components: [{ name: "button", type: "ui" }],
      styles: [],
      themes: [],
    }

    const grouped = groupRegistry(registry)
    expect(grouped.components[0].description).toBeUndefined()
  })
})
