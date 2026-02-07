import { CodeBlock } from "@/components/docs/code-block"

export default function CLIPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">CLI Reference</h1>
        <p className="text-lg text-muted-foreground">
          The popcn CLI helps you initialize projects and add components.
        </p>
      </div>

      {/* Init Command */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">popcn init</h2>
        <p className="text-muted-foreground mb-4">
          Initialize popcn/ui in your project. This sets up the configuration
          file, CSS tokens, and utility functions.
        </p>
        <CodeBlock code="npx popcn init" />

        <h3 className="text-lg font-semibold mt-6 mb-3">Options</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-4 font-semibold">Option</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr>
                <td className="py-3 px-4 font-mono text-primary">-y, --yes</td>
                <td className="py-3 px-4 text-muted-foreground">
                  Skip confirmation prompts
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-primary">-d, --defaults</td>
                <td className="py-3 px-4 text-muted-foreground">
                  Use default configuration
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-primary">-f, --force</td>
                <td className="py-3 px-4 text-muted-foreground">
                  Force overwrite existing files
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">What it does</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Creates <code className="text-primary bg-primary/10 px-1 rounded">components.json</code> configuration</li>
          <li>Adds AuroraPop CSS tokens to your global stylesheet</li>
          <li>Creates <code className="text-primary bg-primary/10 px-1 rounded">lib/utils.ts</code> with the cn() helper</li>
          <li>Sets up component and utility paths</li>
        </ul>
      </section>

      {/* Add Command */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">popcn add</h2>
        <p className="text-muted-foreground mb-4">
          Add components to your project from the registry.
        </p>
        <CodeBlock code="npx popcn add button" />

        <h3 className="text-lg font-semibold mt-6 mb-3">Adding multiple components</h3>
        <CodeBlock code="npx popcn add button card input badge" />

        <h3 className="text-lg font-semibold mt-6 mb-3">Options</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-4 font-semibold">Option</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr>
                <td className="py-3 px-4 font-mono text-primary">-y, --yes</td>
                <td className="py-3 px-4 text-muted-foreground">
                  Skip confirmation prompts
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-primary">-o, --overwrite</td>
                <td className="py-3 px-4 text-muted-foreground">
                  Overwrite existing files
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-primary">-p, --path</td>
                <td className="py-3 px-4 text-muted-foreground">
                  Custom path for components
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* components.json */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">components.json</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Environment Variables</h2>
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
