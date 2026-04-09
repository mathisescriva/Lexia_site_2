import type { Metadata } from "next"
import { HomePage } from "./HomePage"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Lexia - Technologie Vocale pour l'Entreprise | Speech-to-Text Souverain",
  description: "Lexia est une entreprise deeptech française spécialisée dans la technologie vocale. Solutions speech-to-text souveraines : CRM vocal, transcription automatique d'appels, intelligence de réunion. +99% de précision, <200ms de latence, déploiement on-premise, RGPD compliant.",
  keywords: [
    "technologie vocale entreprise",
    "speech-to-text français",
    "reconnaissance vocale entreprise",
    "transcription automatique appels",
    "CRM vocal",
    "intelligence de réunion",
    "IA vocale souveraine",
    "deeptech française",
    "Lexia",
    "Gilbert API",
    "on-premise speech recognition",
    "RGPD compliant",
    "Hugging Face models",
    "AI Lab ECE",
  ],
  openGraph: {
    title: "Lexia - Technologie Vocale pour l'Entreprise",
    description: "Solutions speech-to-text souveraines pour l'entreprise. +99% de précision, <200ms de latence, 40+ langues. Déploiement on-premise, RGPD compliant.",
    type: "website",
    url: "https://www.lexiapro.fr",
    images: [
      {
        url: "/logos/logo_lexia.webp",
        width: 1200,
        height: 630,
        alt: "Lexia - Technologie Vocale pour l'Entreprise",
      },
      {
        url: "/logos/lexia-equipe-team-paris.jpg",
        width: 1200,
        height: 800,
        alt: "Équipe Lexia - startup deeptech française de technologie vocale à Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexia - Technologie Vocale pour l'Entreprise",
    description: "Solutions speech-to-text souveraines. +99% de précision, <200ms de latence, déploiement on-premise.",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lexia",
  url: "https://www.lexiapro.fr",
  logo: "https://www.lexiapro.fr/logos/logo_lexia.webp",
  image: {
    "@type": "ImageObject",
    url: "https://www.lexiapro.fr/logos/lexia-equipe-team-paris.jpg",
    contentUrl: "https://www.lexiapro.fr/logos/lexia-equipe-team-paris.jpg",
    name: "Équipe Lexia - startup deeptech française technologie vocale Paris",
    description: "L'équipe fondatrice de Lexia, startup deeptech française spécialisée en technologie vocale et speech-to-text souverain pour l'entreprise, basée à Paris.",
    width: 1200,
    height: 800,
  },
  description: "Entreprise deeptech française spécialisée dans la technologie vocale pour l'entreprise. Solutions speech-to-text souveraines, transcription automatique, CRM vocal.",
  foundingDate: "2024",
  founders: [
    { "@type": "Person", name: "Mathis Escriva" },
    { "@type": "Person", name: "Martial Roberge" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  sameAs: [
    "https://www.linkedin.com/company/lexiapro",
    "https://www.youtube.com/@Lexia-pro",
    "https://huggingface.co/Lexia",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://www.lexiapro.fr/contact",
  },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lexia",
  url: "https://www.lexiapro.fr",
  description: "Technologie vocale souveraine pour l'entreprise",
  publisher: {
    "@type": "Organization",
    name: "Lexia",
    url: "https://www.lexiapro.fr",
  },
}

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lexia Speech-to-Text API",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud, On-Premise",
  description: "API de reconnaissance vocale pour l'entreprise. Transcription automatique, CRM vocal, intelligence de réunion.",
  offers: {
    "@type": "Offer",
    category: "Enterprise",
  },
  creator: {
    "@type": "Organization",
    name: "Lexia",
  },
}

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={softwareJsonLd} />
      <HomePage />
    </>
  )
}
