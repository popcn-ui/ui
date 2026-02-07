"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: [
            "group toast",
            "group-[.toaster]:bg-background/90 group-[.toaster]:backdrop-blur-xl",
            "group-[.toaster]:text-foreground group-[.toaster]:border-border/50",
            "group-[.toaster]:shadow-xl group-[.toaster]:shadow-[0_0_24px_rgba(var(--ap-primary),0.1)]",
            // Enter animation: slide up with spring
            "group-[.toaster]:animate-ap-slide-up",
            // Smooth transitions
            "group-[.toaster]:transition-all group-[.toaster]:duration-ap-3 group-[.toaster]:ease-ap-spring",
          ].join(" "),
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:ap-hover-scale group-[.toast]:ap-active-press",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:ap-hover-scale group-[.toast]:ap-active-press",
          success:
            "group-[.toaster]:border-green-500/50 group-[.toaster]:shadow-[0_0_16px_rgba(34,197,94,0.2)]",
          error:
            "group-[.toaster]:border-red-500/50 group-[.toaster]:shadow-[0_0_16px_rgba(239,68,68,0.2)]",
          warning:
            "group-[.toaster]:border-yellow-500/50 group-[.toaster]:shadow-[0_0_16px_rgba(234,179,8,0.2)]",
          info:
            "group-[.toaster]:border-primary/50 group-[.toaster]:shadow-[0_0_16px_rgba(var(--ap-primary),0.2)]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
