import { Metadata } from "next"
import { CodeBlockDemo } from "@/components/showcase/code-block-demo"

export const metadata: Metadata = {
  title: "Code Block",
  description: "Code block component with syntax highlighting and copy functionality",
}

export default function CodeBlockPage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Code Block</h1>
          <p className="text-lg text-muted-foreground">
            A code block component with line numbers, syntax highlighting support, and copy functionality.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Example</h2>
            <div className="rounded-lg border border-border/60 bg-background/60 backdrop-blur-md p-6">
              <CodeBlockDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
