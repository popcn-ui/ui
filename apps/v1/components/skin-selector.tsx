"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Skin = "aurora" | "neumopop" | "glasspop"

const skins: { value: Skin; label: string }[] = [
  { value: "aurora", label: "Aurora" },
  { value: "neumopop", label: "Neumo" },
  { value: "glasspop", label: "Glass" },
]

function SkinSelector() {
  const [skin, setSkin] = React.useState<Skin>("aurora")
  const [mounted, setMounted] = React.useState(false)
  const pointerStart = React.useRef<{ x: number; y: number } | null>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setMounted(true)
    const current = document.documentElement.getAttribute("data-skin") as Skin | null
    if (current && skins.some((s) => s.value === current)) {
      setSkin(current)
    }
  }, [])

  const handleSkinChange = React.useCallback((newSkin: Skin) => {
    setSkin(newSkin)
    document.documentElement.setAttribute("data-skin", newSkin)
  }, [])

  const onPointerDown = React.useCallback((e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }, [])

  const onPointerUp = React.useCallback(
    (e: React.PointerEvent) => {
      if (!pointerStart.current) return
      const dx = e.clientX - pointerStart.current.x
      const dy = Math.abs(e.clientY - pointerStart.current.y)
      pointerStart.current = null

      const threshold = 20
      if (Math.abs(dx) < threshold || dy > Math.abs(dx)) return

      const idx = skins.findIndex((s) => s.value === skin)
      if (dx > 0 && idx < skins.length - 1) {
        handleSkinChange(skins[idx + 1].value)
      } else if (dx < 0 && idx > 0) {
        handleSkinChange(skins[idx - 1].value)
      }
    },
    [skin, handleSkinChange]
  )

  const onPointerCancel = React.useCallback(() => {
    pointerStart.current = null
  }, [])

  if (!mounted) {
    return (
      <div className="inline-flex h-8 items-center rounded-full border border-border/60 bg-muted/40 p-0.5">
        {skins.map((s) => (
          <span key={s.value} className="h-7 w-[4.25rem] rounded-full" />
        ))}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="inline-flex h-8 items-center rounded-full border border-border/60 bg-muted/40 p-0.5 touch-pan-y select-none"
      role="radiogroup"
      aria-label="Skin style"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      {skins.map((s) => (
        <button
          key={s.value}
          role="radio"
          aria-checked={skin === s.value}
          onClick={() => handleSkinChange(s.value)}
          className={cn(
            "relative h-7 rounded-full px-3 text-xs font-medium transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
            skin === s.value
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="flex items-center gap-1.5">
            <SkinSwatch value={s.value} />
            {s.label}
          </span>
        </button>
      ))}
    </div>
  )
}

function SkinSwatch({ value }: { value: Skin }) {
  if (value === "aurora") {
    return <span className="inline-block h-2.5 w-2.5 rounded-full bg-aurora" />
  }
  if (value === "neumopop") {
    return (
      <span
        className="inline-block h-2.5 w-2.5 rounded-full border border-border/60"
        style={{
          background: "rgb(var(--ap-muted))",
          boxShadow:
            "1px 1px 2px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.05)",
        }}
      />
    )
  }
  /* glasspop */
  return (
    <span
      className="inline-block h-2.5 w-2.5 rounded-full"
      style={{
        background: "rgba(var(--ap-primary), 0.35)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        boxShadow:
          "inset 0 0.5px 0 0 rgba(255,255,255,0.25), 0 1px 3px rgba(0,0,0,0.15)",
        border: "0.5px solid rgba(255,255,255,0.18)",
      }}
    />
  )
}

export { SkinSelector }
