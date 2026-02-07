"use client"

import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

export default function NativeSelectPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Native Select</h1>
        <p className="text-lg text-muted-foreground">
          Native select dropdown with custom styling.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add native-select" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-6">
          <ComponentPreview
            title="Default"
            code={`<NativeSelect>
  <NativeSelectOption value="option1">Option 1</NativeSelectOption>
  <NativeSelectOption value="option2">Option 2</NativeSelectOption>
  <NativeSelectOption value="option3">Option 3</NativeSelectOption>
</NativeSelect>`}
          >
            <NativeSelect>
              <NativeSelectOption value="option1">Option 1</NativeSelectOption>
              <NativeSelectOption value="option2">Option 2</NativeSelectOption>
              <NativeSelectOption value="option3">Option 3</NativeSelectOption>
            </NativeSelect>
          </ComponentPreview>

          <ComponentPreview
            title="Small Size"
            code={`<NativeSelect size="sm">
  <NativeSelectOption value="option1">Option 1</NativeSelectOption>
  <NativeSelectOption value="option2">Option 2</NativeSelectOption>
</NativeSelect>`}
          >
            <NativeSelect size="sm">
              <NativeSelectOption value="option1">Option 1</NativeSelectOption>
              <NativeSelectOption value="option2">Option 2</NativeSelectOption>
            </NativeSelect>
          </ComponentPreview>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <PropsTable
          props={[
            {
              name: "size",
              type: '"sm" | "default"',
              default: '"default"',
              description: "Select size",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the select",
            },
          ]}
        />
      </section>
    </div>
  )
}
