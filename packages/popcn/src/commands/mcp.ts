import { Command } from "commander"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import fs from "fs-extra"
import path from "path"
import chalk from "chalk"
import deepmerge from "deepmerge"
import { server } from "../mcp/index.js"

interface ClientConfig {
  name: string
  label: string
  configPath: string | ((cwd: string) => string)
  format: "json" | "toml"
  config: Record<string, unknown>
  /** Raw string to append for non-JSON formats */
  configString?: string
}

const TOML_CONFIG = `\n[mcp_servers.popcn]\ncommand = "npx"\nargs = ["popcn@latest", "mcp"]\n`

const CLIENTS: ClientConfig[] = [
  {
    name: "claude",
    label: "Claude Code",
    configPath: ".mcp.json",
    format: "json",
    config: {
      mcpServers: {
        popcn: {
          command: "npx",
          args: ["popcn@latest", "mcp"],
        },
      },
    },
  },
  {
    name: "cursor",
    label: "Cursor",
    configPath: ".cursor/mcp.json",
    format: "json",
    config: {
      mcpServers: {
        popcn: {
          command: "npx",
          args: ["popcn@latest", "mcp"],
        },
      },
    },
  },
  {
    name: "vscode",
    label: "VS Code",
    configPath: ".vscode/mcp.json",
    format: "json",
    config: {
      servers: {
        popcn: {
          command: "npx",
          args: ["popcn@latest", "mcp"],
        },
      },
    },
  },
  {
    name: "codex",
    label: "Codex",
    configPath: ".codex/config.toml",
    format: "toml",
    config: {},
    configString: TOML_CONFIG,
  },
  {
    name: "opencode",
    label: "OpenCode",
    configPath: "opencode.json",
    format: "json",
    config: {
      $schema: "https://opencode.ai/config.json",
      mcp: {
        popcn: {
          type: "local",
          command: ["npx", "popcn@latest", "mcp"],
          enabled: true,
        },
      },
    },
  },
]

export const mcpCommand = new Command()
  .name("mcp")
  .description("Start MCP server or configure MCP client integration")
  .action(async () => {
    const transport = new StdioServerTransport()
    await server.connect(transport)
  })

mcpCommand
  .command("init")
  .description("Initialize MCP configuration for your AI coding client")
  .option("--client <client>", "MCP client to configure (claude, cursor, vscode, codex, opencode)")
  .action(async (opts) => {
    let clientName = opts.client

    if (!clientName) {
      // Dynamic import prompts (ESM)
      const prompts = (await import("prompts")).default
      const response = await prompts({
        type: "select",
        name: "client",
        message: "Which MCP client do you want to configure?",
        choices: CLIENTS.map((c) => ({ title: c.label, value: c.name })),
      })

      if (!response.client) {
        console.log(chalk.yellow("Cancelled."))
        return
      }
      clientName = response.client
    }

    const client = CLIENTS.find((c) => c.name === clientName)
    if (!client) {
      console.error(
        chalk.red(
          `Unknown client "${clientName}". Available: ${CLIENTS.map((c) => c.name).join(", ")}`
        )
      )
      process.exit(1)
    }

    const cwd = process.cwd()
    const configPath =
      typeof client.configPath === "function"
        ? client.configPath(cwd)
        : path.resolve(cwd, client.configPath)

    // Ensure parent directory exists
    await fs.ensureDir(path.dirname(configPath))

    if (client.format === "toml") {
      // TOML: append config block if not already present
      let existing = ""
      if (await fs.pathExists(configPath)) {
        existing = await fs.readFile(configPath, "utf-8")
      }
      if (existing.includes("[mcp_servers.popcn]")) {
        console.log(
          chalk.blue(`popcn MCP server already configured in ${path.relative(cwd, configPath)}`)
        )
      } else {
        await fs.writeFile(configPath, existing + client.configString!, "utf-8")
      }
    } else {
      // JSON: merge with existing config
      let finalConfig = client.config

      if (await fs.pathExists(configPath)) {
        try {
          const existing = await fs.readJson(configPath)
          finalConfig = deepmerge(existing, client.config)
          console.log(
            chalk.blue(`Merging with existing config at ${path.relative(cwd, configPath)}`)
          )
        } catch {
          // If existing file is invalid JSON, overwrite it
        }
      }

      await fs.writeJson(configPath, finalConfig, { spaces: 2 })
    }

    console.log("")
    console.log(chalk.green(`✓ MCP configuration written to ${path.relative(cwd, configPath)}`))
    console.log("")
    console.log(`  ${chalk.bold(client.label)} will now be able to use popcn/ui tools:`)
    console.log(`  • list_components — Browse all available components`)
    console.log(`  • search_components — Fuzzy search for components`)
    console.log(`  • view_component — View source code and details`)
    console.log(`  • get_add_command — Get install commands`)
    console.log(`  • get_setup_guide — Full project setup guide`)
    console.log("")
  })
