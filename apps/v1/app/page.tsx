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
      style={
        {
          "--ap-grad-angle": `${gradAngle}deg`,
        } as React.CSSProperties
      }
    >
      {/* Aurora Background */}
      <div className="aurora-bg" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 pb-16 pt-16">
        <PageHeader className="mb-8">
          {/* Announcement */}
          <Announcement href="/docs" icon={<Zap className="text-primary h-4 w-4" />}>
            Documentation
          </Announcement>

          {/* Headline */}
          <PageHeaderHeading>
            Build <span className="text-aurora">beautiful</span>
            <br />
            interfaces faster
          </PageHeaderHeading>

          {/* Subheadline */}
          <PageHeaderDescription>
            A gradient-driven, motion-rich component library. Copy and paste components into your
            project with{" "}
            <code className="text-primary bg-primary/10 rounded px-1.5 py-0.5">popcn add</code>
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
              className="border-border bg-muted/30 hover:bg-muted/50 flex items-center gap-2 rounded-lg border px-4 py-2.5 font-mono text-sm transition-colors"
            >
              <span className="text-muted-foreground">$</span>
              <span>npx popcn init</span>
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="text-muted-foreground h-4 w-4" />
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
          <CardContent className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Gradient Direction</h3>
              <span className="text-primary font-mono text-sm">{gradAngle}°</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="360"
                value={gradAngle}
                onChange={(e) => setGradAngle(Number(e.target.value))}
                className="bg-muted [&::-webkit-slider-thumb]:bg-primary [&::-moz-range-thumb]:bg-primary h-2 flex-1 cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_0_8px_rgba(var(--ap-primary),0.5)] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(var(--ap-primary),0.5)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
              />
              <div
                className="h-8 w-8 flex-shrink-0 rounded-full shadow-md"
                style={{
                  background: `linear-gradient(${gradAngle}deg, rgb(var(--ap-aurora-1)), rgb(var(--ap-aurora-2)), rgb(var(--ap-aurora-3)))`,
                }}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Component Showcase Section */}
      <section className="relative px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <ComponentShowcase />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Why popcn/ui?</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Designed for developers who want beautiful, accessible, and customizable components.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Skin System",
                description:
                  "Multiple visual skins — Aurora gradients, NeumoPop neumorphism, GlassPop frosted glass, and more. Pair with theme presets to match your brand.",
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
                description: "Own your code. Components are copied directly into your project.",
                icon: "code",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="glass hover:border-primary/50 rounded-xl p-6 transition-colors"
              >
                <div className="bg-aurora mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-border/50 relative border-t px-4 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="text-primary h-5 w-5" />
            <span className="text-muted-foreground text-sm">Built with popcn/ui</span>
          </div>
          <p className="text-muted-foreground text-sm">MIT License</p>
        </div>
      </footer>
    </div>
  )
}
