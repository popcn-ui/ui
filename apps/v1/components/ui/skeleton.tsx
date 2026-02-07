"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const skeletonVariants = cva("rounded-lg", {
  variants: {
    variant: {
      default: "animate-pulse bg-muted",
      aurora: [
        "relative overflow-hidden bg-muted",
        "after:absolute after:inset-0",
        "after:bg-gradient-to-r after:from-transparent after:via-[rgba(var(--ap-aurora-1),0.1)] after:to-transparent",
        "after:animate-ap-shine after:bg-[length:200%_100%]",
      ],
      shimmer: [
        "relative overflow-hidden bg-muted/50",
        "before:absolute before:inset-0",
        "before:-translate-x-full",
        "before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
      ],
    },
  },
  defaultVariants: {
    variant: "aurora",
  },
})

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Skeleton, skeletonVariants }
