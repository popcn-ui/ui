import type { Metadata } from "next"
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
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Code Block</h1>
          <p className="text-muted-foreground text-lg">
            A code block component with line numbers, syntax highlighting support, and copy
            functionality.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Example</h2>
            <div className="border-border/60 bg-background/60 rounded-lg border p-6 backdrop-blur-md">
              <CodeBlockDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
