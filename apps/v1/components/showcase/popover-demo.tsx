"use client"

import * as React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

function PopoverDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="glass" size="sm">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Popover Title</h4>
            <p className="text-sm text-muted-foreground">
              This is the popover content.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { PopoverDemo }
