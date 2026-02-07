"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const tagVariants = cva(
  [
    "inline-flex items-center gap-1.5",
    "rounded-md px-2.5 py-0.5 text-sm font-medium",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-muted text-muted-foreground",
          "hover:bg-muted/80",
        ],
        aurora: [
          "bg-aurora/20 text-primary",
          "border border-primary/30",
          "hover:bg-aurora/30",
        ],
        outline: [
          "border border-border/60 bg-transparent",
          "hover:bg-muted/50",
        ],
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80",
        ],
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
        lg: "px-3 py-1 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  onRemove?: () => void
  removable?: boolean
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      variant,
      size,
      onRemove,
      removable = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant, size }), className)}
        {...props}
      >
        {children}
        {removable && onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onRemove()
            }}
            className="ml-1 rounded-full hover:bg-muted/80 p-0.5 transition-colors"
            aria-label="Remove tag"
          >
            <XIcon className="h-3 w-3" />
          </button>
        )}
      </span>
    )
  }
)

Tag.displayName = "Tag"

export { Tag, tagVariants, type TagProps }
