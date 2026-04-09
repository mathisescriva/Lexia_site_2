import type { Metadata } from "next"
import { CareersContent } from "./CareersContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Carrières - Rejoignez l'Équipe Lexia",
  description: "Rejoignez Lexia, startup deeptech française spécialisée en technologie vocale. Postes ouverts en recherche IA, ingénierie logicielle, machine learning et développement. Basé à Paris.",
  keywords: [
    "carrières Lexia",
    "emploi deeptech Paris",
    "recrutement IA vocale",
    "stage machine learning",
    "ingénieur speech technology",
    "startup Paris recrutement",
    "emploi intelligence artificielle",
    "recherche IA France",
  ],
  openGraph: {
    title: "Carrières - Rejoignez l'Équipe Lexia",
    description: "Postes ouverts en recherche IA, ingénierie et machine learning. Startup deeptech à Paris.",
    type: "website",
    url: "https://www.lexiapro.fr/careers",
    images: [
      {
        url: "/logos/lexia-equipe-team-paris.jpg",
        width: 1200,
        height: 630,
        alt: "Équipe Lexia - startup deeptech française de technologie vocale à Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrières Lexia - Startup Deeptech Paris",
    description: "Rejoignez notre équipe de chercheurs et ingénieurs en technologie vocale.",
    images: ["/logos/lexia-equipe-team-paris.jpg"],
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/careers",
  },
}

const careersJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Carrières Lexia",
  url: "https://www.lexiapro.fr/careers",
  description: "Postes ouverts chez Lexia - Startup deeptech spécialisée en technologie vocale, basée à Paris.",
  mainEntity: {
    "@type": "Organization",
    name: "Lexia",
    url: "https://www.lexiapro.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  },
}

export default function CareersPage() {
  return (
    <>
      <JsonLd data={careersJsonLd} />
      <CareersContent />
    </>
  )
}
