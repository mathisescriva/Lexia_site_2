import type { Metadata } from "next"
import { ContactContent } from "./ContactContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Contact - Book a Call",
  description: "Contact Lexia to discover our enterprise voice technology solutions. Book a call with our team to discuss your speech-to-text, voice CRM, automatic transcription, and on-premise deployment needs.",
  keywords: [
    "contact Lexia",
    "book a call",
    "voice technology demo",
    "speech-to-text consultation",
    "voice solution quote",
    "enterprise partnership",
  ],
  openGraph: {
    title: "Contact Lexia - Book a Call",
    description: "Discuss your enterprise voice technology needs with our team.",
    type: "website",
    url: "https://www.lexiapro.fr/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact Lexia - Enterprise Voice Solutions",
    description: "Book a call to discuss your voice technology needs.",
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
