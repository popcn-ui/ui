import type { Metadata } from "next"
import { DataTableDemo } from "@/components/showcase/data-table-demo"

export const metadata: Metadata = {
  title: "Data Table",
  description: "Data table component with sorting, filtering, and pagination",
}

export default function DataTablePage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Data Table</h1>
          <p className="text-muted-foreground text-lg">
            A powerful data table component with built-in sorting, filtering, and pagination.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Example</h2>
            <div className="border-border/60 bg-background/60 rounded-lg border p-6 backdrop-blur-md">
              <DataTableDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
