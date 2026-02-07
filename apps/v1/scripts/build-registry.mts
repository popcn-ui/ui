import * as fs from "fs"
import * as path from "path"

const ROOT = process.cwd()
const REGISTRY_DIR = path.join(ROOT, "registry")
const PUBLIC_R_DIR = path.join(ROOT, "public", "r")
const COMPONENTS_DIR = path.join(ROOT, "components", "ui")
const LIB_DIR = path.join(ROOT, "lib")
const STYLES_DIR = path.join(ROOT, "styles")

interface RegistryItem {
  name: string
  type: string
  description?: string
  files?: Array<{ path: string; type: string; content?: string }>
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  cssVars?: Record<string, Record<string, string>>
  tailwindConfig?: Record<string, unknown>
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function readJsonFile(filePath: string): unknown {
  const content = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(content)
}

function writeJsonFile(filePath: string, data: unknown) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

function getFileContent(relativePath: string): string {
  const fullPath = path.join(ROOT, relativePath)
  if (fs.existsSync(fullPath)) {
    return fs.readFileSync(fullPath, "utf-8")
  }
  throw new Error(`File not found: ${fullPath}`)
}

function buildComponentRegistry() {
  const uiDir = path.join(REGISTRY_DIR, "ui")
  if (!fs.existsSync(uiDir)) return []

  const items: RegistryItem[] = []
  const files = fs.readdirSync(uiDir).filter((f) => f.endsWith(".json"))

  for (const file of files) {
    const filePath = path.join(uiDir, file)
    const item = readJsonFile(filePath) as RegistryItem

    // Read actual file contents
    if (item.files) {
      item.files = item.files.map((f) => ({
        ...f,
        content: getFileContent(f.path),
      }))
    }

    items.push(item)
  }

  return items
}

function buildStylesRegistry() {
  const stylesDir = path.join(REGISTRY_DIR, "styles")
  if (!fs.existsSync(stylesDir)) return []

  const items: RegistryItem[] = []
  const files = fs.readdirSync(stylesDir).filter((f) => f.endsWith(".json"))

  for (const file of files) {
    const filePath = path.join(stylesDir, file)
    const item = readJsonFile(filePath) as RegistryItem
    items.push(item)
  }

  return items
}

function buildThemesRegistry() {
  const themesDir = path.join(REGISTRY_DIR, "themes")
  if (!fs.existsSync(themesDir)) return []

  const items: RegistryItem[] = []
  const files = fs.readdirSync(themesDir).filter((f) => f.endsWith(".json"))

  for (const file of files) {
    const filePath = path.join(themesDir, file)
    const item = readJsonFile(filePath) as RegistryItem
    items.push(item)
  }

  return items
}

async function main() {
  console.log("Building registry...")

  ensureDir(PUBLIC_R_DIR)
  ensureDir(path.join(PUBLIC_R_DIR, "ui"))
  ensureDir(path.join(PUBLIC_R_DIR, "styles"))
  ensureDir(path.join(PUBLIC_R_DIR, "themes"))

  // Build components
  const components = buildComponentRegistry()
  for (const component of components) {
    const outputPath = path.join(PUBLIC_R_DIR, "ui", `${component.name}.json`)
    writeJsonFile(outputPath, component)
    console.log(`  - Built: ui/${component.name}.json`)
  }

  // Build styles
  const styles = buildStylesRegistry()
  for (const style of styles) {
    const outputPath = path.join(PUBLIC_R_DIR, "styles", `${style.name}.json`)
    writeJsonFile(outputPath, style)
    console.log(`  - Built: styles/${style.name}.json`)
  }

  // Build themes
  const themes = buildThemesRegistry()
  for (const theme of themes) {
    const outputPath = path.join(PUBLIC_R_DIR, "themes", `${theme.name}.json`)
    writeJsonFile(outputPath, theme)
    console.log(`  - Built: themes/${theme.name}.json`)
  }

  // Build index
  const index = {
    version: "0.0.1",
    components: components.map((c) => ({
      name: c.name,
      type: c.type,
      description: c.description,
      dependencies: c.dependencies,
      registryDependencies: c.registryDependencies,
    })),
    styles: styles.map((s) => ({
      name: s.name,
      type: s.type,
      description: s.description,
    })),
    themes: themes.map((t) => ({
      name: t.name,
      type: t.type,
      description: t.description,
    })),
  }

  writeJsonFile(path.join(PUBLIC_R_DIR, "index.json"), index)
  console.log("  - Built: index.json")

  // Build utils
  const utilsContent = getFileContent("lib/utils.ts")
  writeJsonFile(path.join(PUBLIC_R_DIR, "utils.json"), {
    name: "utils",
    type: "util",
    files: [
      {
        path: "lib/utils.ts",
        type: "util",
        content: utilsContent,
      },
    ],
    dependencies: ["clsx", "tailwind-merge"],
  })
  console.log("  - Built: utils.json")

  console.log("\nRegistry build complete!")
}

main().catch(console.error)
