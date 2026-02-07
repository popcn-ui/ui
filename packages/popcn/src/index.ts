import { Command } from "commander"
import { initCommand } from "./commands/init.js"
import { addCommand } from "./commands/add.js"
import { listCommand } from "./commands/list.js"
import packageJson from "../package.json"

const program = new Command()

program
  .name("popcn")
  .description("CLI for popcn/ui - AuroraPop design system")
  .version(packageJson.version)

program
  .command("init")
  .description("Initialize popcn/ui in your project")
  .option("-y, --yes", "Skip confirmation prompts", false)
  .option("-d, --defaults", "Use default configuration", false)
  .option("-f, --force", "Force overwrite existing files", false)
  .action(initCommand)

program
  .command("add")
  .description("Add a component to your project")
  .argument("[components...]", "Components to add")
  .option("-y, --yes", "Skip confirmation prompts", false)
  .option("-o, --overwrite", "Overwrite existing files", false)
  .option("-p, --path <path>", "Custom path for components")
  .action(addCommand)

program
  .command("list")
  .description("List all available components, styles, and themes")
  .option("--json", "Output as JSON", false)
  .action(listCommand)

program.parse()
