"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const switchVariants = cva(
  [
    "peer inline-flex shrink-0 cursor-pointer items-center rounded-full",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "data-[state=unchecked]:bg-muted",
          "data-[state=checked]:bg-primary",
        ],
        aurora: [
          "data-[state=unchecked]:bg-muted",
          "data-[state=checked]:bg-gradient-to-r",
          "data-[state=checked]:from-[rgb(var(--ap-aurora-1))]",
          "data-[state=checked]:via-[rgb(var(--ap-aurora-2))]",
          "data-[state=checked]:to-[rgb(var(--ap-aurora-3))]",
          "data-[state=checked]:shadow-[0_0_12px_rgba(var(--ap-primary),0.4)]",
        ],
        glass: [
          "data-[state=unchecked]:bg-muted/50 data-[state=unchecked]:backdrop-blur-md",
          "data-[state=checked]:bg-primary/80 data-[state=checked]:backdrop-blur-md",
        ],
      },
      size: {
        sm: "h-5 w-9 p-0.5",
        md: "h-6 w-11 p-0.5",
        lg: "h-7 w-14 p-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const switchThumbVariants = cva(
  [
    "pointer-events-none block rounded-full bg-white shadow-lg ring-0",
    "transition-transform duration-200 ease-ap-pop",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        md: "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        lg: "h-6 w-6 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      switchVariants({ variant, size }),
      variant === "aurora" && "switch-aurora",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={cn(switchThumbVariants({ size }))} />
  </SwitchPrimitives.Root>
))

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch, switchVariants }
