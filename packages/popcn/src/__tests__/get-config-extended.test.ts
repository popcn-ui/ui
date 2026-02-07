import { describe, it, expect, beforeEach, afterEach } from "vitest"
import * as fs from "fs"
import * as path from "path"
import * as os from "os"
import {
  getConfigPath,
  getConfigWithErrors,
  resolveAlias,
} from "../utils/get-config.js"

describe("get-config - extended", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "popcn-config-ext-"))
  })

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true })
  })

  describe("getConfigPath", () => {
    it("should return components.json path for given cwd", () => {
      const result = getConfigPath(tempDir)
      expect(result).toBe(path.join(tempDir, "components.json"))
    })
  })

  describe("getConfigWithErrors", () => {
    it("should return errors when config file not found", () => {
      const result = getConfigWithErrors(tempDir)
      expect(result.config).toBeNull()
      expect(result.errors).toContain("components.json not found")
    })

    it("should return errors for invalid JSON", () => {
      fs.writeFileSync(
        path.join(tempDir, "components.json"),
        "{ broken json"
      )
      const result = getConfigWithErrors(tempDir)
      expect(result.config).toBeNull()
      expect(result.errors.length).toBeGreaterThan(0)
      expect(result.errors[0]).toContain("Failed to parse")
    })

    it("should return errors for invalid config shape", () => {
      fs.writeFileSync(
        path.join(tempDir, "components.json"),
        JSON.stringify({ style: "aurorapop" })
      )
      const result = getConfigWithErrors(tempDir)
      expect(result.config).toBeNull()
      expect(result.errors.length).toBeGreaterThan(0)
    })

    it("should return config with no errors for valid config", () => {
      fs.writeFileSync(
        path.join(tempDir, "components.json"),
        JSON.stringify({
          style: "aurorapop",
          theme: "cosmic",
          tailwind: { config: "tailwind.config.ts", css: "app/globals.css" },
          aliases: { components: "@/components", utils: "@/lib/utils", lib: "@/lib" },
        })
      )
      const result = getConfigWithErrors(tempDir)
      expect(result.config).not.toBeNull()
      expect(result.errors).toEqual([])
    })
  })

  describe("resolveAlias", () => {
    it("should resolve @/ alias to cwd path", () => {
      const result = resolveAlias("@/components", "/project")
      expect(result).toBe(path.join("/project", "components"))
    })

    it("should resolve relative path to cwd", () => {
      const result = resolveAlias("src/components", "/project")
      expect(result).toBe(path.join("/project", "src/components"))
    })

    it("should handle @/lib/utils", () => {
      const result = resolveAlias("@/lib/utils", "/project")
      expect(result).toBe(path.join("/project", "lib/utils"))
    })
  })
})
