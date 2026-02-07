"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { CodeBlock } from "@/components/docs/code-block"

interface MotionDemoProps {
  title: string
  description: string
  motion: "pop" | "float" | "shine" | "wave" | "snap" | "bounce" | "wiggle" | "jelly" | "none"
  explanation: string
  code: string
}

function MotionDemo({ title, description, motion, explanation, code }: MotionDemoProps) {
  return (
    <Card variant="glass" className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center p-8 bg-muted/20 rounded-lg">
          <Button variant="aurora" motion={motion} size="lg">
            {title} Effect
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">{explanation}</p>
        <CodeBlock code={code} />
      </CardContent>
    </Card>
  )
}

function AnimationClassDemo({
  title,
  className,
  description
}: {
  title: string
  className: string
  description: string
}) {
  const [key, setKey] = useState(0)

  return (
    <div className="p-4 bg-muted/20 rounded-lg space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{title}</span>
        <code className="text-xs bg-muted/50 px-2 py-1 rounded">.{className}</code>
      </div>
      <div className="flex items-center justify-center py-6">
        <div
          key={key}
          className={`w-16 h-16 rounded-lg bg-gradient-to-r from-[rgb(var(--ap-aurora-1))] via-[rgb(var(--ap-aurora-2))] to-[rgb(var(--ap-aurora-3))] ${className}`}
        />
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setKey(k => k + 1)}
        className="w-full"
      >
        Replay
      </Button>
    </div>
  )
}

export default function MotionPage() {
  const [motionEnabled, setMotionEnabled] = useState(true)

  return (
    <div className={`max-w-4xl ${!motionEnabled ? 'ap-motion-reduce' : ''}`}>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Motion</h1>
        <p className="text-lg text-muted-foreground">
          popcn/ui includes a comprehensive motion system designed for GenZ aesthetics.
          Bouncy, playful animations that feel responsive and delightful without being distracting.
        </p>
      </div>

      {/* Motion Toggle */}
      <section className="mb-12 p-4 bg-muted/20 rounded-lg">
        <div className="flex items-center gap-3">
          <Checkbox
            checked={motionEnabled}
            onCheckedChange={(checked) => setMotionEnabled(checked === true)}
          />
          <label className="text-sm">
            Enable animations (uses <code className="bg-muted/50 px-1 rounded">--ap-motion</code> token)
          </label>
        </div>
      </section>

      {/* Token Reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Animation Tokens</h2>
        <p className="text-muted-foreground mb-6">
          Customize timing and easing through CSS custom properties.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="text-base">Duration Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between"><span>--ap-dur-1</span><span className="text-muted-foreground">100ms</span></div>
                <div className="flex justify-between"><span>--ap-dur-2</span><span className="text-muted-foreground">200ms</span></div>
                <div className="flex justify-between"><span>--ap-dur-3</span><span className="text-muted-foreground">300ms</span></div>
                <div className="flex justify-between"><span>--ap-dur-4</span><span className="text-muted-foreground">500ms</span></div>
                <div className="flex justify-between"><span>--ap-dur-5</span><span className="text-muted-foreground">800ms</span></div>
              </div>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardHeader>
              <CardTitle className="text-base">Easing Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between"><span>--ap-ease-pop</span><span className="text-muted-foreground">Bouncy</span></div>
                <div className="flex justify-between"><span>--ap-ease-soft</span><span className="text-muted-foreground">Soft</span></div>
                <div className="flex justify-between"><span>--ap-ease-snap</span><span className="text-muted-foreground">Sharp</span></div>
                <div className="flex justify-between"><span>--ap-ease-spring</span><span className="text-muted-foreground">Elastic</span></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <CodeBlock
          code={`:root {
  /* Duration tokens */
  --ap-dur-1: 100ms;   /* Micro: button press */
  --ap-dur-2: 200ms;   /* Quick: pop, snap */
  --ap-dur-3: 300ms;   /* Standard: most transitions */
  --ap-dur-4: 500ms;   /* Emphasis: entrance animations */
  --ap-dur-5: 800ms;   /* Dramatic: confetti, sequences */

  /* Easing tokens */
  --ap-ease-pop: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ap-ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
  --ap-ease-snap: cubic-bezier(0.2, 0, 0, 1);
  --ap-ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Motion control */
  --ap-motion: 1;        /* 1=enabled, 0=disabled */
  --ap-motion-scale: 1;  /* Intensity multiplier */
}`}
        />
      </section>

      {/* Idle vs Click */}
      <section className="mb-12 p-4 bg-muted/20 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">定常モーションとクリック時モーション</h2>
        <p className="text-muted-foreground mb-4">
          <strong>motionIdle</strong>（定常）は float / shine / wave のように常時再生、
          <strong>motionClick</strong>（クリック時）は pop / snap / bounce / wiggle / jelly のようにクリックで発火します。
          両方指定して組み合わせられます。
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <Button variant="aurora" motionIdle="shine" motionClick="pop" size="sm">shine + pop</Button>
          <Button variant="aurora" motionIdle="wave" motionClick="bounce" size="sm">wave + bounce</Button>
          <Button variant="aurora" motionIdle="float" motionClick="jelly" size="sm">float + jelly</Button>
        </div>
        <CodeBlock
          code={`<Button motionIdle="shine" motionClick="pop">shine + pop</Button>
<Button motionIdle="wave" motionClick="bounce">wave + bounce</Button>`}
        />
      </section>

      {/* Motion Presets Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Motion Presets</h2>
        <p className="text-muted-foreground mb-6">
          <code className="text-sm bg-muted/50 px-1.5 py-0.5 rounded">motion</code> で従来どおり一括指定も可能です。
          定常とクリック時を分けたい場合は <code className="text-sm bg-muted/50 px-1.5 py-0.5 rounded">motionIdle</code> / <code className="text-sm bg-muted/50 px-1.5 py-0.5 rounded">motionClick</code> を使ってください。
        </p>

        <div className="flex flex-wrap gap-4 mb-6">
          {(["pop", "bounce", "wiggle", "jelly", "float", "shine", "wave", "snap", "none"] as const).map((m) => (
            <Button key={m} variant="aurora" motion={m}>
              {m}
            </Button>
          ))}
        </div>

        <CodeBlock
          code={`<Button motion="pop">Pop</Button>
<Button motion="bounce">Bounce</Button>
<Button motion="wiggle">Wiggle</Button>
<Button motion="jelly">Jelly</Button>
<Button motion="float">Float</Button>
<Button motion="shine">Shine</Button>
<Button motion="wave">Wave</Button>
<Button motion="snap">Snap</Button>
<Button motion="none">None</Button>`}
        />
      </section>

      {/* Individual Motion Demos */}
      <section className="mb-12 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Motion Details</h2>

        <MotionDemo
          title="Pop"
          description="Default motion preset"
          motion="pop"
          explanation="Quick scale bounce on click. Satisfying feedback that feels responsive."
          code={`<Button motion="pop" />`}
        />

        <MotionDemo
          title="Bounce"
          description="Vertical bounce with scale"
          motion="bounce"
          explanation="Playful vertical bounce combined with subtle scaling. Perfect for likes, notifications, and celebratory actions."
          code={`<Button motion="bounce" />`}
        />

        <MotionDemo
          title="Wiggle"
          description="Horizontal shake animation"
          motion="wiggle"
          explanation="Attention-grabbing horizontal shake. Great for error states or drawing user attention."
          code={`<Button motion="wiggle" />`}
        />

        <MotionDemo
          title="Jelly"
          description="Elastic squash and stretch"
          motion="jelly"
          explanation="Playful jelly-like deformation. Adds a fun, bouncy character to interactions."
          code={`<Button motion="jelly" />`}
        />

        <MotionDemo
          title="Float"
          description="Continuous gentle hover"
          motion="float"
          explanation="Subtle floating animation that draws attention. Best for CTAs and featured actions."
          code={`<Button motion="float" />`}
        />

        <MotionDemo
          title="Shine"
          description="Gradient sweep effect"
          motion="shine"
          explanation="::before の光の帯が左端から右端へ約2.5秒でスイープするループアニメーションです。常時動くため、クリック時の pop や bounce より控えめで、プライマリボタンにさりげないきらめきを足したいときに使います。"
          code={`<Button motion="shine" />`}
        />

        <MotionDemo
          title="Wave"
          description="Gradient wave effect"
          motion="wave"
          explanation="グラデーションの背景位置を波のように動かすループアニメーションです。約4秒かけてグラデーションが上下左右にゆらめき、有機的な動きを生み出します。常時動くため、控えめなアクセントとして使えます。"
          code={`<Button motion="wave" />`}
        />

        <MotionDemo
          title="Snap"
          description="Instant press feedback"
          motion="snap"
          explanation="Immediate scale reduction on press. Creates tactile button-press feel."
          code={`<Button motion="snap" />`}
        />
      </section>

      {/* Utility Classes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Utility Classes</h2>
        <p className="text-muted-foreground mb-6">
          Pre-built utility classes for common animation patterns.
        </p>

        <h3 className="text-lg font-medium mb-4">Hover Effects</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Float</span>
              <code className="text-xs bg-muted/50 px-2 py-1 rounded">.ap-hover-float</code>
            </div>
            <div className="flex justify-center py-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-[rgb(var(--ap-aurora-1))] to-[rgb(var(--ap-aurora-2))] ap-hover-float cursor-pointer" />
            </div>
            <p className="text-xs text-muted-foreground">Hover to see the float effect</p>
          </div>

          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Scale</span>
              <code className="text-xs bg-muted/50 px-2 py-1 rounded">.ap-hover-scale</code>
            </div>
            <div className="flex justify-center py-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-[rgb(var(--ap-aurora-1))] to-[rgb(var(--ap-aurora-2))] ap-hover-scale cursor-pointer" />
            </div>
            <p className="text-xs text-muted-foreground">Hover to see the scale effect</p>
          </div>

          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Glow</span>
              <code className="text-xs bg-muted/50 px-2 py-1 rounded">.ap-hover-glow</code>
            </div>
            <div className="flex justify-center py-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-[rgb(var(--ap-aurora-1))] to-[rgb(var(--ap-aurora-2))] ap-hover-glow cursor-pointer" />
            </div>
            <p className="text-xs text-muted-foreground">Hover to see the glow effect</p>
          </div>

          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Tilt</span>
              <code className="text-xs bg-muted/50 px-2 py-1 rounded">.ap-hover-tilt</code>
            </div>
            <div className="flex justify-center py-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-[rgb(var(--ap-aurora-1))] to-[rgb(var(--ap-aurora-2))] ap-hover-tilt cursor-pointer" />
            </div>
            <p className="text-xs text-muted-foreground">Hover to see the tilt effect</p>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-4">Active Effects</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Squish</span>
              <code className="text-xs bg-muted/50 px-2 py-1 rounded">.ap-active-squish</code>
            </div>
            <div className="flex justify-center py-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-[rgb(var(--ap-aurora-1))] to-[rgb(var(--ap-aurora-2))] ap-active-squish cursor-pointer" />
            </div>
            <p className="text-xs text-muted-foreground">Click and hold to see the squish effect</p>
          </div>

          <div className="p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Press</span>
              <code className="text-xs bg-muted/50 px-2 py-1 rounded">.ap-active-press</code>
            </div>
            <div className="flex justify-center py-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-[rgb(var(--ap-aurora-1))] to-[rgb(var(--ap-aurora-2))] ap-active-press cursor-pointer" />
            </div>
            <p className="text-xs text-muted-foreground">Click and hold to see the press effect</p>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-4">Enter/Exit Animations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <AnimationClassDemo
            title="Pop In"
            className="ap-enter-pop"
            description="Scale from 0.9 with fade"
          />
          <AnimationClassDemo
            title="Slide In"
            className="ap-enter-slide"
            description="Slide up from below"
          />
          <AnimationClassDemo
            title="Bounce In"
            className="ap-enter-bounce"
            description="Bouncy entrance"
          />
          <AnimationClassDemo
            title="Jelly In"
            className="ap-enter-jelly"
            description="Elastic jelly entrance"
          />
        </div>

        <CodeBlock
          code={`/* Transition presets */
.ap-trans-pop    /* Bouncy transition */
.ap-trans-snap   /* Sharp transition */
.ap-trans-soft   /* Soft transition */
.ap-trans-spring /* Elastic transition */

/* Hover effects */
.ap-hover-float  /* Float up on hover */
.ap-hover-glow   /* Glow on hover */
.ap-hover-scale  /* Scale up on hover */
.ap-hover-tilt   /* Tilt on hover */

/* Active effects */
.ap-active-squish /* Squish on press */
.ap-active-press  /* Press down on click */

/* Enter animations */
.ap-enter-pop    /* Pop in */
.ap-enter-slide  /* Slide up */
.ap-enter-bounce /* Bounce in */
.ap-enter-jelly  /* Jelly in */

/* Exit animations */
.ap-exit-fade    /* Fade out */
.ap-exit-slide   /* Slide down */

/* Special effects */
.ap-wiggle       /* Shake animation */
.ap-pulse-ring   /* Ripple effect */
.ap-confetti     /* Celebration */`}
        />
      </section>

      {/* Card Motion Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Card Motion Variants</h2>
        <p className="text-muted-foreground mb-6">
          Cards support motion variants for interactive hover effects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card variant="glass" motion="float" className="p-6 cursor-pointer">
            <p className="font-medium mb-1">Float</p>
            <p className="text-sm text-muted-foreground">motion=&quot;float&quot;</p>
          </Card>
          <Card variant="glass" motion="scale" className="p-6 cursor-pointer">
            <p className="font-medium mb-1">Scale</p>
            <p className="text-sm text-muted-foreground">motion=&quot;scale&quot;</p>
          </Card>
          <Card variant="glass" motion="tilt" className="p-6 cursor-pointer">
            <p className="font-medium mb-1">Tilt</p>
            <p className="text-sm text-muted-foreground">motion=&quot;tilt&quot;</p>
          </Card>
          <Card variant="glass" motion="glow" className="p-6 cursor-pointer">
            <p className="font-medium mb-1">Glow</p>
            <p className="text-sm text-muted-foreground">motion=&quot;glow&quot;</p>
          </Card>
        </div>

        <CodeBlock
          code={`<Card motion="float">Float on hover</Card>
<Card motion="scale">Scale on hover</Card>
<Card motion="tilt">Tilt on hover</Card>
<Card motion="glow">Glow on hover</Card>`}
        />
      </section>

      {/* Tailwind Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tailwind Configuration</h2>
        <p className="text-muted-foreground mb-4">
          Extend your Tailwind config to include the animation utilities.
        </p>
        <CodeBlock
          code={`// tailwind.config.ts
export default {
  theme: {
    extend: {
      keyframes: {
        "ap-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "30%": { transform: "translateY(-8px) scale(1.02)" },
          "50%": { transform: "translateY(-4px) scale(1)" },
          "70%": { transform: "translateY(-2px) scale(1.01)" },
        },
        "ap-wiggle": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%": { transform: "translateX(-4px)" },
          "20%, 40%": { transform: "translateX(4px)" },
          // ... shake pattern
        },
        "ap-jelly": {
          "0%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(0.95, 1.05)" },
          "50%": { transform: "scale(1.05, 0.95)" },
          "75%": { transform: "scale(0.98, 1.02)" },
          "100%": { transform: "scale(1, 1)" },
        },
        // ... more keyframes
      },
      animation: {
        "ap-bounce": "ap-bounce var(--ap-dur-3) var(--ap-ease-pop)",
        "ap-wiggle": "ap-wiggle var(--ap-dur-4) var(--ap-ease-snap)",
        "ap-jelly": "ap-jelly var(--ap-dur-3) var(--ap-ease-spring)",
        // ... more animations
      },
      transitionDuration: {
        "ap-1": "var(--ap-dur-1)",
        "ap-2": "var(--ap-dur-2)",
        "ap-3": "var(--ap-dur-3)",
        "ap-4": "var(--ap-dur-4)",
        "ap-5": "var(--ap-dur-5)",
      },
      transitionTimingFunction: {
        "ap-pop": "var(--ap-ease-pop)",
        "ap-soft": "var(--ap-ease-soft)",
        "ap-snap": "var(--ap-ease-snap)",
        "ap-spring": "var(--ap-ease-spring)",
      },
    },
  },
}`}
        />
      </section>

      {/* Accessibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <p className="text-muted-foreground mb-4">
          popcn/ui respects user motion preferences and provides multiple ways to control animations.
        </p>

        <div className="space-y-4 mb-6">
          <Card variant="glass" className="p-4">
            <h3 className="font-medium mb-2">1. System Preference</h3>
            <p className="text-sm text-muted-foreground">
              Automatically respects <code className="bg-muted/50 px-1 rounded">prefers-reduced-motion</code>.
              When enabled, <code className="bg-muted/50 px-1 rounded">--ap-motion</code> is set to 0.
            </p>
          </Card>

          <Card variant="glass" className="p-4">
            <h3 className="font-medium mb-2">2. CSS Variable Control</h3>
            <p className="text-sm text-muted-foreground">
              Set <code className="bg-muted/50 px-1 rounded">--ap-motion: 0</code> to disable animations programmatically.
              Use <code className="bg-muted/50 px-1 rounded">--ap-motion-scale</code> to adjust intensity (0.5 = subtle, 1 = normal).
            </p>
          </Card>

          <Card variant="glass" className="p-4">
            <h3 className="font-medium mb-2">3. Utility Class</h3>
            <p className="text-sm text-muted-foreground">
              Add <code className="bg-muted/50 px-1 rounded">.ap-motion-reduce</code> to any element to disable animations for that subtree.
              Alternatively, use <code className="bg-muted/50 px-1 rounded">.ap-no-motion</code> on the root.
            </p>
          </Card>

          <Card variant="glass" className="p-4">
            <h3 className="font-medium mb-2">4. Functionality Preserved</h3>
            <p className="text-sm text-muted-foreground">
              All interactive elements remain fully functional without animations.
              Visual feedback through color changes and focus states is maintained.
            </p>
          </Card>
        </div>

        <CodeBlock
          code={`/* System preference auto-detection */
@media (prefers-reduced-motion: reduce) {
  :root {
    --ap-motion: 0;
    --ap-motion-scale: 0;
  }
}

/* Manual disable class */
.ap-no-motion {
  --ap-motion: 0;
}

/* Disable for specific section */
.ap-motion-reduce,
.ap-motion-reduce * {
  --ap-motion: 0 !important;
  animation: none !important;
  transition-duration: 0.01ms !important;
}

/* Adjust intensity without fully disabling */
.subtle-motion {
  --ap-motion-scale: 0.5;
}`}
        />
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-3">
          <Card variant="glass" className="p-4">
            <p className="text-sm">
              <span className="font-medium">Use meaningful motion:</span> Animation should provide feedback, not just decoration.
              Pop for clicks, wiggle for errors, bounce for success.
            </p>
          </Card>
          <Card variant="glass" className="p-4">
            <p className="text-sm">
              <span className="font-medium">Keep it subtle:</span> GenZ aesthetics favor quick, bouncy animations.
              Use <code className="bg-muted/50 px-1 rounded">--ap-dur-2</code> (200ms) for most interactions.
            </p>
          </Card>
          <Card variant="glass" className="p-4">
            <p className="text-sm">
              <span className="font-medium">Combine wisely:</span> Hover effects + click animations work great together.
              Avoid combining multiple continuous animations.
            </p>
          </Card>
          <Card variant="glass" className="p-4">
            <p className="text-sm">
              <span className="font-medium">Test with reduced motion:</span> Always verify your UI works with animations disabled.
              Use the toggle at the top of this page to test.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}
