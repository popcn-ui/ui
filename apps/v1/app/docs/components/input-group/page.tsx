"use client"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { Sparkles } from "lucide-react"

export default function InputGroupPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Input Group</h1>
        <p className="text-muted-foreground text-lg">
          Inputs with addons, buttons, and inline content.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add input-group" />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <ComponentPreview
          title="Addon + Action"
          code={`<InputGroup>
  <InputGroupAddon>
    <Sparkles /> aurora.dev
  </InputGroupAddon>
  <InputGroupInput placeholder="Username" />
  <InputGroupButton variant="ghost" size="icon-xs">
    <Sparkles />
  </InputGroupButton>
</InputGroup>`}
        >
          <InputGroup>
            <InputGroupAddon>
              <Sparkles /> aurora.dev
            </InputGroupAddon>
            <InputGroupInput placeholder="Username" />
            <InputGroupButton variant="ghost" size="icon-xs">
              <Sparkles />
            </InputGroupButton>
          </InputGroup>
        </ComponentPreview>
      </section>
    </div>
  )
}
