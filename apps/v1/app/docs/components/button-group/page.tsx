"use client"

import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { Sparkles } from "lucide-react"

export default function ButtonGroupPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Button Group</h1>
        <p className="text-muted-foreground text-lg">Grouped actions with shared borders.</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add button-group" />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <ComponentPreview
          title="Grouped Actions"
          code={`<ButtonGroup>
  <Button variant="glass" size="sm">Day</Button>
  <Button variant="glass" size="sm">Week</Button>
  <Button variant="glass" size="sm">Month</Button>
  <ButtonGroupSeparator />
  <ButtonGroupText>
    <Sparkles />
    Aurora
  </ButtonGroupText>
</ButtonGroup>`}
        >
          <ButtonGroup>
            <Button variant="glass" size="sm" motion="none">
              Day
            </Button>
            <Button variant="glass" size="sm" motion="none">
              Week
            </Button>
            <Button variant="glass" size="sm" motion="none">
              Month
            </Button>
            <ButtonGroupSeparator />
            <ButtonGroupText>
              <Sparkles />
              Aurora
            </ButtonGroupText>
          </ButtonGroup>
        </ComponentPreview>
      </section>
    </div>
  )
}
