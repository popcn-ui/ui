"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const separatorVariants = cva(
  "shrink-0",
  {
    variants: {
      variant: {
        default: "bg-border",
        aurora: [
          "bg-gradient-to-r from-transparent via-[rgb(var(--ap-aurora-2))] to-transparent",
        ],
        muted: "bg-border/50",
      },
      orientation: {
        horizontal: "h-[1px] w-full",
        vertical: "h-full w-[1px]",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
)

type SeparatorRootProps = Omit<
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
  "orientation"
>

export interface SeparatorProps
  extends SeparatorRootProps,
    VariantProps<typeof separatorVariants> {}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, variant, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    const resolvedOrientation = orientation ?? "horizontal"
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={resolvedOrientation}
        className={cn(
          separatorVariants({ variant, orientation: resolvedOrientation }),
          className
        )}
        {...props}
      />
    )
  }
)

Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator, separatorVariants }
