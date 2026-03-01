"use client"

import * as React from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function CollapsiblePage() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Collapsible</h1>
        <p className="text-muted-foreground text-lg">Toggle sections of content with a trigger.</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add collapsible" />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <ComponentPreview
          title="Reveal Details"
          code={`<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger asChild>
    <Button variant="glass">
      {open ? "Hide details" : "Show details"}
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="mt-4">
    <div className="glass rounded-lg p-4">
      Aurora gradients stay smooth across themes.
    </div>
  </CollapsibleContent>
</Collapsible>`}
        >
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="glass">{open ? "Hide details" : "Show details"}</Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="glass text-muted-foreground rounded-lg p-4 text-sm">
                Aurora gradients stay smooth across themes.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ComponentPreview>
      </section>
    </div>
  )
}
