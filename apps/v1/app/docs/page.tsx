import Link from "next/link"
import { Sparkles, Palette, Zap, Code } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Introduction</h1>
        <p className="text-lg text-muted-foreground">
          popcn/ui is a gradient-driven, motion-rich component library built for
          modern React applications. Components are copied directly into your
          project giving you full ownership and customization.
        </p>
      </div>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-aurora-gradient flex items-center justify-center mb-4">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Dual Skin System</h3>
            <p className="text-sm text-muted-foreground">
              Switch between Aurora gradients and NeumoPop neumorphism. Pair with cosmic, sunset, or neon theme presets.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-aurora-gradient flex items-center justify-center mb-4">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Motion Presets</h3>
            <p className="text-sm text-muted-foreground">
              Built-in animations: pop, float, shine, and snap for delightful interactions.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-aurora-gradient flex items-center justify-center mb-4">
              <Code className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Copy & Paste</h3>
            <p className="text-sm text-muted-foreground">
              Own your code. Components are copied directly into your project.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-aurora-gradient flex items-center justify-center mb-4">
              <Palette className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Theme Presets</h3>
            <p className="text-sm text-muted-foreground">
              Three beautiful themes: Cosmic, Sunset, and Neon with light/dark modes.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Quick Start</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
              1
            </div>
            <div>
              <p className="font-medium">Initialize your project</p>
              <code className="text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded mt-1 inline-block">
                npx popcn init
              </code>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
              2
            </div>
            <div>
              <p className="font-medium">Add components</p>
              <code className="text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded mt-1 inline-block">
                npx popcn add button
              </code>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
              3
            </div>
            <div>
              <p className="font-medium">Import and use</p>
              <code className="text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded mt-1 inline-block">
                {`import { Button } from "@/components/ui/button"`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Components Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Available Components</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              className="px-4 py-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-colors text-sm text-center"
            >
              {component}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
