"use client"

import * as React from "react"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

function NativeSelectDemo() {
  return (
    <div className="flex flex-col gap-4">
      <NativeSelect>
        <NativeSelectOption value="option1">Option 1</NativeSelectOption>
        <NativeSelectOption value="option2">Option 2</NativeSelectOption>
        <NativeSelectOption value="option3">Option 3</NativeSelectOption>
      </NativeSelect>
      <NativeSelect size="sm">
        <NativeSelectOption value="option1">Small Option 1</NativeSelectOption>
        <NativeSelectOption value="option2">Small Option 2</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}

export { NativeSelectDemo }
