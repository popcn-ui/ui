"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-lg font-medium",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        aurora: [
          "relative overflow-hidden",
          "bg-aurora",
          "text-primary-foreground",
          "shadow-lg",
          "hover:shadow-[0_0_24px_rgba(var(--ap-primary),0.4)]",
          "shine-effect",
          "before:absolute before:inset-0",
          "before:translate-x-[-100%]",
          "before:transition-transform",
        ],
        glass: [
          "bg-background/60 backdrop-blur-md",
          "border border-border/50",
          "text-foreground",
          "hover:bg-background/80",
          "hover:border-primary/50",
          "hover:shadow-[0_0_16px_rgba(var(--ap-primary),0.2)]",
        ],
        ghost: [
          "bg-transparent",
          "text-foreground",
          "hover:bg-muted/50",
          "hover:text-primary",
        ],
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
      /** 定常モーション: float / shine / wave は常時再生 */
      motionIdle: {
        none: "",
        float: "animate-ap-float",
        shine: "",
        wave: "ap-wave-motion",
      },
      /** クリック時モーション: pop / snap / bounce / wiggle / jelly はクリックで発火 */
      motionClick: {
        none: "",
        pop: "",
        snap: "",
        bounce: "",
        wiggle: "",
        jelly: "",
      },
    },
    compoundVariants: [
      // When motion=shine, use ap-shine-motion (continuous sweep). Do not add hover sweep so it doesn’t conflict.
      { variant: "aurora", motionIdle: "shine", class: "ap-shine-motion" },
      // When motion=wave, background animation handles the effect. Do not add hover sweep so it doesn't conflict.
      { variant: "aurora", motionIdle: "wave", class: "" },
      // When motion is not shine or wave, add hover sweep for aurora.
      {
        variant: "aurora",
        motionIdle: ["float", "none"],
        class: "hover:before:translate-x-[100%]",
      },
    ],
    defaultVariants: {
      variant: "aurora",
      size: "md",
      motionIdle: "none",
      motionClick: "pop",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** @deprecated motionIdle と motionClick に分離しました。指定時は両方にマッピングします。 */
  motion?: "pop" | "float" | "shine" | "wave" | "snap" | "bounce" | "wiggle" | "jelly" | "none"
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const IDLE_VALUES = ["float", "shine", "wave"] as const
const CLICK_VALUES = ["pop", "snap", "bounce", "wiggle", "jelly"] as const
type IdleMotion = (typeof IDLE_VALUES)[number]
type ClickMotion = (typeof CLICK_VALUES)[number]

function isIdleMotion(value: ButtonProps["motion"]): value is IdleMotion {
  return value === "float" || value === "shine" || value === "wave"
}

function isClickMotion(value: ButtonProps["motion"]): value is ClickMotion {
  return (
    value === "pop" ||
    value === "snap" ||
    value === "bounce" ||
    value === "wiggle" ||
    value === "jelly"
  )
}

function resolveMotion(
  motion?: ButtonProps["motion"],
  motionIdle?: "none" | "float" | "shine" | "wave" | null,
  motionClick?: "none" | "pop" | "snap" | "bounce" | "wiggle" | "jelly" | null
): { motionIdle: "none" | "float" | "shine" | "wave"; motionClick: "none" | "pop" | "snap" | "bounce" | "wiggle" | "jelly" } {
  if (motion != null) {
    if (motion === "none") return { motionIdle: "none", motionClick: "none" }
    if (isIdleMotion(motion)) return { motionIdle: motion, motionClick: "none" }
    if (isClickMotion(motion)) return { motionIdle: "none", motionClick: motion }
    return { motionIdle: "none", motionClick: "none" }
  }
  return {
    motionIdle: motionIdle ?? "none",
    motionClick: motionClick ?? "pop",
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      motionIdle,
      motionClick,
      motion,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const [activeAnimation, setActiveAnimation] = React.useState<string | null>(null)
    const { motionIdle: idle, motionClick: click } = resolveMotion(motion, motionIdle, motionClick)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      switch (click) {
        case "pop":
          setActiveAnimation("animate-ap-pop")
          setTimeout(() => setActiveAnimation(null), 200)
          break
        case "bounce":
          setActiveAnimation("animate-ap-bounce")
          setTimeout(() => setActiveAnimation(null), 300)
          break
        case "wiggle":
          setActiveAnimation("animate-ap-wiggle")
          setTimeout(() => setActiveAnimation(null), 500)
          break
        case "jelly":
          setActiveAnimation("animate-ap-jelly")
          setTimeout(() => setActiveAnimation(null), 300)
          break
      }
      props.onClick?.(e)
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (click === "snap") {
        const button = e.currentTarget
        button.style.transform = "scale(0.97)"
      }
      props.onMouseDown?.(e)
    }

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (click === "snap") {
        const button = e.currentTarget
        button.style.transform = "scale(1)"
      }
      props.onMouseUp?.(e)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (click === "snap") {
        const button = e.currentTarget
        button.style.transform = "scale(1)"
      }
      props.onMouseLeave?.(e)
    }

    return (
      <Comp
        {...props}
        className={cn(
          buttonVariants({ variant, size, motionIdle: idle, motionClick: click }),
          activeAnimation,
          className
        )}
        ref={ref}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
