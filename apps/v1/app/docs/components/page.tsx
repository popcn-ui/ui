import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Components",
  description:
    "Beautifully designed components with aurora-inspired aesthetics. Copy and paste into your apps.",
}

const components = [
  { name: "Accordion", href: "/docs/components/accordion", isNew: true },
  { name: "Alert", href: "/docs/components/alert", isNew: true },
  { name: "Alert Dialog", href: "/docs/components/alert-dialog", isNew: true },
  { name: "Aspect Ratio", href: "/docs/components/aspect-ratio", isNew: true },
  { name: "Avatar", href: "/docs/components/avatar", isNew: false },
  { name: "Badge", href: "/docs/components/badge", isNew: false },
  { name: "Breadcrumb", href: "/docs/components/breadcrumb", isNew: true },
  { name: "Button", href: "/docs/components/button", isNew: false },
  { name: "Button Group", href: "/docs/components/button-group", isNew: true },
  { name: "Calendar", href: "/docs/components/calendar", isNew: true },
  { name: "Card", href: "/docs/components/card", isNew: false },
  { name: "Carousel", href: "/docs/components/carousel", isNew: true },
  { name: "Chart", href: "/docs/components/chart", isNew: true },
  { name: "Checkbox", href: "/docs/components/checkbox", isNew: false },
  { name: "Code Block", href: "/docs/components/code-block", isNew: true },
  { name: "Collapsible", href: "/docs/components/collapsible", isNew: true },
  { name: "Color Picker", href: "/docs/components/color-picker", isNew: true },
  { name: "Combobox", href: "/docs/components/combobox", isNew: true },
  { name: "Command", href: "/docs/components/command", isNew: true },
  { name: "Context Menu", href: "/docs/components/context-menu", isNew: true },
  { name: "Copy Button", href: "/docs/components/copy-button", isNew: true },
  { name: "Data Table", href: "/docs/components/data-table", isNew: true },
  { name: "Date Picker", href: "/docs/components/date-picker", isNew: true },
  { name: "Drawer", href: "/docs/components/drawer", isNew: true },
  { name: "Dialog", href: "/docs/components/dialog", isNew: false },
  { name: "Dropdown Menu", href: "/docs/components/dropdown", isNew: false },
  { name: "Empty", href: "/docs/components/empty", isNew: true },
  { name: "Field", href: "/docs/components/field", isNew: true },
  { name: "Form", href: "/docs/components/form", isNew: true },
  { name: "Hover Card", href: "/docs/components/hover-card", isNew: true },
  { name: "Input", href: "/docs/components/input", isNew: false },
  { name: "Input Group", href: "/docs/components/input-group", isNew: true },
  { name: "Input OTP", href: "/docs/components/input-otp", isNew: true },
  { name: "Item", href: "/docs/components/item", isNew: true },
  { name: "File Upload", href: "/docs/components/file-upload", isNew: true },
  { name: "Kbd", href: "/docs/components/kbd", isNew: true },
  { name: "Label", href: "/docs/components/label", isNew: false },
  { name: "Loading Button", href: "/docs/components/loading-button", isNew: true },
  { name: "Menubar", href: "/docs/components/menubar", isNew: true },
  { name: "Multi Select", href: "/docs/components/multi-select", isNew: true },
  { name: "Native Select", href: "/docs/components/native-select", isNew: true },
  { name: "Navigation Menu", href: "/docs/components/navigation-menu", isNew: true },
  { name: "Notification Badge", href: "/docs/components/notification-badge", isNew: true },
  { name: "Pagination", href: "/docs/components/pagination", isNew: true },
  { name: "Popover", href: "/docs/components/popover", isNew: true },
  { name: "Progress", href: "/docs/components/progress", isNew: true },
  { name: "Radio Group", href: "/docs/components/radio-group", isNew: true },
  { name: "Rating", href: "/docs/components/rating", isNew: true },
  { name: "Resizable", href: "/docs/components/resizable", isNew: true },
  { name: "Scroll Area", href: "/docs/components/scroll-area", isNew: true },
  { name: "Select", href: "/docs/components/select", isNew: false },
  { name: "Separator", href: "/docs/components/separator", isNew: false },
  { name: "Sheet", href: "/docs/components/sheet", isNew: true },
  { name: "Sidebar", href: "/docs/components/sidebar", isNew: true },
  { name: "Skeleton", href: "/docs/components/skeleton", isNew: false },
  { name: "Slider", href: "/docs/components/slider", isNew: true },
  { name: "Spinner", href: "/docs/components/spinner", isNew: true },
  { name: "Split Button", href: "/docs/components/split-button", isNew: true },
  { name: "Stepper", href: "/docs/components/stepper", isNew: true },
  { name: "Switch", href: "/docs/components/switch", isNew: false },
  { name: "Table", href: "/docs/components/table", isNew: true },
  { name: "Tag", href: "/docs/components/tag", isNew: true },
  { name: "Tabs", href: "/docs/components/tabs", isNew: false },
  { name: "Textarea", href: "/docs/components/textarea", isNew: true },
  { name: "Tree View", href: "/docs/components/tree-view", isNew: true },
  { name: "Timeline", href: "/docs/components/timeline", isNew: true },
  { name: "Toast", href: "/docs/components/toast", isNew: false },
  { name: "Toggle", href: "/docs/components/toggle", isNew: true },
  { name: "Toggle Group", href: "/docs/components/toggle-group", isNew: true },
  { name: "Tooltip", href: "/docs/components/tooltip", isNew: false },
  { name: "Typography", href: "/docs/components/typography", isNew: true },
]

export default function ComponentsPage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Components</h1>
          <p className="text-muted-foreground text-lg">
            Beautifully designed components with aurora-inspired aesthetics. Copy and paste into
            your apps.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6">
          {components.map((component) => (
            <Link
              key={component.href}
              href={component.href}
              className="text-foreground group inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline md:text-base"
            >
              <span className="group-hover:text-primary transition-colors">{component.name}</span>
              {component.isNew && (
                <span className="bg-primary flex h-2 w-2 rounded-full" title="New" />
              )}
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <div className="border-border/50 mt-16 border-t pt-8">
          <p className="text-muted-foreground text-sm">
            More components coming soon. Check back for updates or{" "}
            <a
              href="https://github.com/popcn-ui/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              contribute on GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
