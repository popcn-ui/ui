"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          Checkbox input with aurora gradient effect when checked.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add checkbox" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<Checkbox />`}
          >
            <Checkbox />
          </ComponentPreview>

          <ComponentPreview
            title="With Label"
            code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
          >
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Checked"
            code={`<Checkbox checked />`}
          >
            <Checkbox checked />
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code={`<div className="flex gap-4">
  <Checkbox disabled />
  <Checkbox disabled checked />
</div>`}
          >
            <div className="flex gap-4">
              <Checkbox disabled />
              <Checkbox disabled checked />
            </div>
          </ComponentPreview>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Controlled</h2>
        <ComponentPreview
          title="Controlled Checkbox"
          code={`const [checked, setChecked] = useState(false)

<div className="flex items-center space-x-2">
  <Checkbox
    id="controlled"
    checked={checked}
    onCheckedChange={setChecked}
  />
  <Label htmlFor="controlled">
    {checked ? "Checked" : "Unchecked"}
  </Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox
              id="controlled"
              checked={checked}
              onCheckedChange={(value) => setChecked(value === true)}
            />
            <Label htmlFor="controlled">
              {checked ? "Checked" : "Unchecked"}
            </Label>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "checked",
              type: "boolean | 'indeterminate'",
              default: "-",
              description: "Controlled checked state",
            },
            {
              name: "onCheckedChange",
              type: "(checked: boolean | 'indeterminate') => void",
              default: "-",
              description: "Callback when checked state changes",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the checkbox",
            },
          ]}
        />
      </section>
    </div>
  )
}
