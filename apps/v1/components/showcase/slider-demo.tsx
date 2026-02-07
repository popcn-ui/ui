"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"

function SliderDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Slider defaultValue={[50]} max={100} step={1} variant="aurora" />
      <Slider defaultValue={[20, 80]} max={100} step={1} variant="aurora" />
    </div>
  )
}

export { SliderDemo }
