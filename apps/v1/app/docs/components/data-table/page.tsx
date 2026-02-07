import { Metadata } from "next"
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Data Table</h1>
          <p className="text-lg text-muted-foreground">
            A powerful data table component with built-in sorting, filtering, and pagination.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Example</h2>
            <div className="rounded-lg border border-border/60 bg-background/60 backdrop-blur-md p-6">
              <DataTableDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
