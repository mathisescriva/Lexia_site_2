"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { Logo } from "./Logo"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openProduct, setOpenProduct] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY
          setIsScrolled(scrollPosition > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])


  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform',
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo isScrolled={isScrolled} />
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpenProduct(true)}
            onMouseLeave={() => setOpenProduct(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-normal text-foreground transition-opacity hover:opacity-60 px-3 py-2"
            >
              Product
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openProduct ? 'rotate-180' : ''}`} />
            </button>
            {openProduct && (
              <>
                <div className="absolute left-0 top-full h-1.5 w-full" />
                <div className="absolute left-0 top-full mt-1.5 w-[180px] rounded-md border bg-popover p-2 shadow-lg">
                  <Link
                    href="/usecases"
                    className="block rounded-md px-3 py-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Use Cases
                  </Link>
                  <a
                    href="https://gilbert-assistant.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Gilbert
                  </a>
                  <Link
                    href="/api"
                    className="block rounded-md px-3 py-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    API
                  </Link>
                </div>
              </>
            )}
          </div>

          <Link
            href="/research"
            className="text-sm font-normal text-foreground transition-opacity hover:opacity-60 px-3 py-2"
          >
            Research
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenCompany(true)}
            onMouseLeave={() => setOpenCompany(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-normal text-foreground transition-opacity hover:opacity-60 px-3 py-2"
            >
              Company
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openCompany ? 'rotate-180' : ''}`} />
            </button>
            {openCompany && (
              <>
                <div className="absolute left-0 top-full h-1.5 w-full" />
                <div className="absolute left-0 top-full mt-1.5 w-[180px] rounded-md border bg-popover p-2 shadow-lg">
                  <Link
                    href="/team"
                    className="block rounded-md px-3 py-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Team
                  </Link>
                  <Link
                    href="/careers"
                    className="block rounded-md px-3 py-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Careers
                  </Link>
                </div>
              </>
            )}
          </div>

          <Link
            href="/blog"
            className="text-sm font-normal text-foreground transition-opacity hover:opacity-60 px-3 py-2"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:block">
            <Button variant="outline" className="font-normal">
              Book a Call
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground transition-opacity hover:opacity-60"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            {/* Product Dropdown */}
            <div>
              <button
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-normal text-foreground transition-opacity hover:opacity-60"
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
              >
                Product
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileProductOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/usecases"
                    className="block px-3 py-2 text-sm text-muted-foreground transition-opacity hover:opacity-60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Use Cases
                  </Link>
                  <a
                    href="https://gilbert-assistant.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-sm text-muted-foreground transition-opacity hover:opacity-60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Gilbert
                  </a>
                  <Link
                    href="/api"
                    className="block px-3 py-2 text-sm text-muted-foreground transition-opacity hover:opacity-60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    API
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/research"
              className="block px-3 py-2 text-sm font-normal text-foreground transition-opacity hover:opacity-60"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </Link>

            {/* Company Dropdown */}
            <div>
              <button
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-normal text-foreground transition-opacity hover:opacity-60"
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              >
                Company
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCompanyOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/team"
                    className="block px-3 py-2 text-sm text-muted-foreground transition-opacity hover:opacity-60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Team
                  </Link>
                  <Link
                    href="/careers"
                    className="block px-3 py-2 text-sm text-muted-foreground transition-opacity hover:opacity-60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block px-3 py-2 text-sm font-normal text-foreground transition-opacity hover:opacity-60"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <div className="pt-4 border-t">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full font-normal">
                  Book a Call
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
