"use client"

import * as React from "react"
import { Spinner } from "@/components/ui/spinner"

function SpinnerDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Spinner className="size-4" />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
      </div>
    </div>
  )
}

export { SpinnerDemo }
