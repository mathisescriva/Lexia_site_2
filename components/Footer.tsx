"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Logo } from "./Logo"

export function Footer() {
  const [smoothPosition, setSmoothPosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)
  const [hoverIntensity, setHoverIntensity] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const logoContainerRef = useRef<HTMLDivElement>(null)
  const targetPos = useRef({ x: 50, y: 50 })
  const animationRef = useRef<number>(0)
  const hasEntered = useRef(false)

  // Smooth interpolation for cursor position
  useEffect(() => {
    const animate = () => {
      setSmoothPosition(prev => ({
        x: prev.x + (targetPos.current.x - prev.x) * 0.12,
        y: prev.y + (targetPos.current.y - prev.y) * 0.12,
      }))
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [])

  // Smooth hover intensity transition
  useEffect(() => {
    const target = isHovering ? 1 : 0
    const step = () => {
      setHoverIntensity(prev => {
        const next = prev + (target - prev) * 0.08
        if (Math.abs(next - target) < 0.01) return target
        requestAnimationFrame(step)
        return next
      })
    }
    requestAnimationFrame(step)
  }, [isHovering])

  const getRelativePosition = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoContainerRef.current) return { x: 50, y: 50 }
    const logoRect = logoContainerRef.current.getBoundingClientRect()
    return {
      x: Math.max(0, Math.min(100, ((e.clientX - logoRect.left) / logoRect.width) * 100)),
      y: Math.max(0, Math.min(100, ((e.clientY - logoRect.top) / logoRect.height) * 100)),
    }
  }, [])

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Snap smooth position to cursor immediately on enter (no lerp from center)
    const pos = getRelativePosition(e)
    targetPos.current = pos
    setSmoothPosition(pos)
    hasEntered.current = true
    setIsHovering(true)
  }, [getRelativePosition])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    targetPos.current = getRelativePosition(e)
  }, [getRelativePosition])

  const handleMouseLeave = useCallback(() => {
    hasEntered.current = false
    setIsHovering(false)
  }, [])

  const revealRadius = 280 + hoverIntensity * 80
  const glowRadius = revealRadius * 1.6

  // Combined mask: logo shape intersected with radial cursor area
  const revealMask = {
    WebkitMaskImage: `url('/logos/logo_lexia_hq.png'), radial-gradient(ellipse ${revealRadius}px ${revealRadius * 0.8}px at ${smoothPosition.x}% ${smoothPosition.y}%, black 0%, black 30%, transparent 80%)`,
    WebkitMaskSize: 'contain, 100% 100%',
    WebkitMaskRepeat: 'no-repeat, no-repeat',
    WebkitMaskPosition: 'center, center',
    WebkitMaskComposite: 'source-in' as const,
    maskImage: `url('/logos/logo_lexia_hq.png'), radial-gradient(ellipse ${revealRadius}px ${revealRadius * 0.8}px at ${smoothPosition.x}% ${smoothPosition.y}%, black 0%, black 30%, transparent 80%)`,
    maskSize: 'contain, 100% 100%',
    maskRepeat: 'no-repeat, no-repeat',
    maskPosition: 'center, center',
    maskComposite: 'intersect' as const,
  }

  const glowMask = {
    WebkitMaskImage: `url('/logos/logo_lexia_hq.png'), radial-gradient(ellipse ${glowRadius}px ${glowRadius * 0.7}px at ${smoothPosition.x}% ${smoothPosition.y}%, black 0%, black 20%, transparent 70%)`,
    WebkitMaskSize: 'contain, 100% 100%',
    WebkitMaskRepeat: 'no-repeat, no-repeat',
    WebkitMaskPosition: 'center, center',
    WebkitMaskComposite: 'source-in' as const,
    maskImage: `url('/logos/logo_lexia_hq.png'), radial-gradient(ellipse ${glowRadius}px ${glowRadius * 0.7}px at ${smoothPosition.x}% ${smoothPosition.y}%, black 0%, black 20%, transparent 70%)`,
    maskSize: 'contain, 100% 100%',
    maskRepeat: 'no-repeat, no-repeat',
    maskPosition: 'center, center',
    maskComposite: 'intersect' as const,
  }

  const logoMask = {
    WebkitMaskImage: `url('/logos/logo_lexia_hq.png')`,
    WebkitMaskSize: 'contain' as const,
    WebkitMaskRepeat: 'no-repeat' as const,
    WebkitMaskPosition: 'center' as const,
    maskImage: `url('/logos/logo_lexia_hq.png')`,
    maskSize: 'contain' as const,
    maskRepeat: 'no-repeat' as const,
    maskPosition: 'center' as const,
  }

  return (
    <footer className="w-full border-t bg-background">
      <style jsx>{`
        @keyframes logoPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.055; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.02); }
        }
      `}</style>
      <div 
        ref={containerRef}
        className="container py-16 md:py-24 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        
        {/* Logo background layers */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <div ref={logoContainerRef} className="relative w-full max-w-7xl h-full scale-[1.05]">
            <div className="relative w-full h-full">
              
              {/* Layer 1: Very faint gray logo with breathing animation (default state) */}
              <div 
                className="absolute inset-0"
                style={{
                  ...logoMask,
                  background: 'rgba(0, 0, 0, 0.4)',
                  opacity: 0.04 + (0.04 - 0.04 * hoverIntensity),
                  animation: hoverIntensity < 0.1 ? 'logoPulse 5s ease-in-out infinite' : 'none',
                  transition: 'opacity 0.4s ease',
                }}
              />

              {/* Layer 2: Colored gradient - revealed ONLY in cursor area via mask-composite */}
              <div 
                className="absolute inset-0"
                style={{
                  ...revealMask,
                  background: `linear-gradient(to right, 
                    #121240 0%, 
                    #1e1652 15%, 
                    #4a1942 30%, 
                    #7a1530 42%, 
                    #9e1a1a 55%, 
                    #b5391a 68%, 
                    #c45a12 80%, 
                    #c47a0a 92%, 
                    #b8860b 100%)`,
                  opacity: hoverIntensity * 0.55,
                }}
              />

              {/* Layer 3: Subtle warm glow halo around cursor */}
              <div 
                className="absolute inset-0"
                style={{
                  ...glowMask,
                  background: `linear-gradient(to right, 
                    rgba(18, 18, 64, 0.6) 0%, 
                    rgba(158, 26, 26, 0.5) 50%, 
                    rgba(180, 120, 10, 0.4) 100%)`,
                  opacity: hoverIntensity * 0.25,
                }}
              />

              {/* Layer 4: Bright torch core at cursor */}
              <div 
                className="absolute inset-0"
                style={{
                  ...revealMask,
                  background: `
                    radial-gradient(
                      circle ${revealRadius * 0.25}px at ${smoothPosition.x}% ${smoothPosition.y}%, 
                      rgba(255, 255, 255, 0.4) 0%,
                      rgba(255, 255, 255, 0.1) 50%,
                      transparent 100%
                    )
                  `,
                  mixBlendMode: 'overlay',
                  opacity: hoverIntensity * 0.8,
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