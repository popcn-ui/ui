"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"

type FormValues = {
  email: string
}

export default function FormPage() {
  const form = useForm<FormValues>({
    defaultValues: { email: "" },
  })

  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Form</h1>
        <p className="text-lg text-muted-foreground">
          React Hook Form helpers for labels, messages, and descriptions.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code="npx popcn add form" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <ComponentPreview
          title="Email Form"
          code={`const form = useForm({ defaultValues: { email: "" } })

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="you@aurora.dev" {...field} />
          </FormControl>
          <FormDescription>We won't spam you.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>`}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@aurora.dev" {...field} />
                    </FormControl>
                    <FormDescription>We won't spam you.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </ComponentPreview>
      </section>
    </div>
  )
}
