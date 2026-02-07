import * as fs from "fs"
import * as path from "path"
import chalk from "chalk"
import prompts from "prompts"
import ora from "ora"
import { getConfig, configExists, resolveAlias } from "../utils/get-config.js"
import { getPackageManager, getInstallCommand } from "../utils/get-package-manager.js"
import { fetchRegistry, fetchComponent, type RegistryComponent } from "../utils/registry.js"

interface AddOptions {
  yes?: boolean
  overwrite?: boolean
  path?: string
}

export async function addCommand(
  components: string[],
  options: AddOptions
) {
  const cwd = process.cwd()

  console.log()

  // Check if initialized
  if (!configExists(cwd)) {
    console.log(
      chalk.red("  Project not initialized. Run ") +
        chalk.cyan("popcn init") +
        chalk.red(" first.")
    )
    return
  }

  const config = getConfig(cwd)
  if (!config) {
    console.log(chalk.red("  Failed to read components.json"))
    return
  }

  // If no components specified, show available components
  if (!components || components.length === 0) {
    const spinner = ora("Fetching available components...").start()

    try {
      const registry = await fetchRegistry()
      spinner.stop()

      console.log(chalk.bold("  Available components:"))
      console.log()

      for (const component of registry.components) {
        console.log(
          chalk.cyan(`  ${component.name}`) +
            chalk.dim(` - ${component.description || ""}`)
        )
      }

      console.log()
      console.log(chalk.dim("  Usage: ") + chalk.cyan("popcn add <component>"))
      console.log()

      // Interactive selection
      if (!options.yes) {
        const response = await prompts({
          type: "multiselect",
          name: "components",
          message: "Which components would you like to add?",
          choices: registry.components.map((c) => ({
            title: c.name,
            value: c.name,
            description: c.description,
          })),
        })

        if (response.components && response.components.length > 0) {
          components = response.components
        } else {
          return
        }
      } else {
        return
      }
    } catch (error) {
      spinner.fail(chalk.red("Failed to fetch registry"))
      console.error(error)
      return
    }
  }

  const pm = getPackageManager(cwd)
  const allDependencies = new Set<string>()
  const installedComponents: string[] = []

  for (const componentName of components) {
    const spinner = ora(`Adding ${componentName}...`).start()

    try {
      const component = await fetchComponent(componentName)

      // Collect dependencies
      if (component.dependencies) {
        component.dependencies.forEach((dep) => allDependencies.add(dep))
      }

      // Process registry dependencies (other components)
      if (component.registryDependencies && component.registryDependencies.length > 0) {
        for (const depName of component.registryDependencies) {
          if (!installedComponents.includes(depName)) {
            spinner.text = `Adding dependency: ${depName}...`
            const depComponent = await fetchComponent(depName)
            await writeComponentFiles(depComponent, config, cwd, options.overwrite)
            installedComponents.push(depName)

            if (depComponent.dependencies) {
              depComponent.dependencies.forEach((dep) => allDependencies.add(dep))
            }
          }
        }
      }

      // Write component files
      await writeComponentFiles(component, config, cwd, options.overwrite)
      installedComponents.push(componentName)

      spinner.succeed(chalk.green(`Added ${componentName}`))
    } catch (error) {
      spinner.fail(chalk.red(`Failed to add ${componentName}`))
      if (error instanceof Error) {
        console.log(chalk.dim(`  ${error.message}`))
      }
    }
  }

  // Print dependencies to install
  if (allDependencies.size > 0) {
    console.log()
    console.log(chalk.dim("  Install dependencies:"))
    console.log()
    console.log(
      chalk.cyan(`  ${getInstallCommand(pm)} ${Array.from(allDependencies).join(" ")}`)
    )
    console.log()
  }
}

async function writeComponentFiles(
  component: RegistryComponent,
  config: ReturnType<typeof getConfig>,
  cwd: string,
  overwrite?: boolean
) {
  if (!config) return

  for (const file of component.files) {
    // Determine output path based on file type
    let outputPath: string

    if (file.path.startsWith("components/ui/")) {
      const fileName = path.basename(file.path)
      const componentsDir = resolveAlias(config.aliases.components, cwd)
      outputPath = path.join(componentsDir, "ui", fileName)
    } else if (file.path.startsWith("lib/")) {
      const fileName = path.basename(file.path)
      const libDir = resolveAlias(config.aliases.lib, cwd)
      outputPath = path.join(libDir, fileName)
    } else {
      outputPath = path.join(cwd, file.path)
    }

    // Check if file exists
    if (fs.existsSync(outputPath) && !overwrite) {
      console.log(chalk.dim(`  Skipping ${file.path} (already exists)`))
      continue
    }

    // Ensure directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })

    // Transform imports in content
    let content = file.content

    // Replace @/ imports with configured alias
    if (config.aliases.utils !== "@/lib/utils") {
      content = content.replace(
        /@\/lib\/utils/g,
        config.aliases.utils
      )
    }

    // Write file
    fs.writeFileSync(outputPath, content)
  }
}
