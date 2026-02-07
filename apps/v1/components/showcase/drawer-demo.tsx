"use client"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="aurora" size="sm">
          Open drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Aurora settings</DrawerTitle>
          <DrawerDescription>Adjust theme presets.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="glass" size="sm">
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export { DrawerDemo }
