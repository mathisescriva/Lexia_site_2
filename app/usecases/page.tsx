import type { Metadata } from "next"
import { UseCasesContent } from "./UseCasesContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Use Cases - Enterprise Voice Solutions",
  description: "Discover how enterprises use Lexia voice technology: voice CRM, automatic call transcription, meeting intelligence, voice analytics, intelligent voice assistant, quality assurance. Sovereign speech-to-text solutions.",
  keywords: [
    "voice technology use cases",
    "enterprise voice CRM",
    "automatic call transcription",
    "meeting intelligence",
    "voice analytics",
    "enterprise voice assistant",
    "voice quality assurance",
    "enterprise speech-to-text",
    "sovereign voice solutions",
  ],
  openGraph: {
    title: "Use Cases - Enterprise Voice Solutions | Lexia",
    description: "Voice CRM, automatic transcription, meeting intelligence, and more. Discover Lexia's speech-to-text solutions for enterprises.",
    type: "website",
    url: "https://www.lexiapro.fr/usecases",
    images: [
      {
        url: "/logos/logo_lexia.webp",
        width: 1200,
        height: 630,
        alt: "Lexia Use Cases - Enterprise Voice Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases - Enterprise Voice Solutions | Lexia",
    description: "Voice CRM, automatic transcription, meeting intelligence. Sovereign speech-to-text solutions.",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/usecases",
  },
}

const useCasesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Lexia Use Cases",
  description: "Voice solutions for enterprises",
  url: "https://www.lexiapro.fr/usecases",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Voice-Activated CRM",
      url: "https://www.lexiapro.fr/usecases/voice-activated-crm",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Automated Call Transcription",
      url: "https://www.lexiapro.fr/usecases/automated-call-transcription",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Meeting Intelligence",
      url: "https://www.lexiapro.fr/usecases/meeting-intelligence",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Voice-Powered Analytics",
      url: "https://www.lexiapro.fr/usecases/voice-powered-analytics",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Intelligent Voice Assistant",
      url: "https://www.lexiapro.fr/usecases/intelligent-voice-assistant",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Voice Quality Assurance",
      url: "https://www.lexiapro.fr/usecases/voice-quality-assurance",
    },
  ],
}

export default function UseCasesPage() {
  return (
    <>
      <JsonLd data={useCasesJsonLd} />
      <UseCasesContent />
    </>
  )
}
