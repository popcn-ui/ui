"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function SelectDemo() {
  return (
    <div className="w-full max-w-[200px]">
      <Select defaultValue="cosmic">
        <SelectTrigger>
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Themes</SelectLabel>
            <SelectItem value="cosmic">Cosmic</SelectItem>
            <SelectItem value="sunset">Sunset</SelectItem>
            <SelectItem value="neon">Neon</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export { SelectDemo }
