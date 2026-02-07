import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Button, buttonVariants } from "../button"
import { Star, ArrowRight } from "lucide-react"

describe("Button", () => {
  describe("rendering", () => {
    it("renders children correctly", () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole("button")).toHaveTextContent("Click me")
    })

    it("renders as a button element", () => {
      render(<Button>Test</Button>)
      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    it("forwards ref to button element", () => {
      const ref = vi.fn()
      render(<Button ref={ref}>Test</Button>)
      expect(ref).toHaveBeenCalled()
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement)
    })
  })

  describe("variants", () => {
    it("applies aurora variant classes by default", () => {
      render(<Button>Aurora</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("bg-gradient-to-r")
    })

    it("applies glass variant classes", () => {
      render(<Button variant="glass">Glass</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("backdrop-blur")
    })

    it("applies ghost variant classes", () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("bg-transparent")
    })
  })

  describe("sizes", () => {
    it("applies small size classes", () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("h-8")
      expect(button.className).toContain("px-3")
    })

    it("applies medium size classes by default", () => {
      render(<Button>Medium</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("h-10")
      expect(button.className).toContain("px-4")
    })

    it("applies large size classes", () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("h-12")
      expect(button.className).toContain("px-6")
    })
  })

  describe("motion", () => {
    it("applies float animation class", () => {
      render(<Button motion="float">Float</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("animate-ap-float")
    })

    it("applies shine animation class", () => {
      render(<Button motion="shine">Shine</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("ap-shine-motion")
    })

    it("does not apply animation class for none motion", () => {
      render(<Button motion="none">None</Button>)
      const button = screen.getByRole("button")
      expect(button.className).not.toContain("animate-ap")
    })

    it("triggers pop animation on click", () => {
      vi.useFakeTimers()
      render(<Button motion="pop">Pop</Button>)
      const button = screen.getByRole("button")

      fireEvent.click(button)
      expect(button.className).toContain("animate-ap-pop")

      vi.advanceTimersByTime(200)
      expect(button.className).not.toContain("animate-ap-pop")

      vi.useRealTimers()
    })

    it("applies snap scale on mouse down", () => {
      render(<Button motion="snap">Snap</Button>)
      const button = screen.getByRole("button")

      fireEvent.mouseDown(button)
      expect(button.style.transform).toBe("scale(0.97)")

      fireEvent.mouseUp(button)
      expect(button.style.transform).toBe("scale(1)")
    })

    it("resets snap scale on mouse leave", () => {
      render(<Button motion="snap">Snap</Button>)
      const button = screen.getByRole("button")

      fireEvent.mouseDown(button)
      expect(button.style.transform).toBe("scale(0.97)")

      fireEvent.mouseLeave(button)
      expect(button.style.transform).toBe("scale(1)")
    })
  })

  describe("click handling", () => {
    it("calls onClick handler when clicked", () => {
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click</Button>)

      fireEvent.click(screen.getByRole("button"))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("passes event to onClick handler", () => {
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click</Button>)

      fireEvent.click(screen.getByRole("button"))
      expect(handleClick.mock.calls[0][0]).toBeDefined()
    })
  })

  describe("icons", () => {
    it("renders left icon", () => {
      render(<Button leftIcon={<Star data-testid="left-icon" />}>With Icon</Button>)
      expect(screen.getByTestId("left-icon")).toBeInTheDocument()
    })

    it("renders right icon", () => {
      render(<Button rightIcon={<ArrowRight data-testid="right-icon" />}>With Icon</Button>)
      expect(screen.getByTestId("right-icon")).toBeInTheDocument()
    })

    it("renders both icons", () => {
      render(
        <Button
          leftIcon={<Star data-testid="left-icon" />}
          rightIcon={<ArrowRight data-testid="right-icon" />}
        >
          Both Icons
        </Button>
      )
      expect(screen.getByTestId("left-icon")).toBeInTheDocument()
      expect(screen.getByTestId("right-icon")).toBeInTheDocument()
    })
  })

  describe("disabled state", () => {
    it("can be disabled", () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole("button")).toBeDisabled()
    })

    it("has disabled styling", () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("disabled:pointer-events-none")
      expect(button.className).toContain("disabled:opacity-50")
    })

    it("does not trigger click when disabled", () => {
      const handleClick = vi.fn()
      render(<Button disabled onClick={handleClick}>Disabled</Button>)

      fireEvent.click(screen.getByRole("button"))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe("custom className", () => {
    it("merges custom className with default classes", () => {
      render(<Button className="custom-class">Custom</Button>)
      const button = screen.getByRole("button")
      expect(button.className).toContain("custom-class")
      expect(button.className).toContain("inline-flex")
    })
  })

  describe("buttonVariants", () => {
    it("exports buttonVariants for external use", () => {
      expect(buttonVariants).toBeDefined()
      expect(typeof buttonVariants).toBe("function")
    })

    it("generates correct classes with buttonVariants", () => {
      const classes = buttonVariants({ variant: "glass", size: "lg" })
      expect(classes).toContain("backdrop-blur")
      expect(classes).toContain("h-12")
    })
  })

  describe("HTML attributes", () => {
    it("passes through HTML attributes", () => {
      render(<Button type="submit" data-testid="submit-btn">Submit</Button>)
      const button = screen.getByTestId("submit-btn")
      expect(button).toHaveAttribute("type", "submit")
    })

    it("supports aria attributes", () => {
      render(<Button aria-label="Close dialog">X</Button>)
      expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Close dialog")
    })
  })
})
