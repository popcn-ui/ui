"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-sm">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is AuroraPop?</AccordionTrigger>
        <AccordionContent>Gradient-driven, motion-rich UI.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>Yes, update theme tokens.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export { AccordionDemo }
