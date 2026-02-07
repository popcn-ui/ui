"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox defaultChecked />
        <span className="text-sm">Enable notifications</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox />
        <span className="text-sm">Subscribe to newsletter</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer opacity-50">
        <Checkbox disabled />
        <span className="text-sm">Premium features</span>
      </label>
    </div>
  )
}

export { CheckboxDemo }
