import type { Metadata } from "next"
import { ContactContent } from "./ContactContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Contact - Réservez un Appel",
  description: "Contactez Lexia pour découvrir nos solutions de technologie vocale pour l'entreprise. Réservez un appel avec notre équipe pour discuter de vos besoins en speech-to-text, CRM vocal, transcription automatique et déploiement on-premise.",
  keywords: [
    "contact Lexia",
    "réserver un appel",
    "demo technologie vocale",
    "consultation speech-to-text",
    "devis solution vocale",
    "partenariat entreprise",
  ],
  openGraph: {
    title: "Contactez Lexia - Réservez un Appel",
    description: "Discutez avec notre équipe de vos besoins en technologie vocale entreprise.",
    type: "website",
    url: "https://www.lexiapro.fr/contact",
  },
  twitter: {
    card: "summary",
    title: "Contactez Lexia - Solutions Vocales Entreprise",
    description: "Réservez un appel pour discuter de vos besoins en technologie vocale.",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/contact",
  },
}

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Lexia",
  url: "https://www.lexiapro.fr/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Lexia",
    url: "https://www.lexiapro.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://www.lexiapro.fr/contact",
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <ContactContent />
    </>
  )
}
