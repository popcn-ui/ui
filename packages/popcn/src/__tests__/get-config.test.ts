import { describe, it, expect, beforeEach, afterEach } from "vitest"
import * as fs from "fs"
import * as path from "path"
import * as os from "os"
import { getConfig, writeConfig, configExists } from "../utils/get-config.js"

describe("get-config", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "popcn-test-"))
  })

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true })
  })

  it("should return null when config does not exist", () => {
    const config = getConfig(tempDir)
    expect(config).toBeNull()
  })

  it("should return false for configExists when no config", () => {
    expect(configExists(tempDir)).toBe(false)
  })

  it("should write and read config correctly", () => {
    const testConfig = {
      $schema: "https://popcnui.com/schema.json",
      style: "aurorapop",
      skin: "aurora" as const,
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

    writeConfig(testConfig, tempDir)

    expect(configExists(tempDir)).toBe(true)

    const readConfig = getConfig(tempDir)
    expect(readConfig).toEqual(testConfig)
  })

  it("should return null for invalid JSON", () => {
    const configPath = path.join(tempDir, "components.json")
    fs.writeFileSync(configPath, "{ invalid json }")

    const config = getConfig(tempDir)
    expect(config).toBeNull()
  })
})
