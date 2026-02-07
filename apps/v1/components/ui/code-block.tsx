"use client"

import * as React from "react"
import { CopyIcon, CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string
  language?: string
  showLineNumbers?: boolean
  showCopyButton?: boolean
  filename?: string
}

function CodeBlock({
  code,
  language,
  showLineNumbers = false,
  showCopyButton = true,
  filename,
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const lines = code.split("\n")

  return (
    <div className="relative group">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 text-xs font-medium border-b border-border/60 bg-muted/30 rounded-t-lg">
          <span className="text-muted-foreground">{filename}</span>
          {language && (
            <span className="text-muted-foreground uppercase">{language}</span>
          )}
        </div>
      )}
      <div className="relative">
        <pre
          className={cn(
            "overflow-x-auto rounded-lg bg-muted/50 p-4 text-sm font-mono",
            filename && "rounded-t-none",
            className
          )}
          {...props}
        >
          <code>
            {showLineNumbers ? (
              <div className="flex gap-4">
                <div className="select-none text-muted-foreground/50 text-right">
                  {lines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="flex-1">
                  {lines.map((line, i) => (
                    <div key={i}>{line || "\u00A0"}</div>
                  ))}
                </div>
              </div>
            ) : (
              code
            )}
          </code>
        </pre>
        {showCopyButton && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleCopy}
          >
            {copied ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

export { CodeBlock, type CodeBlockProps }
