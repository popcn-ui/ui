import * as fs from "fs"
import * as path from "path"
import chalk from "chalk"
import prompts from "prompts"
import ora from "ora"
import { writeConfig, configExists, type ComponentsConfig } from "../utils/get-config.js"
import { getPackageManager, getInstallCommand } from "../utils/get-package-manager.js"
import { AURORAPOP_CSS, NEUMOPOP_CSS, GLASSPOP_CSS, UTILS_TS } from "../utils/templates.js"

interface InitOptions {
  yes?: boolean
  defaults?: boolean
  force?: boolean
}

type Framework = "next" | "vite" | "astro"

function detectFramework(cwd: string): Framework | null {
  const packageJsonPath = path.join(cwd, "package.json")

  if (!fs.existsSync(packageJsonPath)) {
    return null
  }

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"))
    const deps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    }

    if (deps.next) return "next"
    if (deps.astro) return "astro"
    if (deps.vite) return "vite"
  } catch {
    // Ignore parse errors
  }

  return null
}

function detectTailwind(cwd: string): string | null {
  const possibleConfigs = [
    "tailwind.config.js",
    "tailwind.config.ts",
    "tailwind.config.mjs",
    "tailwind.config.cjs",
  ]

  for (const config of possibleConfigs) {
    if (fs.existsSync(path.join(cwd, config))) {
      return config
    }
  }

  return null
}

function detectCssFile(cwd: string, framework: Framework | null): string {
  const possiblePaths = [
    "app/globals.css",
    "src/app/globals.css",
    "styles/globals.css",
    "src/styles/globals.css",
    "src/index.css",
    "src/styles.css",
    "styles/index.css",
  ]

  for (const cssPath of possiblePaths) {
    if (fs.existsSync(path.join(cwd, cssPath))) {
      return cssPath
    }
  }

  // Default based on framework
  if (framework === "next") return "app/globals.css"
  if (framework === "vite") return "src/index.css"
  if (framework === "astro") return "src/styles/globals.css"

  return "styles/globals.css"
}

export async function initCommand(options: InitOptions) {
  const cwd = process.cwd()

  console.log()
  console.log(chalk.bold("  popcn/ui ") + chalk.dim("- AuroraPop Design System"))
  console.log()

  // Check if already initialized
  if (configExists(cwd) && !options.force) {
    console.log(
      chalk.yellow("  Project already initialized. Use --force to reinitialize.")
    )
    return
  }

  // Detect framework
  const detectedFramework = detectFramework(cwd)
  const detectedTailwind = detectTailwind(cwd)
  const pm = getPackageManager(cwd)

  let framework: Framework = detectedFramework || "next"
  let tailwindConfig = detectedTailwind || "tailwind.config.ts"
  let cssFile = detectCssFile(cwd, detectedFramework)
  let componentsPath = "@/components"
  let utilsPath = "@/lib/utils"
  let skin: "aurora" | "neumopop" | "glasspop" = "aurora"
  let theme = "cosmic"

  // Interactive prompts unless --yes or --defaults
  if (!options.yes && !options.defaults) {
    const response = await prompts([
      {
        type: "select",
        name: "framework",
        message: "Which framework are you using?",
        choices: [
          { title: "Next.js", value: "next" },
          { title: "Vite + React", value: "vite" },
          { title: "Astro + React", value: "astro" },
        ],
        initial: framework === "next" ? 0 : framework === "vite" ? 1 : 2,
      },
      {
        type: "text",
        name: "tailwindConfig",
        message: "Where is your Tailwind config?",
        initial: tailwindConfig,
      },
      {
        type: "text",
        name: "cssFile",
        message: "Where is your global CSS file?",
        initial: cssFile,
      },
      {
        type: "text",
        name: "componentsPath",
        message: "Where should components be installed?",
        initial: componentsPath,
      },
      {
        type: "text",
        name: "utilsPath",
        message: "Where should utils be installed?",
        initial: utilsPath,
      },
      {
        type: "select",
        name: "skin",
        message: "Which skin style?",
        choices: [
          { title: "Aurora (Gradient-driven)", value: "aurora" },
          { title: "NeumoPop (Neumorphism)", value: "neumopop" },
          { title: "GlassPop (Liquid Glass)", value: "glasspop" },
        ],
        initial: 0,
      },
      {
        type: "select",
        name: "theme",
        message: "Which theme preset?",
        choices: [
          { title: "Cosmic (Indigo/Purple/Sky)", value: "cosmic" },
          { title: "Sunset (Pink/Orange/Yellow)", value: "sunset" },
          { title: "Neon (Cyan/Magenta/Lime)", value: "neon" },
        ],
        initial: 0,
      },
    ])

    if (!response.framework) {
      console.log(chalk.red("  Cancelled."))
      return
    }

    framework = response.framework
    tailwindConfig = response.tailwindConfig
    cssFile = response.cssFile
    componentsPath = response.componentsPath
    utilsPath = response.utilsPath
    skin = response.skin
    theme = response.theme
  }

  const spinner = ora("Initializing popcn/ui...").start()

  try {
    // Create components.json config
    const config: ComponentsConfig = {
      $schema: "https://popcnui.com/schema.json",
      style: "aurorapop",
      skin,
      theme,
      tailwind: {
        config: tailwindConfig,
        css: cssFile,
      },
      aliases: {
        components: componentsPath,
        utils: utilsPath,
        lib: utilsPath.replace("/utils", ""),
      },
    }

    writeConfig(config, cwd)
    spinner.text = "Created components.json"

    // Ensure directories exist
    const resolveAlias = (alias: string) => {
      if (alias.startsWith("@/")) {
        return path.join(cwd, alias.slice(2))
      }
      return path.join(cwd, alias)
    }

    const componentsDir = resolveAlias(componentsPath)
    const libDir = resolveAlias(config.aliases.lib)

    fs.mkdirSync(path.join(componentsDir, "ui"), { recursive: true })
    fs.mkdirSync(libDir, { recursive: true })

    // Write utils.ts
    const utilsFilePath = path.join(libDir, "utils.ts")
    if (!fs.existsSync(utilsFilePath) || options.force) {
      fs.writeFileSync(utilsFilePath, UTILS_TS)
      spinner.text = "Created lib/utils.ts"
    }

    // Write or update CSS file
    const cssFilePath = path.join(cwd, cssFile)
    const cssDir = path.dirname(cssFilePath)
    fs.mkdirSync(cssDir, { recursive: true })

    const skinCssMap: Record<string, string> = {
      aurora: AURORAPOP_CSS,
      neumopop: AURORAPOP_CSS + "\n" + NEUMOPOP_CSS,
      glasspop: AURORAPOP_CSS + "\n" + GLASSPOP_CSS,
    }
    const cssTemplate = skinCssMap[skin] ?? AURORAPOP_CSS

    if (!fs.existsSync(cssFilePath)) {
      fs.writeFileSync(cssFilePath, cssTemplate)
      spinner.text = `Created ${cssFile}`
    } else {
      // Check if already has AuroraPop tokens
      const existingCss = fs.readFileSync(cssFilePath, "utf-8")
      if (!existingCss.includes("--ap-primary")) {
        // Prepend AuroraPop CSS after @tailwind directives
        const tailwindDirectives = `@tailwind base;
@tailwind components;
@tailwind utilities;
`
        const cssWithoutDirectives = existingCss
          .replace(/@tailwind base;?\n?/g, "")
          .replace(/@tailwind components;?\n?/g, "")
          .replace(/@tailwind utilities;?\n?/g, "")
          .trim()

        fs.writeFileSync(
          cssFilePath,
          AURORAPOP_CSS + "\n\n/* Your existing styles */\n" + cssWithoutDirectives
        )
        spinner.text = `Updated ${cssFile} with AuroraPop tokens`
      }
    }

    spinner.succeed(chalk.green("Initialized popcn/ui"))

    // Print next steps
    console.log()
    console.log(chalk.dim("  Next steps:"))
    console.log()
    console.log(
      chalk.cyan(`  ${getInstallCommand(pm)} class-variance-authority clsx tailwind-merge`)
    )
    console.log()
    console.log(chalk.dim("  Then add components:"))
    console.log(chalk.cyan("  npx popcn add button"))
    console.log()
  } catch (error) {
    spinner.fail(chalk.red("Failed to initialize"))
    console.error(error)
    process.exit(1)
  }
}
