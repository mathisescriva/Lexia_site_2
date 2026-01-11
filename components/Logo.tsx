import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center transition-opacity hover:opacity-70">
      <Image 
        src="/logos/logo_lexia.webp" 
        alt="Lexia" 
        width={120} 
        height={40}
        className="h-8 w-auto"
        priority
      />
    </Link>
  )
}