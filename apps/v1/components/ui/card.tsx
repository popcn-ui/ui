"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  [
    "rounded-xl",
    "transition-all duration-ap-3 ease-ap-soft",
  ],
  {
    variants: {
      variant: {
        glass: [
          "bg-background/60 backdrop-blur-md",
          "border border-border/50",
          "hover:border-border",
        ],
        aurora: [
          "relative overflow-hidden",
          "bg-background/80 backdrop-blur-md",
          "border border-transparent",
          "before:absolute before:inset-0 before:-z-10",
          "before:bg-aurora",
          "before:opacity-20",
          "hover:before:opacity-30",
          "after:absolute after:inset-[1px] after:-z-10 after:rounded-[11px] after:bg-background/90",
        ],
        solid: [
          "bg-muted",
          "border border-border",
        ],
      },
      glow: {
        true: "hover:shadow-[0_0_24px_rgba(var(--ap-primary),0.15)]",
        false: "",
      },
      motion: {
        none: "",
        float: "ap-hover-float",
        tilt: "ap-hover-tilt",
        scale: "ap-hover-scale",
        glow: "ap-hover-glow",
      },
    },
    defaultVariants: {
      variant: "glass",
      glow: false,
      motion: "none",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, glow, motion, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, glow, motion }), className)}
      {...props}
    />
  )
)

Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))

CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))

CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))

CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))

CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
