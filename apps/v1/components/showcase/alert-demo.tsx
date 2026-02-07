"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Sparkles } from "lucide-react"

function AlertDemo() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Alert>
        <Sparkles />
        <AlertTitle>Aurora Active</AlertTitle>
        <AlertDescription>Cosmic theme enabled.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Action required</AlertTitle>
        <AlertDescription>Review the settings.</AlertDescription>
      </Alert>
    </div>
  )
}

export { AlertDemo }
