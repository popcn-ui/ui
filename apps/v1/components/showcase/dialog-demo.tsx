"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="aurora" motion="pop" size="sm">
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none"
            >
              Name
            </label>
            <Input
              id="name"
              defaultValue="Aurora User"
              variant="glass"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="username"
              className="text-sm font-medium leading-none"
            >
              Username
            </label>
            <Input
              id="username"
              defaultValue="@aurora"
              variant="glass"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="glass" size="sm">
            Cancel
          </Button>
          <Button variant="aurora" motion="pop" size="sm">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { DialogDemo }
