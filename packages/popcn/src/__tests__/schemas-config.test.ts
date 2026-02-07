import { describe, it, expect } from "vitest"
import {
  componentsConfigSchema,
  validateConfig,
  getConfigErrors,
} from "../schemas/config.js"

describe("schemas/config", () => {
  const validConfig = {
    style: "aurorapop",
    theme: "cosmic",
    tailwind: {
      config: "tailwind.config.ts",
      css: "app/globals.css",
    },
    aliases: {
      components: "@/components",
      utils: "@/lib/utils",
      lib: "@/lib",
    },
  }

  describe("componentsConfigSchema", () => {
    it("should parse a valid config", () => {
      const result = componentsConfigSchema.safeParse(validConfig)
      expect(result.success).toBe(true)
    })

    it("should parse config with $schema field", () => {
      const result = componentsConfigSchema.safeParse({
        ...validConfig,
        $schema: "https://popcnui.com/schema.json",
      })
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.$schema).toBe("https://popcnui.com/schema.json")
      }
    })

    it("should parse config with optional registryUrl", () => {
      const result = componentsConfigSchema.safeParse({
        ...validConfig,
        registryUrl: "https://custom.registry.com/api",
      })
      expect(result.success).toBe(true)
    })

    it("should reject registryUrl with invalid URL", () => {
      const result = componentsConfigSchema.safeParse({
        ...validConfig,
        registryUrl: "not-a-url",
      })
      expect(result.success).toBe(false)
    })

    it("should apply default values for style and theme", () => {
      const result = componentsConfigSchema.safeParse({
        tailwind: { config: "tailwind.config.ts", css: "app/globals.css" },
        aliases: { components: "@/components", utils: "@/lib/utils", lib: "@/lib" },
      })
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.style).toBe("aurorapop")
        expect(result.data.theme).toBe("cosmic")
      }
    })

    it("should fail when tailwind object is missing", () => {
      const result = componentsConfigSchema.safeParse({
        style: "aurorapop",
        aliases: { components: "@/components", utils: "@/lib/utils", lib: "@/lib" },
      })
      expect(result.success).toBe(false)
    })

    it("should fail when aliases object is missing", () => {
      const result = componentsConfigSchema.safeParse({
        style: "aurorapop",
        tailwind: { config: "tailwind.config.ts", css: "app/globals.css" },
      })
      expect(result.success).toBe(false)
    })

    it("should fail when tailwind.config is missing", () => {
      const result = componentsConfigSchema.safeParse({
        ...validConfig,
        tailwind: { css: "app/globals.css" },
      })
      expect(result.success).toBe(false)
    })

    it("should fail when aliases.components is missing", () => {
      const result = componentsConfigSchema.safeParse({
        ...validConfig,
        aliases: { utils: "@/lib/utils", lib: "@/lib" },
      })
      expect(result.success).toBe(false)
    })
  })

  describe("validateConfig", () => {
    it("should return config for valid data", () => {
      const result = validateConfig(validConfig)
      expect(result).not.toBeNull()
      expect(result?.style).toBe("aurorapop")
      expect(result?.theme).toBe("cosmic")
    })

    it("should return null for invalid data", () => {
      expect(validateConfig({})).toBeNull()
      expect(validateConfig(null)).toBeNull()
      expect(validateConfig("string")).toBeNull()
    })
  })

  describe("getConfigErrors", () => {
    it("should return empty array for valid config", () => {
      expect(getConfigErrors(validConfig)).toEqual([])
    })

    it("should return errors for missing required fields", () => {
      const errors = getConfigErrors({})
      expect(errors.length).toBeGreaterThan(0)
    })

    it("should include path in error messages", () => {
      const errors = getConfigErrors({ style: "aurorapop" })
      const hasPath = errors.some(
        (e) => e.includes("tailwind") || e.includes("aliases")
      )
      expect(hasPath).toBe(true)
    })

    it("should return multiple errors when multiple fields missing", () => {
      const errors = getConfigErrors({})
      expect(errors.length).toBeGreaterThanOrEqual(2)
    })
  })
})
