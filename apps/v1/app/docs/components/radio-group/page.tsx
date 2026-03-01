"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function RadioGroupPage() {
  const [value, setValue] = useState("option-one")

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Radio Group</h1>
        <p className="text-muted-foreground text-lg">Radio group component for single selection.</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npx popcn add radio-group" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Controlled</h2>
        <ComponentPreview
          title="Controlled Radio Group"
          code={`const [value, setValue] = useState("option-one")

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="r1" />
    <Label htmlFor="r1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="r2" />
    <Label htmlFor="r2">Option Two</Label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup value={value} onValueChange={setValue}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="r1" />
              <Label htmlFor="r1">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="r2" />
              <Label htmlFor="r2">Option Two</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "string",
              default: "-",
              description: "Controlled value",
            },
            {
              name: "onValueChange",
              type: "(value: string) => void",
              default: "-",
              description: "Callback when value changes",
            },
            {
              name: "defaultValue",
              type: "string",
              default: "-",
              description: "Default value",
            },
          ]}
        />
      </section>
    </div>
  )
}
