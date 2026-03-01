"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { CodeBlock } from "./code-block"

interface ComponentPreviewProps {
  title: string
  children: React.ReactNode
  code: string
  className?: string
}

export function ComponentPreview({ title, children, code, className }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className={cn("border-border/50 overflow-hidden rounded-xl border", className)}>
      <div className="border-border/50 bg-muted/20 flex items-center justify-between border-b px-4 py-3">
        <h3 className="text-sm font-medium">{title}</h3>
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-muted-foreground hover:text-foreground text-xs transition-colors"
        >
          {showCode ? "Preview" : "Code"}
        </button>
      </div>
      {showCode ? (
        <div className="p-4">
          <CodeBlock code={code} />
        </div>
      ) : (
        <div className="bg-background/50 flex items-center justify-center gap-4 p-8">
          {children}
        </div>
      )}
    </div>
  )
}
