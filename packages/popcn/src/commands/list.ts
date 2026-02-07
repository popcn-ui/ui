import chalk from "chalk"
import ora from "ora"
import { fetchRegistry, type RegistryIndex } from "../utils/registry.js"

interface ListOptions {
  json?: boolean
}

interface GroupedRegistry {
  components: Array<{ name: string; description?: string }>
  styles: Array<{ name: string; description?: string }>
  themes: Array<{ name: string; description?: string }>
}

function groupRegistry(registry: RegistryIndex): GroupedRegistry {
  return {
    components: registry.components || [],
    styles: registry.styles || [],
    themes: registry.themes || [],
  }
}

function printGroupedItems(
  title: string,
  items: Array<{ name: string; description?: string }>
) {
  if (items.length === 0) return

  console.log()
  console.log(chalk.bold.cyan(`  ${title}`))
  console.log(chalk.dim("  " + "─".repeat(40)))

  for (const item of items) {
    const description = item.description
      ? chalk.dim(` - ${item.description}`)
      : ""
    console.log(`  ${chalk.white(item.name)}${description}`)
  }
}

export async function listCommand(options: ListOptions) {
  console.log()

  const spinner = ora("Fetching registry...").start()

  try {
    const registry = await fetchRegistry()
    spinner.stop()

    // JSON output mode
    if (options.json) {
      const grouped = groupRegistry(registry)
      console.log(JSON.stringify(grouped, null, 2))
      return
    }

    // Pretty print mode
    console.log(chalk.bold("  popcn/ui Registry"))
    console.log()

    const grouped = groupRegistry(registry)

    printGroupedItems("Components", grouped.components)
    printGroupedItems("Styles", grouped.styles)
    printGroupedItems("Themes", grouped.themes)

    const totalCount =
      grouped.components.length +
      grouped.styles.length +
      grouped.themes.length

    console.log()
    console.log(chalk.dim(`  ${totalCount} items available`))
    console.log()
    console.log(chalk.dim("  Usage:"))
    console.log(chalk.cyan("    popcn add <component>") + chalk.dim(" - Add a component"))
    console.log(chalk.cyan("    popcn list --json") + chalk.dim("    - Output as JSON"))
    console.log()
  } catch (error) {
    spinner.fail(chalk.red("Failed to fetch registry"))
    if (error instanceof Error) {
      console.log(chalk.dim(`  ${error.message}`))
    }
    process.exit(1)
  }
}
