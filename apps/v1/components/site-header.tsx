"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Sparkles, Menu, X, Sun, Moon, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { SkinSelector } from "@/components/skin-selector"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/docs/installation", label: "Docs" },
  { href: "/docs/components", label: "Components" },
  { href: "/blocks", label: "Blocks" },
]

function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">popcn/ui</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname?.startsWith(item.href.split("/").slice(0, 3).join("/"))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/popcn/ui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden sm:inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <div className="hidden sm:block">
              <SkinSelector />
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Sun className="h-4 w-4 text-muted-foreground" />
              {mounted ? (
                <Switch
                  variant="aurora"
                  size="sm"
                  checked={isDark}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                  aria-label="Toggle dark mode"
                />
              ) : (
                <span className="inline-flex h-5 w-9 rounded-full border border-border/60 bg-muted/40" />
              )}
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
            <Button
              variant="aurora"
              size="sm"
              motion="pop"
              className="hidden sm:flex"
              onClick={() => window.location.href = "/docs/installation"}
            >
              Get Started
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname?.startsWith(item.href.split("/").slice(0, 3).join("/"))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-3 py-2 text-sm rounded-md transition-colors",
                      isActive
                        ? "text-foreground font-medium bg-muted/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="flex items-center justify-between px-3 py-2 text-sm text-muted-foreground">
                <span>Skin</span>
                <SkinSelector />
              </div>
              <div className="flex items-center justify-between px-3 py-2 text-sm text-muted-foreground">
                <span>Theme</span>
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4" />
                  {mounted ? (
                    <Switch
                      variant="aurora"
                      size="sm"
                      checked={isDark}
                      onCheckedChange={(checked) =>
                        setTheme(checked ? "dark" : "light")
                      }
                      aria-label="Toggle dark mode"
                    />
                  ) : (
                    <span className="inline-flex h-5 w-9 rounded-full border border-border/60 bg-muted/40" />
                  )}
                  <Moon className="h-4 w-4" />
                </div>
              </div>
              <a
                href="https://github.com/popcn/ui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export { SiteHeader }
