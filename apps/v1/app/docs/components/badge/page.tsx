"use client"

import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function BadgePage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Badge</h1>
        <p className="text-lg text-muted-foreground">
          Small status indicator with aurora, glass, and outline variants.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add badge" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Aurora (default)"
            code={`<Badge variant="aurora">Aurora</Badge>`}
          >
            <Badge variant="aurora">Aurora</Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Glass"
            code={`<Badge variant="glass">Glass</Badge>`}
          >
            <Badge variant="glass">Glass</Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Outline"
            code={`<Badge variant="outline">Outline</Badge>`}
          >
            <Badge variant="outline">Outline</Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Secondary"
            code={`<Badge variant="secondary">Secondary</Badge>`}
          >
            <Badge variant="secondary">Secondary</Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Destructive"
            code={`<Badge variant="destructive">Destructive</Badge>`}
          >
            <Badge variant="destructive">Destructive</Badge>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <ComponentPreview
          title="Multiple Badges"
          code={`<div className="flex gap-2">
  <Badge variant="aurora">New</Badge>
  <Badge variant="glass">Featured</Badge>
  <Badge variant="outline">Beta</Badge>
</div>`}
        >
          <div className="flex gap-2">
            <Badge variant="aurora">New</Badge>
            <Badge variant="glass">Featured</Badge>
            <Badge variant="outline">Beta</Badge>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"aurora" | "glass" | "outline" | "secondary" | "destructive"',
              default: '"aurora"',
              description: "Visual style variant",
            },
          ]}
        />
      </section>
    </div>
  )
}
