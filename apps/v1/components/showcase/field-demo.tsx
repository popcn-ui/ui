"use client"

import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function FieldDemo() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldLabel>Email</FieldLabel>
      <FieldContent>
        <Input placeholder="you@aurora.dev" />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </FieldContent>
    </Field>
  )
}

export { FieldDemo }
