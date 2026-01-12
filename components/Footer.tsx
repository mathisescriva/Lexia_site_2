"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Logo } from "./Logo"

export function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const logoContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoContainerRef.current) return
    
    const logoRect = logoContainerRef.current.getBoundingClientRect()
    
    // Calculate position relative to the logo container (centered)
    const x = Math.max(0, Math.min(100, ((e.clientX - logoRect.left) / logoRect.width) * 100))
    const y = Math.max(0, Math.min(100, ((e.clientY - logoRect.top) / logoRect.height) * 100))
    
    setMousePosition({ x, y })
  }

  // Calculate mask opacity based on distance from mouse
  const getMaskOpacity = (px: number, py: number) => {
    if (!isHovering) return 1
    
    const dx = px - mousePosition.x
    const dy = py - mousePosition.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = 200 // blob radius
    
    if (distance > maxDistance) return 1
    if (distance < maxDistance * 0.35) return 0
    
    // Smooth transition between 35% and 100% of maxDistance
    const normalized = (distance - maxDistance * 0.35) / (maxDistance * 0.65)
    return normalized
  }

  return (
    <footer className="w-full border-t bg-background">
      <div 
        ref={containerRef}
        className="container py-16 md:py-24 relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        
        {/* Logo en arrière-plan, centré et semi-transparent - plus grand avec dégradé */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div ref={logoContainerRef} className="relative w-full max-w-7xl h-full scale-[1.05]">
            <div className="relative w-full h-full">
              {/* Logo coloré avec dégradé horizontal */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, #d97706 0%, #b91c1c 35%, #4f46e5 70%, #4338ca 100%)`,
                  WebkitMaskImage: `url('/logos/logo_lexia.webp')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/logos/logo_lexia.webp')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  opacity: isHovering ? 0.25 : 0.12,
                  transition: 'opacity 0.3s ease',
                }}
              />
              
              {/* Masque blanc avec opacité variable selon la position de la souris (cache le logo coloré) */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,${isHovering ? 0 : 1}) 0%, rgba(255,255,255,${isHovering ? 0.2 : 1}) 35%, rgba(255,255,255,${isHovering ? 0.5 : 1}) 50%, rgba(255,255,255,${isHovering ? 0.7 : 1}) 65%, white 75%, white 100%)`,
                  WebkitMaskImage: `url('/logos/logo_lexia.webp')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/logos/logo_lexia.webp')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  opacity: 1,
                }}
              />
              
              {/* Logo grisé par défaut (toujours visible au-dessus) */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  WebkitMaskImage: `url('/logos/logo_lexia.webp')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/logos/logo_lexia.webp')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  opacity: 0.05,
                }}
              />
            </div>
          </div>
        </div>

        {/* Contenu du footer */}
        <div className="relative z-10 pointer-events-none">
          <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-16 mb-12">
            {/* Section gauche - Description */}
            <div className="flex flex-col gap-4 max-w-md pointer-events-auto">
              <Logo />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Lexia develops speech technology designed to reconcile voice interactions with enterprise systems, delivering natural, expressive, and seamless integration at scale.
              </p>
            </div>

            {/* Section droite - Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 pointer-events-auto">
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-normal">Product</h3>
                <a 
                  href="https://gilbert-assistant.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
                >
                  Gilbert
                </a>
                <Link 
                  href="/api"
                  className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
                >
                  API
                </Link>
                <a 
                  href="#usecases" 
                  className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
                >
                  Use Cases
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-normal">Company</h3>
                <a 
                  href="/team" 
                  className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
                >
                  Team
                </a>
                    <a 
                      href="/research" 
                      className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
                    >
                      Research
                    </a>
                <Link 
                  href="/careers" 
                  className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
                >
                  Careers
                </Link>
                <a 
                  href="#blog" 
                  className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
                >
                  Blog
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-normal">Legal</h3>
                <a 
                  href="/privacy" 
                  className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8 pointer-events-auto">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lexia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="/terms" 
                className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
              >
                Terms of Service
              </a>
              <a 
                href="/privacy" 
                className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}