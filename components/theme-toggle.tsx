"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  floating?: boolean
}

export function ThemeToggle({ floating = true }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const floatingClasses = "fixed bottom-4 right-4 z-50 rounded-full bg-primary text-primary-foreground border-2 border-cyan-bright hover:scale-110 transition-transform p-4 shadow-lg"
  const inlineClasses = "rounded-full"

  return (
    <Button
      variant="default"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={floating ? floatingClasses : inlineClasses}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
