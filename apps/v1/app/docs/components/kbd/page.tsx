"use client"

import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function KbdPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Kbd</h1>
        <p className="text-lg text-muted-foreground">
          Keyboard key indicator component.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add kbd" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Single Key"
            code={`<Kbd>⌘</Kbd>`}
          >
            <Kbd>⌘</Kbd>
          </ComponentPreview>

          <ComponentPreview
            title="Key Group"
            code={`<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}
          >
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Shortcut"
            code={`<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>Alt</Kbd>
  <Kbd>Del</Kbd>
</KbdGroup>`}
          >
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>Alt</Kbd>
              <Kbd>Del</Kbd>
            </KbdGroup>
          </ComponentPreview>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
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
