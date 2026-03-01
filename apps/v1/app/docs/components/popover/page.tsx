"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function PopoverPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Popover</h1>
        <p className="text-muted-foreground text-lg">Popover component with positioning.</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add popover" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Popover Title</h4>
      <p className="text-sm text-muted-foreground">
        This is the popover content.
      </p>
    </div>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="glass">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="font-medium">Popover Title</h4>
                  <p className="text-muted-foreground text-sm">This is the popover content.</p>
                </div>
              </PopoverContent>
            </Popover>
          </ComponentPreview>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "align",
              type: '"start" | "center" | "end"',
              default: '"center"',
              description: "Alignment of the popover",
            },
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"bottom"',
              description: "Side of the trigger to show the popover",
            },
            {
              name: "sideOffset",
              type: "number",
              default: "4",
              description: "Distance from the trigger",
            },
          ]}
        />
      </section>
    </div>
  )
}
