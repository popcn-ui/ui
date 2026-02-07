"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  AccordionDemo,
  AlertDemo,
  AlertDialogDemo,
  AspectRatioDemo,
  BadgeDemo,
  BreadcrumbDemo,
  ButtonDemo,
  ButtonGroupDemo,
  CalendarDemo,
  CardDemo,
  CarouselDemo,
  ChartDemo,
  CheckboxDemo,
  CollapsibleDemo,
  ColorPickerDemo,
  CodeBlockDemo,
  ComboboxDemo,
  CopyButtonDemo,
  CommandDemo,
  ContextMenuDemo,
  DataTableDemo,
  DatePickerDemo,
  DrawerDemo,
  DialogDemo,
  DropdownDemo,
  EmptyDemo,
  FileUploadDemo,
  FieldDemo,
  FormDemo,
  HoverCardDemo,
  InputGroupDemo,
  InputOTPDemo,
  ItemDemo,
  MenubarDemo,
  MultiSelectDemo,
  NativeSelectDemo,
  NavigationMenuDemo,
  NotificationBadgeDemo,
  NotificationDemo,
  ResizableDemo,
  SelectDemo,
  SkeletonDemo,
  TabsDemo,
  ToggleDemo,
  ToggleGroupDemo,
  TooltipDemo,
  KbdDemo,
  LoadingButtonDemo,
  ProgressDemo,
  RadioGroupDemo,
  RatingDemo,
  PaginationDemo,
  PopoverDemo,
  ScrollAreaDemo,
  SheetDemo,
  SidebarDemo,
  SliderDemo,
  SpinnerDemo,
  SplitButtonDemo,
  StepperDemo,
  TableDemo,
  TagDemo,
  TextareaDemo,
  TimelineDemo,
  TreeViewDemo,
  TypographyDemo,
} from "@/components/showcase"

interface ShowcaseItemProps {
  title?: string
  children: React.ReactNode
  className?: string
}

function ShowcaseItem({ title, children, className }: ShowcaseItemProps) {
  return (
    <div className={cn("glass rounded-xl p-6 ", className)}>
      {title && (
        <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
          {title}
        </h3>
      )}
      <div className="flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

interface ShowcaseEntry {
  title: string
  component: React.ReactNode
  className?: string
}

interface ShowcaseTab {
  value: string
  label: string
  items: ShowcaseEntry[]
}

const TABS: ShowcaseTab[] = [
  {
    value: "featured",
    label: "Featured",
    items: [
      { title: "Button", component: <ButtonDemo /> },
      { title: "Card", component: <CardDemo /> },
      { title: "Badge", component: <BadgeDemo /> },
      { title: "Notification", component: <NotificationDemo /> },
      { title: "Tabs", component: <TabsDemo /> },
      { title: "Dialog", component: <DialogDemo /> },
      { title: "Loading Button", component: <LoadingButtonDemo /> },
      { title: "Chart", component: <ChartDemo /> },
      { title: "Color Picker", component: <ColorPickerDemo /> },
      { title: "Notification Badge", component: <NotificationBadgeDemo /> },
      { title: "Stepper", component: <StepperDemo />, className: "sm:col-span-2" },
      { title: "Alert", component: <AlertDemo /> },
    ],
  },
  {
    value: "buttons",
    label: "Buttons",
    items: [
      { title: "Button", component: <ButtonDemo /> },
      { title: "Loading Button", component: <LoadingButtonDemo /> },
      { title: "Split Button", component: <SplitButtonDemo /> },
      { title: "Copy Button", component: <CopyButtonDemo /> },
      { title: "Button Group", component: <ButtonGroupDemo /> },
    ],
  },
  {
    value: "forms",
    label: "Forms",
    items: [
      { title: "Form", component: <FormDemo /> },
      { title: "Field", component: <FieldDemo /> },
      { title: "Input Group", component: <InputGroupDemo /> },
      { title: "Textarea", component: <TextareaDemo /> },
      { title: "Checkbox", component: <CheckboxDemo /> },
      { title: "Radio Group", component: <RadioGroupDemo /> },
      { title: "Toggle", component: <ToggleDemo /> },
      { title: "Toggle Group", component: <ToggleGroupDemo /> },
      { title: "Select", component: <SelectDemo /> },
      { title: "Native Select", component: <NativeSelectDemo /> },
      { title: "Multi Select", component: <MultiSelectDemo /> },
      { title: "Combobox", component: <ComboboxDemo /> },
      { title: "Slider", component: <SliderDemo /> },
      { title: "Rating", component: <RatingDemo /> },
      { title: "Input OTP", component: <InputOTPDemo /> },
      { title: "File Upload", component: <FileUploadDemo /> },
      { title: "Date Picker", component: <DatePickerDemo /> },
      { title: "Calendar", component: <CalendarDemo /> },
      { title: "Color Picker", component: <ColorPickerDemo /> },
    ],
  },
  {
    value: "data",
    label: "Data",
    items: [
      { title: "Card", component: <CardDemo /> },
      { title: "Badge", component: <BadgeDemo /> },
      { title: "Notification Badge", component: <NotificationBadgeDemo /> },
      { title: "Notification", component: <NotificationDemo /> },
      { title: "Tag", component: <TagDemo /> },
      { title: "Item", component: <ItemDemo /> },
      { title: "Table", component: <TableDemo /> },
      { title: "Data Table", component: <DataTableDemo /> },
      { title: "Chart", component: <ChartDemo /> },
      { title: "Typography", component: <TypographyDemo /> },
      { title: "Code Block", component: <CodeBlockDemo /> },
      { title: "Kbd", component: <KbdDemo /> },
    ],
  },
  {
    value: "navigation",
    label: "Navigation",
    items: [
      { title: "Tabs", component: <TabsDemo /> },
      { title: "Breadcrumb", component: <BreadcrumbDemo /> },
      { title: "Pagination", component: <PaginationDemo /> },
      { title: "Navigation Menu", component: <NavigationMenuDemo /> },
      { title: "Menubar", component: <MenubarDemo /> },
      { title: "Sidebar", component: <SidebarDemo /> },
      { title: "Stepper", component: <StepperDemo />, className: "sm:col-span-2" },
    ],
  },
  {
    value: "overlays",
    label: "Overlays",
    items: [
      { title: "Dialog", component: <DialogDemo /> },
      { title: "Alert Dialog", component: <AlertDialogDemo /> },
      { title: "Drawer", component: <DrawerDemo /> },
      { title: "Sheet", component: <SheetDemo /> },
      { title: "Dropdown Menu", component: <DropdownDemo /> },
      { title: "Context Menu", component: <ContextMenuDemo /> },
      { title: "Command", component: <CommandDemo /> },
      { title: "Popover", component: <PopoverDemo /> },
      { title: "Hover Card", component: <HoverCardDemo /> },
      { title: "Tooltip", component: <TooltipDemo /> },
    ],
  },
  {
    value: "feedback",
    label: "Feedback",
    items: [
      { title: "Alert", component: <AlertDemo /> },
      { title: "Progress", component: <ProgressDemo /> },
      { title: "Skeleton", component: <SkeletonDemo /> },
      { title: "Spinner", component: <SpinnerDemo /> },
      { title: "Empty State", component: <EmptyDemo /> },
      { title: "Timeline", component: <TimelineDemo /> },
    ],
  },
  {
    value: "layout",
    label: "Layout",
    items: [
      { title: "Accordion", component: <AccordionDemo /> },
      { title: "Collapsible", component: <CollapsibleDemo /> },
      { title: "Scroll Area", component: <ScrollAreaDemo /> },
      { title: "Resizable", component: <ResizableDemo /> },
      { title: "Carousel", component: <CarouselDemo /> },
      { title: "Tree View", component: <TreeViewDemo /> },
      { title: "Aspect Ratio", component: <AspectRatioDemo /> },
    ],
  },
]

interface ComponentShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {}

function ComponentShowcase({ className, ...props }: ComponentShowcaseProps) {
  return (
    <div className={cn("space-y-8", className)} {...props}>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Components</h2>
        <p className="text-muted-foreground">
          66 components. Browse by category.
        </p>
      </div>

      <Tabs defaultValue="featured">
        <div className="relative">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <TabsList variant="aurora" className="w-max mx-auto flex">
              {TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} variant="aurora">
                  {tab.label}
                  <span className="ml-1.5 text-xs opacity-60">
                    {tab.items.length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {/* Fade hint for mobile scroll */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none sm:hidden" />
        </div>

        {TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tab.items.map((item) => (
                <ShowcaseItem key={item.title} title={item.title} className={item.className}>
                  {item.component}
                </ShowcaseItem>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export { ComponentShowcase, ShowcaseItem }
