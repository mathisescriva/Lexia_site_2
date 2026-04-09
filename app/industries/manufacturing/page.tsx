import type { Metadata } from "next"
import { ManufacturingContent } from "./ManufacturingContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Industrie Manufacturière - Solutions Vocales pour l'Industrie",
  description: "Solutions de technologie vocale Lexia pour l'industrie manufacturière. Contrôle qualité vocal, maintenance prédictive, gestion d'entrepôt par la voix, documentation mains-libres. Optimisez vos opérations industrielles.",
  keywords: [
    "technologie vocale industrie",
    "speech-to-text manufacturier",
    "contrôle qualité vocal",
    "maintenance prédictive vocale",
    "gestion entrepôt vocal",
    "industrie 4.0 voix",
    "mains-libres usine",
    "IoT vocal industriel",
  ],
  openGraph: {
    title: "Solutions Vocales pour l'Industrie Manufacturière | Lexia",
    description: "Contrôle qualité vocal, maintenance prédictive, gestion d'entrepôt. Solutions speech-to-text pour l'industrie.",
    type: "website",
    url: "https://www.lexiapro.fr/industries/manufacturing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexia - Solutions Vocales pour l'Industrie",
    description: "Technologie vocale pour l'industrie manufacturière : contrôle qualité, maintenance, logistique.",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/industries/manufacturing",
  },
}

const manufacturingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lexia Manufacturing Solutions",
  description: "Solutions de technologie vocale pour l'industrie manufacturière : contrôle qualité, maintenance prédictive, gestion d'entrepôt.",
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
