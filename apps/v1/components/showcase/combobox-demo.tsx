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

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "astro", label: "Astro" },
]

function ComboboxDemo() {
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <Combobox value={value} onValueChange={setValue}>
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
    </Combobox>
  )
}

export { ComboboxDemo }
