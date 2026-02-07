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
        <h1 className="text-4xl font-bold mb-4">Input Group</h1>
        <p className="text-lg text-muted-foreground">
          Inputs with addons, buttons, and inline content.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add input-group" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
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
