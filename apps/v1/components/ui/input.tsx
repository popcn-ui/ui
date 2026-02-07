"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  [
    "flex w-full rounded-lg px-3 py-2 text-sm",
    "transition-all duration-200",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        aurora: [
          "border-2 border-transparent",
          "bg-gradient-to-r from-[rgb(var(--ap-aurora-1))] via-[rgb(var(--ap-aurora-2))] to-[rgb(var(--ap-aurora-3))]",
          "bg-clip-padding",
          "[background-origin:border-box]",
          "bg-background",
          "focus:border-primary",
          "focus:shadow-[0_0_16px_rgba(var(--ap-primary),0.3)]",
        ],
        glass: [
          "bg-background/60 backdrop-blur-md",
          "border border-border/50",
          "focus:bg-background/80",
          "focus:border-primary/50",
          "focus:shadow-[0_0_12px_rgba(var(--ap-primary),0.2)]",
        ],
        ghost: [
          "border-b border-border",
          "rounded-none",
          "bg-transparent",
          "focus:border-primary",
          "px-0",
        ],
      },
    },
    defaultVariants: {
      variant: "glass",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }
