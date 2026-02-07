"use client"

import { useState } from "react"
import { Rating } from "@/components/ui/rating"

export function RatingDemo() {
  const [value, setValue] = useState(0)
  const [halfValue, setHalfValue] = useState(3.5)
  const [readOnlyValue] = useState(4.5)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Interactive Rating</label>
        <Rating value={value} onChange={setValue} showValue />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Half Stars</label>
        <Rating value={halfValue} onChange={setHalfValue} allowHalf showValue />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Aurora Variant</label>
        <Rating value={readOnlyValue} variant="aurora" readOnly showValue />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Read Only</label>
        <Rating value={readOnlyValue} readOnly showValue />
      </div>
    </div>
  )
}
