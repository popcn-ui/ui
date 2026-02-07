"use client"

import { CopyButton } from "@/components/ui/copy-button"
import { Input } from "@/components/ui/input"

export function CopyButtonDemo() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <label className="text-sm font-medium">Copy Text</label>
        <div className="flex gap-2">
          <Input value="npx popcn init" readOnly className="flex-1" />
          <CopyButton value="npx popcn init" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Copy with Custom Label</label>
        <CopyButton
          value="https://popcn.dev"
          copyLabel="Copy URL"
          copiedLabel="URL Copied!"
        />
      </div>
    </div>
  )
}
