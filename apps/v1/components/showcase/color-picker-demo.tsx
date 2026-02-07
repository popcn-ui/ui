"use client"

import { useState } from "react"
import { ColorPicker } from "@/components/ui/color-picker"

export function ColorPickerDemo() {
  const [color, setColor] = useState("#6366f1")

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Color Picker (Hex)</label>
        <ColorPicker value={color} onChange={setColor} format="hex" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Color Picker (RGB)</label>
        <ColorPicker value={color} onChange={setColor} format="rgb" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Color Picker (HSL)</label>
        <ColorPicker value={color} onChange={setColor} format="hsl" />
      </div>
      <div className="text-sm text-muted-foreground">
        Selected: {color}
      </div>
    </div>
  )
}
