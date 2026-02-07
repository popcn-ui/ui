"use client"

import { useEffect, useState } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

type PackageManager = "npm" | "pnpm" | "yarn" | "bun"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
  showLineNumbers?: boolean
}

const packageManagers: PackageManager[] = ["npm", "pnpm", "yarn", "bun"]

function mapCommandByPackageManager(code: string, packageManager: PackageManager) {
  if (packageManager === "npm") return code

  const isBun = packageManager === "bun"
  const dlxCommand = isBun ? "bunx" : `${packageManager} dlx`
  const addCommand = isBun ? "bun add" : `${packageManager} add`
  const addDevCommand = isBun ? "bun add -d" : `${packageManager} add -D`

  return code
    .replace(/\bnpx\b/g, dlxCommand)
    .replace(/\bnpm\s+create\b/g, `${packageManager} create`)
    .replace(/\bnpm\s+install\s+--save-dev\b/g, addDevCommand)
    .replace(/\bnpm\s+install\s+-D\b/g, addDevCommand)
    .replace(/\bnpm\s+i\s+-D\b/g, addDevCommand)
    .replace(/\bnpm\s+i\s+--save-dev\b/g, addDevCommand)
    .replace(/\bnpm\s+install\b/g, addCommand)
    .replace(/\bnpm\s+i\b/g, addCommand)
    .replace(/\bnpm\s+run\s+([a-zA-Z0-9:_-]+)/g, (_, script: string) =>
      isBun ? `bun run ${script}` : `${packageManager} ${script}`
    )
}

export function CodeBlock({
  code,
  language = "tsx",
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [packageManager, setPackageManager] = useState<PackageManager>("npm")
  const canSwitchPackageManager = /\b(npx|npm)\b/.test(code)
  const displayedCode = canSwitchPackageManager
    ? mapCommandByPackageManager(code, packageManager)
    : code

  useEffect(() => {
    setCopied(false)
    if (!canSwitchPackageManager) {
      setPackageManager("npm")
    }
  }, [code, canSwitchPackageManager])

  const copy = async () => {
    await navigator.clipboard.writeText(displayedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative group", className)}>
      {canSwitchPackageManager ? (
        <div className="mb-2 inline-flex items-center gap-1 rounded-lg border border-border/50 bg-muted/30 p-1">
          {packageManagers.map((pm) => (
            <button
              key={pm}
              type="button"
              onClick={() => setPackageManager(pm)}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                packageManager === pm
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              {pm}
            </button>
          ))}
        </div>
      ) : null}
      <pre className="bg-muted/30 border border-border/50 rounded-lg p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground">{displayedCode}</code>
      </pre>
      <button
        onClick={copy}
        className="absolute top-3 right-3 p-2 rounded-md bg-muted/50 hover:bg-muted opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  )
}
