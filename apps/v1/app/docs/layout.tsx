import Link from "next/link"
import { BookOpen, Layers, Palette, Terminal, Zap, Paintbrush } from "lucide-react"

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs", icon: BookOpen },
      { title: "Installation", href: "/docs/installation", icon: BookOpen },
      { title: "Theming", href: "/docs/theming", icon: Palette },
      { title: "Colors", href: "/docs/colors", icon: Paintbrush },
      { title: "Motion", href: "/docs/motion", icon: Zap },
      { title: "CLI", href: "/docs/cli", icon: Terminal },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion", icon: Layers },
      { title: "Alert", href: "/docs/components/alert", icon: Layers },
      { title: "Alert Dialog", href: "/docs/components/alert-dialog", icon: Layers },
      { title: "Aspect Ratio", href: "/docs/components/aspect-ratio", icon: Layers },
      { title: "Avatar", href: "/docs/components/avatar", icon: Layers },
      { title: "Badge", href: "/docs/components/badge", icon: Layers },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb", icon: Layers },
      { title: "Button", href: "/docs/components/button", icon: Layers },
      { title: "Button Group", href: "/docs/components/button-group", icon: Layers },
      { title: "Calendar", href: "/docs/components/calendar", icon: Layers },
      { title: "Card", href: "/docs/components/card", icon: Layers },
      { title: "Carousel", href: "/docs/components/carousel", icon: Layers },
      { title: "Chart", href: "/docs/components/chart", icon: Layers },
      { title: "Checkbox", href: "/docs/components/checkbox", icon: Layers },
      { title: "Code Block", href: "/docs/components/code-block", icon: Layers },
      { title: "Collapsible", href: "/docs/components/collapsible", icon: Layers },
      { title: "Color Picker", href: "/docs/components/color-picker", icon: Layers },
      { title: "Combobox", href: "/docs/components/combobox", icon: Layers },
      { title: "Command", href: "/docs/components/command", icon: Layers },
      { title: "Context Menu", href: "/docs/components/context-menu", icon: Layers },
      { title: "Copy Button", href: "/docs/components/copy-button", icon: Layers },
      { title: "Data Table", href: "/docs/components/data-table", icon: Layers },
      { title: "Date Picker", href: "/docs/components/date-picker", icon: Layers },
      { title: "Drawer", href: "/docs/components/drawer", icon: Layers },
      { title: "Dialog", href: "/docs/components/dialog", icon: Layers },
      { title: "Dropdown", href: "/docs/components/dropdown", icon: Layers },
      { title: "Empty", href: "/docs/components/empty", icon: Layers },
      { title: "Field", href: "/docs/components/field", icon: Layers },
      { title: "Form", href: "/docs/components/form", icon: Layers },
      { title: "Hover Card", href: "/docs/components/hover-card", icon: Layers },
      { title: "Input", href: "/docs/components/input", icon: Layers },
      { title: "Input Group", href: "/docs/components/input-group", icon: Layers },
      { title: "Input OTP", href: "/docs/components/input-otp", icon: Layers },
      { title: "Item", href: "/docs/components/item", icon: Layers },
      { title: "File Upload", href: "/docs/components/file-upload", icon: Layers },
      { title: "Kbd", href: "/docs/components/kbd", icon: Layers },
      { title: "Label", href: "/docs/components/label", icon: Layers },
      { title: "Loading Button", href: "/docs/components/loading-button", icon: Layers },
      { title: "Menubar", href: "/docs/components/menubar", icon: Layers },
      { title: "Multi Select", href: "/docs/components/multi-select", icon: Layers },
      { title: "Native Select", href: "/docs/components/native-select", icon: Layers },
      { title: "Navigation Menu", href: "/docs/components/navigation-menu", icon: Layers },
      { title: "Notification Badge", href: "/docs/components/notification-badge", icon: Layers },
      { title: "Pagination", href: "/docs/components/pagination", icon: Layers },
      { title: "Popover", href: "/docs/components/popover", icon: Layers },
      { title: "Progress", href: "/docs/components/progress", icon: Layers },
      { title: "Radio Group", href: "/docs/components/radio-group", icon: Layers },
      { title: "Rating", href: "/docs/components/rating", icon: Layers },
      { title: "Resizable", href: "/docs/components/resizable", icon: Layers },
      { title: "Scroll Area", href: "/docs/components/scroll-area", icon: Layers },
      { title: "Select", href: "/docs/components/select", icon: Layers },
      { title: "Separator", href: "/docs/components/separator", icon: Layers },
      { title: "Split Button", href: "/docs/components/split-button", icon: Layers },
      { title: "Sheet", href: "/docs/components/sheet", icon: Layers },
      { title: "Sidebar", href: "/docs/components/sidebar", icon: Layers },
      { title: "Skeleton", href: "/docs/components/skeleton", icon: Layers },
      { title: "Slider", href: "/docs/components/slider", icon: Layers },
      { title: "Spinner", href: "/docs/components/spinner", icon: Layers },
      { title: "Stepper", href: "/docs/components/stepper", icon: Layers },
      { title: "Switch", href: "/docs/components/switch", icon: Layers },
      { title: "Table", href: "/docs/components/table", icon: Layers },
      { title: "Tag", href: "/docs/components/tag", icon: Layers },
      { title: "Tabs", href: "/docs/components/tabs", icon: Layers },
      { title: "Textarea", href: "/docs/components/textarea", icon: Layers },
      { title: "Tree View", href: "/docs/components/tree-view", icon: Layers },
      { title: "Timeline", href: "/docs/components/timeline", icon: Layers },
      { title: "Toast", href: "/docs/components/toast", icon: Layers },
      { title: "Toggle", href: "/docs/components/toggle", icon: Layers },
      { title: "Toggle Group", href: "/docs/components/toggle-group", icon: Layers },
      { title: "Tooltip", href: "/docs/components/tooltip", icon: Layers },
      { title: "Typography", href: "/docs/components/typography", icon: Layers },
    ],
  },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden">
      {/* Aurora Background */}
      <div className="aurora-bg" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex gap-8 h-full">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 py-8 h-full">
            <nav className="sticky top-24 space-y-6 h-full overflow-y-auto pr-2">
              {sidebarNav.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {section.title}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                        >
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 py-8 min-w-0 h-full overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
