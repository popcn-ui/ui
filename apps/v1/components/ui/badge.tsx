"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  [
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
    "transition-colors duration-200",
  ],
  {
    variants: {
      variant: {
        aurora: [
          "bg-aurora",
          "text-primary-foreground",
          "shadow-sm",
        ],
        glass: [
          "bg-background/60 backdrop-blur-md",
          "border border-border/50",
          "text-foreground",
        ],
        outline: [
          "border border-primary/50",
          "text-primary",
          "bg-transparent",
        ],
        secondary: [
          "bg-secondary",
          "text-secondary-foreground",
        ],
        destructive: [
          "bg-red-500/90",
          "text-white",
        ],
        success: [
          "bg-green-500/90",
          "text-white",
        ],
      },
      glow: {
        true: "shadow-[0_0_8px_rgba(var(--ap-primary),0.4)]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "aurora",
      glow: false,
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, glow, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, glow }), className)}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"

export { Badge, badgeVariants }
