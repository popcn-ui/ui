"use client"

import * as React from "react"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

function KbdDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
        <Kbd>Ctrl</Kbd>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>Alt</Kbd>
          <Kbd>Del</Kbd>
        </KbdGroup>
      </div>
    </div>
  )
}

export { KbdDemo }
