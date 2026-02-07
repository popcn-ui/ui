"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Check, Sparkles, Zap } from "lucide-react"
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@/components/page-header"
import { Announcement } from "@/components/announcement"
import { ThemeSelector } from "@/components/theme-selector"
import { ComponentShowcase } from "@/components/component-showcase"

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [gradAngle, setGradAngle] = useState(135)

  const copyCommand = async () => {
    await navigator.clipboard.writeText("npx popcn init")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      style={{
        "--ap-grad-angle": `${gradAngle}deg`,
      } as React.CSSProperties}
    >
      {/* Aurora Background */}
      <div className="aurora-bg" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-16 pb-16">
        <PageHeader className="mb-8">
          {/* Announcement */}
          <Announcement
            href="/docs"
            icon={<Zap className="h-4 w-4 text-primary" />}
          >
            Documentation
          </Announcement>

          {/* Headline */}
          <PageHeaderHeading>
            Build{" "}
            <span className="text-aurora">beautiful</span>
            <br />
            interfaces faster
          </PageHeaderHeading>

          {/* Subheadline */}
          <PageHeaderDescription>
            A gradient-driven, motion-rich component library.
            Copy and paste components into your project with{" "}
            <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              popcn add
            </code>
          </PageHeaderDescription>

          {/* CTA */}
          <PageActions className="mt-4">
            <Button
              variant="aurora"
              motion="pop"
              size="lg"
              onClick={() => (window.location.href = "/docs/installation")}
            >
              Get Started
            </Button>

            <button
              onClick={copyCommand}
              className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-4 py-2.5 text-sm font-mono hover:bg-muted/50 transition-colors"
            >
              <span className="text-muted-foreground">$</span>
              <span>npx popcn init</span>
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </PageActions>
        </PageHeader>

        {/* Theme Selector */}
        <div className="mb-8">
          <ThemeSelector />
        </div>

        {/* Gradient Angle Controller */}
        <Card variant="glass" className="w-full max-w-sm">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Gradient Direction</h3>
              <span className="font-mono text-sm text-primary">{gradAngle}°</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="360"
                value={gradAngle}
                onChange={(e) => setGradAngle(Number(e.target.value))}
                className="flex-1 h-2 bg-muted rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-5
                  [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-primary
                  [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-white
                  [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(var(--ap-primary),0.5)]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb]:hover:scale-110
                  [&::-moz-range-thumb]:w-5
                  [&::-moz-range-thumb]:h-5
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-primary
                  [&::-moz-range-thumb]:border-2
                  [&::-moz-range-thumb]:border-white
                  [&::-moz-range-thumb]:shadow-[0_0_8px_rgba(var(--ap-primary),0.5)]
                  [&::-moz-range-thumb]:cursor-pointer"
              />
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 shadow-md"
                style={{
                  background: `linear-gradient(${gradAngle}deg, rgb(var(--ap-aurora-1)), rgb(var(--ap-aurora-2)), rgb(var(--ap-aurora-3)))`,
                }}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Component Showcase Section */}
      <section className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <ComponentShowcase />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why popcn/ui?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed for developers who want beautiful, accessible, and
              customizable components.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dual Skin System",
                description:
                  "Switch between Aurora gradients and NeumoPop neumorphism. Pair with cosmic, sunset, or neon theme presets.",
                icon: "gradient",
              },
              {
                title: "Motion Rich",
                description:
                  "Built-in animations: pop, float, shine, and snap for delightful interactions.",
                icon: "motion",
              },
              {
                title: "Copy & Paste",
                description:
                  "Own your code. Components are copied directly into your project.",
                icon: "code",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-aurora flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-8 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Built with popcn/ui
            </span>
          </div>
          <p className="text-sm text-muted-foreground">MIT License</p>
        </div>
      </footer>
    </div>
  )
}
