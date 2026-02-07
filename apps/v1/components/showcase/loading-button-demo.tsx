"use client"

import { useState } from "react"
import { LoadingButton } from "@/components/ui/loading-button"

export function LoadingButtonDemo() {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <LoadingButton loading={loading} onClick={handleClick}>
          Submit
        </LoadingButton>
        <LoadingButton
          loading={loading}
          onClick={handleClick}
          loadingText="Processing..."
          variant="aurora"
        >
          Save Changes
        </LoadingButton>
        <LoadingButton
          loading={loading}
          onClick={handleClick}
          variant="ghost"
          size="sm"
        >
          Small Button
        </LoadingButton>
      </div>
    </div>
  )
}
