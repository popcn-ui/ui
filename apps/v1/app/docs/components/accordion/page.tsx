"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function AccordionPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Accordion</h1>
        <p className="text-lg text-muted-foreground">
          Collapsible sections with smooth aurora-friendly animations.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add accordion" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="Basic Accordion"
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is AuroraPop?</AccordionTrigger>
    <AccordionContent>
      A gradient-driven, motion-rich design system.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it customizable?</AccordionTrigger>
    <AccordionContent>
      Yes. Update theme tokens to match your brand.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full max-w-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is AuroraPop?</AccordionTrigger>
              <AccordionContent>
                A gradient-driven, motion-rich design system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it customizable?</AccordionTrigger>
              <AccordionContent>
                Yes. Update theme tokens to match your brand.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "type",
              type: '"single" | "multiple"',
              default: '"single"',
              description: "Accordion selection behavior",
            },
            {
              name: "collapsible",
              type: "boolean",
              default: "false",
              description: "Allow closing the active item",
            },
          ]}
        />
      </section>
    </div>
  )
}
