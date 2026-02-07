"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const stepperVariants = cva("flex", {
  variants: {
    orientation: {
      horizontal: "flex-col gap-3 sm:flex-row sm:items-center sm:gap-0",
      vertical: "flex-col gap-3",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

interface StepperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperVariants> {
  currentStep?: number
  onStepChange?: (step: number) => void
}

function Stepper({
  className,
  orientation,
  currentStep = 0,
  onStepChange,
  children,
  ...props
}: StepperProps) {
  return (
    <div
      className={cn(stepperVariants({ orientation }), className)}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            step: index,
            currentStep,
            onStepChange,
            isLast: index === React.Children.count(children) - 1,
            orientation,
          } as any)
        }
        return child
      })}
    </div>
  )
}

interface StepperStepProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: number
  currentStep?: number
  onStepChange?: (step: number) => void
  isLast?: boolean
  orientation?: "horizontal" | "vertical"
  label?: string
  description?: string
  completed?: boolean
  disabled?: boolean
}

function StepperStep({
  className,
  step = 0,
  currentStep = 0,
  onStepChange,
  isLast = false,
  orientation = "horizontal",
  label,
  description,
  completed = false,
  disabled = false,
  children,
  ...props
}: StepperStepProps) {
  const isActive = step === currentStep
  const isCompleted = completed || step < currentStep

  return (
    <div
      className={cn(
        "flex",
        orientation === "horizontal" && "w-full items-start sm:w-auto sm:items-center",
        orientation === "vertical" && "flex-col",
        className
      )}
      {...props}
    >
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => !disabled && onStepChange?.(step)}
          disabled={disabled}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
            isCompleted
              ? "border-primary bg-primary text-primary-foreground"
              : isActive
                ? "border-primary bg-background text-primary"
                : "border-border/60 bg-background text-muted-foreground",
            !disabled && "cursor-pointer hover:border-primary/80",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {isCompleted ? (
            <CheckIcon className="h-5 w-5" />
          ) : (
            <span className="text-sm font-medium">{step + 1}</span>
          )}
        </button>
        {!isLast && (
          <div
            className={cn(
              orientation === "horizontal"
                ? "hidden h-0.5 w-12 sm:block"
                : "h-12 w-0.5",
              "mx-2",
              isCompleted ? "bg-primary" : "bg-border/60"
            )}
          />
        )}
      </div>
      {(label || description) && (
        <div
          className={cn(
            orientation === "horizontal" ? "ml-4 min-w-0" : "mt-2 text-center",
            "flex flex-col"
          )}
        >
          {label && (
            <span
              className={cn(
                "text-sm font-medium",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-muted-foreground">{description}</span>
          )}
        </div>
      )}
      {children}
    </div>
  )
}

export {
  Stepper,
  StepperStep,
  stepperVariants,
  type StepperProps,
  type StepperStepProps,
}
