import Link from "next/link"
import { Sparkles, Palette, Zap, Code } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Introduction</h1>
        <p className="text-muted-foreground text-lg">
          popcn/ui is a gradient-driven, motion-rich component library built for modern React
          applications. Components are copied directly into your project giving you full ownership
          and customization.
        </p>
      </div>

      {/* Features */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-xl p-6">
            <div className="bg-aurora-gradient mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Skin System</h3>
            <p className="text-muted-foreground text-sm">
              Multiple visual skins — Aurora gradients, NeumoPop neumorphism, GlassPop frosted
              glass, and more. Pair with theme presets to match your brand.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="bg-aurora-gradient mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Motion Presets</h3>
            <p className="text-muted-foreground text-sm">
              Built-in animations: pop, float, shine, and snap for delightful interactions.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="bg-aurora-gradient mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
              <Code className="h-5 w-5 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Copy & Paste</h3>
            <p className="text-muted-foreground text-sm">
              Own your code. Components are copied directly into your project.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="bg-aurora-gradient mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
              <Palette className="h-5 w-5 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Theme Presets</h3>
            <p className="text-muted-foreground text-sm">
              Cosmic, Sunset, Neon, Mono and more — each with light/dark modes.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Quick Start</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
              1
            </div>
            <div>
              <p className="font-medium">Initialize your project</p>
              <code className="text-muted-foreground bg-muted/30 mt-1 inline-block rounded px-2 py-1 text-sm">
                npx popcn init
              </code>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
              2
            </div>
            <div>
              <p className="font-medium">Add components</p>
              <code className="text-muted-foreground bg-muted/30 mt-1 inline-block rounded px-2 py-1 text-sm">
                npx popcn add button
              </code>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
              3
            </div>
            <div>
              <p className="font-medium">Import and use</p>
              <code className="text-muted-foreground bg-muted/30 mt-1 inline-block rounded px-2 py-1 text-sm">
                {`import { Button } from "@/components/ui/button"`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Components Overview */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Available Components</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "Button",
            "Input",
            "Label",
            "Card",
            "Badge",
            "Avatar",
            "Dialog",
            "Dropdown",
            "Tabs",
            "Select",
            "Checkbox",
            "Switch",
            "Tooltip",
            "Skeleton",
            "Separator",
            "Toast",
          ].map((component) => (
            <Link
              key={component}
              href={`/docs/components/${component.toLowerCase()}`}
              className="border-border/50 hover:border-primary/50 hover:bg-muted/30 rounded-lg border px-4 py-3 text-center text-sm transition-colors"
            >
              {component}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
