"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function ScrollAreaPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Scroll Area</h1>
        <p className="text-muted-foreground text-lg">Scrollable area component.</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add scroll-area" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <ComponentPreview
          title="Scrollable Content"
          code={`<ScrollArea className="h-72 w-full rounded-md border p-4">
  <div className="space-y-2">
    {Array.from({ length: 20 }, (_, i) => (
      <div key={i} className="text-sm">
        Item {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="h-72 w-full max-w-sm rounded-md border p-4">
            <div className="space-y-2">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="text-sm">
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "className",
              type: "string",
              default: "-",
              description: "Additional CSS classes",
            },
          ]}
        />
      </section>
    </div>
  )
}
