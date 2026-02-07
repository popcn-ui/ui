"use client"

import { SplitButton } from "@/components/ui/split-button"

export function SplitButtonDemo() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <SplitButton
          onClick={() => alert("Primary action")}
          dropdownItems={[
            { label: "Save as...", onClick: () => alert("Save as") },
            { label: "Export", onClick: () => alert("Export") },
            { label: "Print", onClick: () => alert("Print") },
          ]}
        >
          Save
        </SplitButton>
        <SplitButton
          variant="ghost"
          onClick={() => alert("Primary action")}
          dropdownItems={[
            { label: "Option 1", onClick: () => alert("Option 1") },
            { label: "Option 2", onClick: () => alert("Option 2") },
            { label: "Separator", onClick: () => {}, separator: true, disabled: true },
            { label: "Option 3", onClick: () => alert("Option 3") },
          ]}
        >
          Actions
        </SplitButton>
      </div>
    </div>
  )
}
