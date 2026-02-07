"use client"

import * as React from "react"
import { StarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const ratingVariants = cva(
  [
    "inline-flex items-center gap-1",
    "transition-colors",
  ],
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
      variant: {
        default: "",
        aurora: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
)

interface RatingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof ratingVariants> {
  value?: number
  max?: number
  onChange?: (value: number) => void
  readOnly?: boolean
  allowHalf?: boolean
  showValue?: boolean
}

function getAuroraColorClass(index: number, max: number) {
  if (max <= 1) return "text-[rgb(var(--ap-aurora-2))] fill-[rgb(var(--ap-aurora-2))]"
  const progress = index / (max - 1)
  if (progress <= 0.33) return "text-[rgb(var(--ap-aurora-1))] fill-[rgb(var(--ap-aurora-1))]"
  if (progress <= 0.66) return "text-[rgb(var(--ap-aurora-2))] fill-[rgb(var(--ap-aurora-2))]"
  return "text-[rgb(var(--ap-aurora-3))] fill-[rgb(var(--ap-aurora-3))]"
}

function Rating({
  value = 0,
  max = 5,
  onChange,
  readOnly = false,
  allowHalf = false,
  showValue = false,
  size,
  variant,
  className,
  ...props
}: RatingProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const [hoveredHalf, setHoveredHalf] = React.useState<boolean>(false)

  const displayValue = hoveredIndex !== null ? hoveredIndex + (hoveredHalf && allowHalf ? 0.5 : 1) : value

  const handleClick = (index: number, isHalf: boolean = false) => {
    if (readOnly || !onChange) return
    const newValue = index + (isHalf && allowHalf ? 0.5 : 1)
    onChange(newValue)
  }

  const handleMouseEnter = (index: number, isHalf: boolean = false) => {
    if (readOnly) return
    setHoveredIndex(index)
    setHoveredHalf(isHalf && allowHalf)
  }

  const handleMouseLeave = () => {
    if (readOnly) return
    setHoveredIndex(null)
    setHoveredHalf(false)
  }

  const getStarFill = (index: number) => {
    const starValue = index + 1
    const halfValue = index + 0.5

    if (displayValue >= starValue) {
      return "fill"
    } else if (allowHalf && displayValue >= halfValue) {
      return "half"
    }
    return "empty"
  }

  const getFilledClass = (index: number) => {
    if (variant === "aurora") {
      return getAuroraColorClass(index, max)
    }
    return "text-yellow-500 fill-yellow-500"
  }

  return (
    <div
      className={cn(ratingVariants({ size, variant }), className)}
      {...props}
    >
      {Array.from({ length: max }).map((_, index) => {
        const fill = getStarFill(index)
        const isHalf = fill === "half"
        const isFilled = fill === "fill"
        
        return (
          <div
            key={index}
            className="relative inline-block"
            style={{ width: "1em", height: "1em" }}
          >
            {/* 背景の星（常に表示、右半分用） */}
            <div
              className="absolute inset-0"
              style={{ clipPath: allowHalf ? "inset(0 0 0 50%)" : "none" }}
              onMouseEnter={() => handleMouseEnter(index, false)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index, false)}
            >
              <StarIcon
                className={cn(
                  "h-full w-full",
                  isFilled
                    ? getFilledClass(index)
                    : "text-muted-foreground",
                  !readOnly && "cursor-pointer hover:scale-110 transition-transform"
                )}
              />
            </div>
            {/* 左半分の星（allowHalf時のみ、half/fillの時のみ表示） */}
            {allowHalf && (
              <div
                className="absolute inset-0"
                style={{ 
                  width: "50%",
                  overflow: "hidden"
                }}
                onMouseEnter={() => handleMouseEnter(index, true)}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => {
                  e.stopPropagation()
                  handleClick(index, true)
                }}
              >
                <StarIcon
                  className={cn(
                    "h-full w-full",
                    isHalf || isFilled
                      ? getFilledClass(index)
                      : "text-muted-foreground"
                  )}
                  style={{ width: "200%" }}
                />
              </div>
            )}
          </div>
        )
      })}
      {showValue && (
        <span className="ml-2 text-sm text-muted-foreground">
          {displayValue.toFixed(allowHalf ? 1 : 0)} / {max}
        </span>
      )}
    </div>
  )
}

export { Rating, ratingVariants, type RatingProps }
