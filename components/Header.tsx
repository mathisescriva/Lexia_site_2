"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <a 
            href="#about" 
            className="text-sm font-normal text-foreground transition-opacity hover:opacity-60"
          >
            About
          </a>
          <a 
            href="#research" 
            className="text-sm font-normal text-foreground transition-opacity hover:opacity-60"
          >
            Research
          </a>
          <a 
            href="#usecases" 
            className="text-sm font-normal text-foreground transition-opacity hover:opacity-60"
          >
            Use Cases
          </a>
          <a 
            href="#solutions" 
            className="text-sm font-normal text-foreground transition-opacity hover:opacity-60"
          >
            Solutions
          </a>
          <a 
            href="#contact" 
            className="text-sm font-normal text-foreground transition-opacity hover:opacity-60"
          >
            Contact
          </a>
        </nav>
        <Button variant="outline" className="font-normal">
          Get Started
        </Button>
      </div>
    </header>
  )
}