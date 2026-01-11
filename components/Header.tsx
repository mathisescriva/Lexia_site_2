"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Logo isScrolled={isScrolled} />
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