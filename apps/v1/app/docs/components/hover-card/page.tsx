"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function HoverCardPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Hover Card</h1>
        <p className="text-lg text-muted-foreground">
          Preview content on hover.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add hover-card" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="Profile Preview"
          code={`<HoverCard>
  <HoverCardTrigger className="underline">
    @aurora
  </HoverCardTrigger>
  <HoverCardContent>
    <p className="font-medium">AuroraPop</p>
    <p className="text-sm text-muted-foreground">
      Gradient-driven UI toolkit.
    </p>
  </HoverCardContent>
</HoverCard>`}
        >
          <HoverCard>
            <HoverCardTrigger className="underline"> @aurora </HoverCardTrigger>
            <HoverCardContent>
              <p className="font-medium">AuroraPop</p>
              <p className="text-sm text-muted-foreground">
                Gradient-driven UI toolkit.
              </p>
            </HoverCardContent>
          </HoverCard>
        </ComponentPreview>
      </section>
    </div>
  )
}
