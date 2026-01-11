"use client"

import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  isScrolled?: boolean
}

export function Logo({ isScrolled = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center transition-opacity hover:opacity-70">
      <div className="relative h-8 w-[120px]">
        {/* Logo complet avec masque qui s'enlève de gauche à droite */}
        <div 
          className="absolute inset-0 flex items-center overflow-hidden transition-all ease-in-out"
          style={{
            clipPath: isScrolled ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 0)',
            opacity: isScrolled ? 0 : 1,
            transform: isScrolled ? 'scale(0.8)' : 'scale(1)',
            transitionDuration: '450ms',
          }}
        >
          <Image 
            src="/logos/logo_lexia.webp" 
            alt="Lexia" 
            width={120} 
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>
        {/* Icône - visible uniquement quand scrolled */}
        <div 
          className="absolute inset-0 flex items-center justify-start transition-opacity ease-in-out"
          style={{
            opacity: isScrolled ? 1 : 0,
            transitionDuration: '450ms',
          }}
        >
          <Image 
            src="/logos/logo_lexia_icone.png" 
            alt="Lexia" 
            width={32} 
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
        </div>
      </div>
    </Link>
  )
}