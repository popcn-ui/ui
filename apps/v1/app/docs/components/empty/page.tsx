"use client"

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { Sparkles } from "lucide-react"

export default function EmptyPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Empty</h1>
        <p className="text-lg text-muted-foreground">
          Empty state patterns with actions and messaging.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add empty" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="No results"
          code={`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Sparkles />
    </EmptyMedia>
    <EmptyTitle>No results</EmptyTitle>
    <EmptyDescription>Try adjusting your filters.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <button className="text-sm underline">Reset filters</button>
  </EmptyContent>
</Empty>`}
        >
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Sparkles />
              </EmptyMedia>
              <EmptyTitle>No results</EmptyTitle>
              <EmptyDescription>Try adjusting your filters.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <button className="text-sm underline">Reset filters</button>
            </EmptyContent>
          </Empty>
        </ComponentPreview>
      </section>
    </div>
  )
}
