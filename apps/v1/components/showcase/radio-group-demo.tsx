"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

function RadioGroupDemo() {
  return (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="demo-1" />
          <Label htmlFor="demo-1">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="demo-2" />
          <Label htmlFor="demo-2">Option Two</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="demo-3" />
          <Label htmlFor="demo-3">Option Three</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

export { RadioGroupDemo }
