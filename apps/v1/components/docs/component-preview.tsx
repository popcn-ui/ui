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

export function ComponentPreview({
  title,
  children,
  code,
  className,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className={cn("border border-border/50 rounded-xl overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/20">
        <h3 className="text-sm font-medium">{title}</h3>
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {showCode ? "Preview" : "Code"}
        </button>
      </div>
      {showCode ? (
        <div className="p-4">
          <CodeBlock code={code} />
        </div>
      ) : (
        <div className="p-8 flex items-center justify-center gap-4 bg-background/50">
          {children}
        </div>
      )}
    </div>
  )
}
