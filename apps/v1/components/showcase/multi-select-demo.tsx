"use client"

import { useState } from "react"
import { MultiSelect } from "@/components/ui/multi-select"

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
  { label: "Remix", value: "remix" },
]

export function MultiSelectDemo() {
  const [value, setValue] = useState<string[]>([])

  return (
    <div className="w-full max-w-sm space-y-4">
      <MultiSelect
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder="Select frameworks..."
        maxCount={3}
      />
      {value.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Selected: {value.join(", ")}
        </div>
      )}
    </div>
  )
}
