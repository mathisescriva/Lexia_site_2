import type { Metadata } from "next"
import { ManufacturingContent } from "./ManufacturingContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Manufacturing Industry - Voice Solutions for Industry",
  description: "Lexia voice technology solutions for the manufacturing industry. Voice quality control, predictive maintenance, voice-powered warehouse management, hands-free documentation. Optimize your industrial operations.",
  keywords: [
    "industrial voice technology",
    "manufacturing speech-to-text",
    "voice quality control",
    "voice predictive maintenance",
    "voice warehouse management",
    "Industry 4.0 voice",
    "hands-free factory",
    "industrial voice IoT",
  ],
  openGraph: {
    title: "Voice Solutions for Manufacturing Industry | Lexia",
    description: "Voice quality control, predictive maintenance, warehouse management. Speech-to-text solutions for industry.",
    type: "website",
    url: "https://www.lexiapro.fr/industries/manufacturing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexia - Voice Solutions for Industry",
    description: "Voice technology for manufacturing industry: quality control, maintenance, logistics.",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/industries/manufacturing",
  },
}

const manufacturingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lexia Manufacturing Solutions",
  description: "Voice technology solutions for the manufacturing industry: quality control, predictive maintenance, warehouse management.",
  url: "https://www.lexiapro.fr/industries/manufacturing",
  provider: {
    "@type": "Organization",
    name: "Lexia",
    url: "https://www.lexiapro.fr",
  },
  serviceType: "Speech Technology for Manufacturing",
  areaServed: "Worldwide",
}

export default function ManufacturingPage() {
  return (
    <>
      <JsonLd data={manufacturingJsonLd} />
      <ManufacturingContent />
    </>
  )
}
