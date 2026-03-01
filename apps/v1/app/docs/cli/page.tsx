import { CodeBlock } from "@/components/docs/code-block"

export default function CLIPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">CLI Reference</h1>
        <p className="text-muted-foreground text-lg">
          The popcn CLI helps you initialize projects and add components.
        </p>
      </div>

      {/* Init Command */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">popcn init</h2>
        <p className="text-muted-foreground mb-4">
          Initialize popcn/ui in your project. This sets up the configuration file, CSS tokens, and
          utility functions.
        </p>
        <CodeBlock code="npx popcn init" />

        <h3 className="mb-3 mt-6 text-lg font-semibold">Options</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-border/50 border-b">
                <th className="px-4 py-3 text-left font-semibold">Option</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-border/50 divide-y">
              <tr>
                <td className="text-primary px-4 py-3 font-mono">-y, --yes</td>
                <td className="text-muted-foreground px-4 py-3">Skip confirmation prompts</td>
              </tr>
              <tr>
                <td className="text-primary px-4 py-3 font-mono">-d, --defaults</td>
                <td className="text-muted-foreground px-4 py-3">Use default configuration</td>
              </tr>
              <tr>
                <td className="text-primary px-4 py-3 font-mono">-f, --force</td>
                <td className="text-muted-foreground px-4 py-3">Force overwrite existing files</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 mt-6 text-lg font-semibold">What it does</h3>
        <ul className="text-muted-foreground list-inside list-disc space-y-2">
          <li>
            Creates <code className="text-primary bg-primary/10 rounded px-1">components.json</code>{" "}
            configuration
          </li>
          <li>Adds AuroraPop CSS tokens to your global stylesheet</li>
          <li>
            Creates <code className="text-primary bg-primary/10 rounded px-1">lib/utils.ts</code>{" "}
            with the cn() helper
          </li>
          <li>Sets up component and utility paths</li>
        </ul>
      </section>

      {/* Add Command */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">popcn add</h2>
        <p className="text-muted-foreground mb-4">
          Add components to your project from the registry.
        </p>
        <CodeBlock code="npx popcn add button" />

        <h3 className="mb-3 mt-6 text-lg font-semibold">Adding multiple components</h3>
        <CodeBlock code="npx popcn add button card input badge" />

        <h3 className="mb-3 mt-6 text-lg font-semibold">Options</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-border/50 border-b">
                <th className="px-4 py-3 text-left font-semibold">Option</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-border/50 divide-y">
              <tr>
                <td className="text-primary px-4 py-3 font-mono">-y, --yes</td>
                <td className="text-muted-foreground px-4 py-3">Skip confirmation prompts</td>
              </tr>
              <tr>
                <td className="text-primary px-4 py-3 font-mono">-o, --overwrite</td>
                <td className="text-muted-foreground px-4 py-3">Overwrite existing files</td>
              </tr>
              <tr>
                <td className="text-primary px-4 py-3 font-mono">-p, --path</td>
                <td className="text-muted-foreground px-4 py-3">Custom path for components</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* components.json */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">components.json</h2>
        <p className="text-muted-foreground mb-4">
          The configuration file that tells the CLI where to put things.
        </p>
        <CodeBlock
          code={`{
  "$schema": "https://popcnui.com/schema.json",
  "style": "aurorapop",
  "theme": "cosmic",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "lib": "@/lib"
  }
}`}
        />
      </section>

      {/* Environment Variables */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Environment Variables</h2>
        <p className="text-muted-foreground mb-4">
          Override the default registry URL for development or private registries.
        </p>
        <CodeBlock
          code={`# Use a local development registry
POPCN_REGISTRY_URL=http://localhost:3000/api/registry npx popcn add button

# Use a custom registry
POPCN_REGISTRY_URL=https://my-registry.com/api npx popcn add button`}
        />
      </section>
    </div>
  )
}
