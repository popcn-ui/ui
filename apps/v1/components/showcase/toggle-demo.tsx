"use client"

import * as React from "react"
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

function ToggleDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Variants */}
      <div className="flex flex-wrap items-center gap-3">
        <Toggle variant="default">Default</Toggle>
        <Toggle variant="outline">Outline</Toggle>
        <Toggle variant="aurora">Aurora</Toggle>
        <Toggle variant="glass">Glass</Toggle>
      </div>
      {/* With Icons */}
      <div className="flex flex-wrap items-center gap-3">
        <Toggle>
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle>
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle>
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
      {/* Sizes */}
      <div className="flex flex-wrap items-center gap-3">
        <Toggle size="sm">Small</Toggle>
        <Toggle size="default">Default</Toggle>
        <Toggle size="lg">Large</Toggle>
      </div>
    </div>
  )
}

export { ToggleDemo }
