"use client"

import { useState } from "react"
import { Stepper, StepperStep } from "@/components/ui/stepper"
import { Button } from "@/components/ui/button"

export function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="w-full space-y-6">
      <Stepper currentStep={currentStep} onStepChange={setCurrentStep}>
        <StepperStep
          label="Account"
          description="Create your account"
          completed={currentStep > 0}
        />
        <StepperStep
          label="Profile"
          description="Set up your profile"
          completed={currentStep > 1}
        />
        <StepperStep
          label="Preferences"
          description="Configure preferences"
          completed={currentStep > 2}
        />
        <StepperStep
          label="Review"
          description="Review and submit"
          completed={currentStep > 3}
        />
      </Stepper>

      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          variant="aurora"
          size="sm"
          onClick={() => setCurrentStep((prev) => Math.min(3, prev + 1))}
          disabled={currentStep === 3}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
