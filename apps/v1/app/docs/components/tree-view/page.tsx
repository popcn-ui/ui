import type { Metadata } from "next"
import { TreeViewDemo } from "@/components/showcase/tree-view-demo"

export const metadata: Metadata = {
  title: "Tree View",
  description: "Tree view component for displaying hierarchical data",
}

export default function TreeViewPage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Tree View</h1>
          <p className="text-muted-foreground text-lg">
            A tree view component for displaying hierarchical data with expandable/collapsible
            nodes.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Example</h2>
            <div className="border-border/60 bg-background/60 rounded-lg border p-6 backdrop-blur-md">
              <TreeViewDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
