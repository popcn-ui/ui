"use client"

import * as React from "react"
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@/components/ui/combobox"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "astro", label: "Astro" },
  { value: "svelte", label: "SvelteKit" },
]

export default function ComboboxPage() {
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Combobox</h1>
        <p className="text-lg text-muted-foreground">
          Searchable selection with a popover list.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add combobox" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="Framework Picker"
          code={`<Combobox value={value} onValueChange={setValue}>
  <ComboboxInput placeholder="Select framework..." />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxEmpty>No results.</ComboboxEmpty>
      <ComboboxGroup>
        <ComboboxLabel>Frameworks</ComboboxLabel>
        <ComboboxCollection>
          {frameworks.map((framework) => (
            <ComboboxItem key={framework.value} value={framework.value}>
              {framework.label}
            </ComboboxItem>
          ))}
        </ComboboxCollection>
      </ComboboxGroup>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
        >
          <Combobox value={value} onValueChange={setValue}>
            <ComboboxInput placeholder="Select framework..." />
            <ComboboxContent>
              <ComboboxList>
                <ComboboxEmpty>No results.</ComboboxEmpty>
                <ComboboxGroup>
                  <ComboboxLabel>Frameworks</ComboboxLabel>
                  <ComboboxCollection>
                    {frameworks.map((framework) => (
                      <ComboboxItem
                        key={framework.value}
                        value={framework.value}
                      >
                        {framework.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxCollection>
                </ComboboxGroup>
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </ComponentPreview>
      </section>
    </div>
  )
}
