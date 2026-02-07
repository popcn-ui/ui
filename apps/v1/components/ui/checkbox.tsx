"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  [
    "peer shrink-0 rounded-md border",
    "ring-offset-background",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-border",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "data-[state=checked]:border-primary",
        ],
        aurora: [
          "border-border",
          "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[rgb(var(--ap-aurora-1))] data-[state=checked]:via-[rgb(var(--ap-aurora-2))] data-[state=checked]:to-[rgb(var(--ap-aurora-3))]",
          "data-[state=checked]:border-transparent data-[state=checked]:text-primary-foreground",
          "data-[state=checked]:shadow-[0_0_8px_rgba(var(--ap-primary),0.4)]",
        ],
        glass: [
          "border-border/50 bg-background/60 backdrop-blur-md",
          "data-[state=checked]:bg-primary/80 data-[state=checked]:text-primary-foreground",
          "data-[state=checked]:border-primary/50",
        ],
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      checkboxVariants({ variant, size }),
      // Add subtle scale animation on state change
      "data-[state=checked]:animate-ap-bounce",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn(
      "flex items-center justify-center text-current",
      // Pop in animation for the checkmark
      "animate-ap-scale-in"
    )}>
      <Check className={cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4")} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox, checkboxVariants }
