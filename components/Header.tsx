"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Logo } from "./Logo"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openProduct, setOpenProduct] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)

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
                    href="#gilbert"
                    className="block rounded-md px-3 py-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Gilbert
                  </a>
                  <a
                    href="#api"
                    className="block rounded-md px-3 py-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    API
                  </a>
                </div>
              </>
            )}
          </div>

          <a
            href="/research"
            className="text-sm font-normal text-foreground transition-opacity hover:opacity-60 px-3 py-2"
          >
            Research
          </a>

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
        <Link href="/contact">
          <Button variant="outline" className="font-normal">
            Book a Call
          </Button>
        </Link>
      </div>
    </header>
  )
}