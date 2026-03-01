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
    <div className="group relative">
      {filename && (
        <div className="border-border/60 bg-muted/30 flex items-center justify-between rounded-t-lg border-b px-4 py-2 text-xs font-medium">
          <span className="text-muted-foreground">{filename}</span>
          {language && <span className="text-muted-foreground uppercase">{language}</span>}
        </div>
      )}
      <div className="relative">
        <pre
          className={cn(
            "bg-muted/50 overflow-x-auto rounded-lg p-4 font-mono text-sm",
            filename && "rounded-t-none",
            className
          )}
          {...props}
        >
          <code>
            {showLineNumbers ? (
              <div className="flex gap-4">
                <div className="text-muted-foreground/50 select-none text-right">
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
            className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={handleCopy}
          >
            {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
          </Button>
        )}
      </div>
    </div>
  )
}

export { CodeBlock, type CodeBlockProps }
