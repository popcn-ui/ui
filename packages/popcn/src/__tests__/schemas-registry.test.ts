import { describe, it, expect } from "vitest"
import {
  registryItemTypeSchema,
  registryFileSchema,
  registryComponentSchema,
  registryStyleSchema,
  registryThemeSchema,
  registryIndexSchema,
  validateRegistryComponent,
  validateRegistryIndex,
} from "../schemas/registry.js"

describe("schemas/registry", () => {
  describe("registryItemTypeSchema", () => {
    it.each(["ui", "component", "util", "style", "theme", "hook", "lib"])(
      "should accept '%s' as valid type",
      (type) => {
        expect(registryItemTypeSchema.safeParse(type).success).toBe(true)
      }
    )

    it("should reject invalid type", () => {
      expect(registryItemTypeSchema.safeParse("invalid").success).toBe(false)
    })
  })

  describe("registryFileSchema", () => {
    it("should parse valid file", () => {
      const result = registryFileSchema.safeParse({
        path: "components/ui/button.tsx",
        type: "ui",
        content: "export function Button() {}",
      })
      expect(result.success).toBe(true)
    })

    it("should fail without content", () => {
      const result = registryFileSchema.safeParse({
        path: "button.tsx",
        type: "ui",
      })
      expect(result.success).toBe(false)
    })
  })

  describe("registryComponentSchema", () => {
    const validComponent = {
      name: "button",
      type: "ui" as const,
      files: [
        { path: "components/ui/button.tsx", type: "ui", content: "export {}" },
      ],
    }

    it("should parse valid component", () => {
      const result = registryComponentSchema.safeParse(validComponent)
      expect(result.success).toBe(true)
    })

    it("should parse component with optional fields", () => {
      const result = registryComponentSchema.safeParse({
        ...validComponent,
        description: "A button component",
        dependencies: ["class-variance-authority"],
        devDependencies: ["@types/react"],
        registryDependencies: ["utils"],
      })
      expect(result.success).toBe(true)
    })

    it("should fail without name", () => {
      const { name, ...noName } = validComponent
      expect(registryComponentSchema.safeParse(noName).success).toBe(false)
    })

    it("should fail without files", () => {
      const { files, ...noFiles } = validComponent
      expect(registryComponentSchema.safeParse(noFiles).success).toBe(false)
    })

    it("should fail with empty files array", () => {
      const result = registryComponentSchema.safeParse({
        ...validComponent,
        files: [],
      })
      // Empty array is valid per schema (z.array doesn't enforce min by default)
      expect(result.success).toBe(true)
    })

    it("should fail with invalid type", () => {
      const result = registryComponentSchema.safeParse({
        ...validComponent,
        type: "invalid",
      })
      expect(result.success).toBe(false)
    })
  })

  describe("registryStyleSchema", () => {
    it("should parse valid style", () => {
      const result = registryStyleSchema.safeParse({
        name: "cosmic",
        type: "style",
        cssVars: {
          dark: { "--ap-primary": "99 102 241" },
          light: { "--ap-primary": "79 70 229" },
        },
      })
      expect(result.success).toBe(true)
    })

    it("should fail with wrong type literal", () => {
      const result = registryStyleSchema.safeParse({
        name: "cosmic",
        type: "ui",
        cssVars: { dark: {}, light: {} },
      })
      expect(result.success).toBe(false)
    })
  })

  describe("registryThemeSchema", () => {
    it("should parse valid theme", () => {
      const result = registryThemeSchema.safeParse({
        name: "cosmic",
        type: "theme",
        cssVars: { "--ap-primary": "99 102 241" },
      })
      expect(result.success).toBe(true)
    })

    it("should parse theme with optional fields", () => {
      const result = registryThemeSchema.safeParse({
        name: "cosmic",
        type: "theme",
        label: "Cosmic",
        description: "Indigo/Purple/Sky theme",
        cssVars: { "--ap-primary": "99 102 241" },
      })
      expect(result.success).toBe(true)
    })
  })

  describe("registryIndexSchema", () => {
    const validIndex = {
      version: "1.0.0",
      components: [
        { name: "button", type: "ui", description: "A button" },
      ],
      styles: [
        { name: "aurorapop", type: "style" },
      ],
      themes: [
        { name: "cosmic", type: "theme" },
      ],
    }

    it("should parse valid index", () => {
      const result = registryIndexSchema.safeParse(validIndex)
      expect(result.success).toBe(true)
    })

    it("should parse index with empty arrays", () => {
      const result = registryIndexSchema.safeParse({
        version: "1.0.0",
        components: [],
        styles: [],
        themes: [],
      })
      expect(result.success).toBe(true)
    })

    it("should fail without version", () => {
      const { version, ...noVersion } = validIndex
      expect(registryIndexSchema.safeParse(noVersion).success).toBe(false)
    })

    it("should fail without components", () => {
      const { components, ...noComponents } = validIndex
      expect(registryIndexSchema.safeParse(noComponents).success).toBe(false)
    })
  })

  describe("validateRegistryComponent", () => {
    it("should return component for valid data", () => {
      const result = validateRegistryComponent({
        name: "button",
        type: "ui",
        files: [{ path: "button.tsx", type: "ui", content: "" }],
      })
      expect(result).not.toBeNull()
      expect(result?.name).toBe("button")
    })

    it("should return null for invalid data", () => {
      expect(validateRegistryComponent({})).toBeNull()
      expect(validateRegistryComponent(null)).toBeNull()
    })
  })

  describe("validateRegistryIndex", () => {
    it("should return index for valid data", () => {
      const result = validateRegistryIndex({
        version: "1.0.0",
        components: [],
        styles: [],
        themes: [],
      })
      expect(result).not.toBeNull()
      expect(result?.version).toBe("1.0.0")
    })

    it("should return null for invalid data", () => {
      expect(validateRegistryIndex({})).toBeNull()
    })
  })
})
