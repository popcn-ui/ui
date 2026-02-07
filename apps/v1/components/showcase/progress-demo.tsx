"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

function ProgressDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Progress value={33} variant="aurora" />
      <Progress value={50} variant="aurora" />
      <Progress value={75} variant="aurora" />
      <Progress value={100} variant="aurora" />
    </div>
  )
}

export { ProgressDemo }
