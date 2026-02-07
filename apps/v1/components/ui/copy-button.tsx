"use client"

import * as React from "react"
import { CopyIcon, CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

interface CopyButtonProps extends Omit<ButtonProps, "onClick" | "onCopy"> {
  value: string
  onCopy?: (value: string) => void
  copiedLabel?: string
  copyLabel?: string
  duration?: number
}

function CopyButton({
  value,
  onCopy,
  copiedLabel = "Copied!",
  copyLabel = "Copy",
  duration = 2000,
  className,
  children,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      onCopy?.(value)
      setTimeout(() => setCopied(false), duration)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className={cn("gap-2", className)}
      {...props}
    >
      {copied ? (
        <>
          <CheckIcon className="h-4 w-4" />
          {copiedLabel}
        </>
      ) : (
        <>
          <CopyIcon className="h-4 w-4" />
          {children || copyLabel}
        </>
      )}
    </Button>
  )
}

export { CopyButton, type CopyButtonProps }
