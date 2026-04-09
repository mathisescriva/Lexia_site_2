import type { Metadata } from "next"
import { UseCasesContent } from "./UseCasesContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Cas d'Usage - Solutions Vocales Entreprise",
  description: "Découvrez comment les entreprises utilisent la technologie vocale Lexia : CRM vocal, transcription automatique d'appels, intelligence de réunion, analytics vocaux, assistant vocal intelligent, assurance qualité. Solutions speech-to-text souveraines.",
  keywords: [
    "cas d'usage technologie vocale",
    "CRM vocal entreprise",
    "transcription automatique appels",
    "intelligence de réunion",
    "analytics vocaux",
    "assistant vocal entreprise",
    "assurance qualité vocale",
    "speech-to-text entreprise",
    "solutions vocales souveraines",
  ],
  openGraph: {
    title: "Cas d'Usage - Solutions Vocales Entreprise | Lexia",
    description: "CRM vocal, transcription automatique, intelligence de réunion et plus. Découvrez les solutions speech-to-text de Lexia pour l'entreprise.",
    type: "website",
    url: "https://www.lexiapro.fr/usecases",
    images: [
      {
        url: "/logos/logo_lexia.webp",
        width: 1200,
        height: 630,
        alt: "Lexia Use Cases - Solutions Vocales Entreprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cas d'Usage - Solutions Vocales Entreprise | Lexia",
    description: "CRM vocal, transcription automatique, intelligence de réunion. Solutions speech-to-text souveraines.",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/usecases",
  },
}

const useCasesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cas d'usage Lexia",
  description: "Solutions vocales pour l'entreprise",
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
