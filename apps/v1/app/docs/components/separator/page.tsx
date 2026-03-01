"use client"

import { Separator } from "@/components/ui/separator"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function SeparatorPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Separator</h1>
        <p className="text-muted-foreground text-lg">
          Visual divider with optional aurora gradient effect.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add separator" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Horizontal"
            code={`<div>
  <p>Content above</p>
  <Separator className="my-4" />
  <p>Content below</p>
</div>`}
          >
            <div className="w-full max-w-md">
              <p className="text-sm">Content above</p>
              <Separator className="my-4" />
              <p className="text-sm">Content below</p>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Vertical"
            code={`<div className="flex h-10 items-center space-x-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
  <Separator orientation="vertical" />
  <span>Item 3</span>
</div>`}
          >
            <div className="flex h-10 items-center space-x-4">
              <span className="text-sm">Item 1</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Item 2</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Item 3</span>
            </div>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Aurora Variant</h2>
        <ComponentPreview
          title="Gradient Separator"
          code={`<div>
  <p>Content above</p>
  <Separator variant="aurora" className="my-4" />
  <p>Content below</p>
</div>`}
        >
          <div className="w-full max-w-md">
            <p className="text-sm">Content above</p>
            <Separator variant="aurora" className="my-4" />
            <p className="text-sm">Content below</p>
          </div>
        </ComponentPreview>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">With Text</h2>
        <ComponentPreview
          title="Section Header"
          code={`<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium">My Account</h4>
    <p className="text-sm text-muted-foreground">
      Manage your account settings.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="text-sm">
    Account settings content here.
  </div>
</div>`}
        >
          <div className="w-full max-w-md">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">My Account</h4>
              <p className="text-muted-foreground text-sm">Manage your account settings.</p>
            </div>
            <Separator className="my-4" />
            <div className="text-sm">Account settings content here.</div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: "The orientation of the separator",
            },
            {
              name: "variant",
              type: '"default" | "aurora"',
              default: '"default"',
              description: "Visual style variant",
            },
          ]}
        />
      </section>
    </div>
  )
}
