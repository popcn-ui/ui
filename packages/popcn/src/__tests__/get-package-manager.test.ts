import { describe, it, expect, beforeEach, afterEach } from "vitest"
import * as fs from "fs"
import * as path from "path"
import * as os from "os"
import {
  getPackageManager,
  getInstallCommand,
  getDevInstallCommand,
} from "../utils/get-package-manager.js"

describe("get-package-manager", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "popcn-pm-test-"))
  })

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true })
  })

  it("should detect pnpm from lock file", () => {
    fs.writeFileSync(path.join(tempDir, "pnpm-lock.yaml"), "")
    expect(getPackageManager(tempDir)).toBe("pnpm")
  })

  it("should detect yarn from lock file", () => {
    fs.writeFileSync(path.join(tempDir, "yarn.lock"), "")
    expect(getPackageManager(tempDir)).toBe("yarn")
  })

  it("should detect npm from lock file", () => {
    fs.writeFileSync(path.join(tempDir, "package-lock.json"), "{}")
    expect(getPackageManager(tempDir)).toBe("npm")
  })

  it("should detect bun from lock file", () => {
    fs.writeFileSync(path.join(tempDir, "bun.lockb"), "")
    expect(getPackageManager(tempDir)).toBe("bun")
  })

  it("should default to npm when no lock file found", () => {
    expect(getPackageManager(tempDir)).toBe("npm")
  })

  it("should return correct install commands", () => {
    expect(getInstallCommand("npm")).toBe("npm install")
    expect(getInstallCommand("pnpm")).toBe("pnpm add")
    expect(getInstallCommand("yarn")).toBe("yarn add")
    expect(getInstallCommand("bun")).toBe("bun add")
  })

  it("should return correct dev install commands", () => {
    expect(getDevInstallCommand("npm")).toBe("npm install -D")
    expect(getDevInstallCommand("pnpm")).toBe("pnpm add -D")
    expect(getDevInstallCommand("yarn")).toBe("yarn add -D")
    expect(getDevInstallCommand("bun")).toBe("bun add -d")
  })
})
