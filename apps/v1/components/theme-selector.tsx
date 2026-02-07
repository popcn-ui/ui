"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Theme = "cosmic" | "sunset" | "neon" | "mono"

interface ThemeOption {
  name: Theme
  label: string
  colors: string[]
}

const themes: ThemeOption[] = [
  {
    name: "cosmic",
    label: "Cosmic",
    colors: ["rgb(99, 102, 241)", "rgb(139, 92, 246)", "rgb(56, 189, 248)"],
  },
  {
    name: "sunset",
    label: "Sunset",
    colors: ["rgb(236, 72, 153)", "rgb(251, 146, 60)", "rgb(250, 204, 21)"],
  },
  {
    name: "neon",
    label: "Neon",
    colors: ["rgb(6, 182, 212)", "rgb(217, 70, 239)", "rgb(163, 230, 53)"],
  },
  {
    name: "mono",
    label: "Mono",
    colors: ["rgb(161, 161, 170)", "rgb(113, 113, 122)", "rgb(82, 82, 91)"],
  },
]

interface ThemeSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  onThemeChange?: (theme: Theme) => void
}

function ThemeSelector({
  className,
  onThemeChange,
  ...props
}: ThemeSelectorProps) {
  const [activeTheme, setActiveTheme] = React.useState<Theme>("cosmic")

  const handleThemeChange = (theme: Theme) => {
    setActiveTheme(theme)
    onThemeChange?.(theme)

    // Remove existing theme classes
    document.body.classList.remove("theme-sunset", "theme-neon", "theme-mono")

    // Add new theme class (cosmic is default, no class needed)
    if (theme !== "cosmic") {
      document.body.classList.add(`theme-${theme}`)
    }
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm p-1",
        className
      )}
      {...props}
    >
      {themes.map((theme) => (
        <button
          key={theme.name}
          onClick={() => handleThemeChange(theme.name)}
          className={cn(
            "flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-all",
            activeTheme === theme.name
              ? "bg-background/80 text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-pressed={activeTheme === theme.name}
        >
          <span
            className="h-3 w-3 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]}, ${theme.colors[2]})`,
            }}
          />
          <span className="hidden sm:inline">{theme.label}</span>
        </button>
      ))}
    </div>
  )
}

export { ThemeSelector }
export type { Theme }
