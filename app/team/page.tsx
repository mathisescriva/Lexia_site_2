import type { Metadata } from "next"
import { TeamContent } from "./TeamContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Équipe - Chercheurs & Ingénieurs en Technologie Vocale",
  description: "Découvrez l'équipe Lexia : chercheurs, ingénieurs et innovateurs basés à Paris, dédiés au développement de solutions de technologie vocale souveraines et sécurisées pour l'entreprise. Fondée par Mathis Escriva et Martial Roberge.",
  keywords: [
    "équipe Lexia",
    "fondateurs Lexia",
    "Mathis Escriva",
    "Martial Roberge",
    "Hugo Fouan",
    "startup deeptech Paris",
    "chercheurs IA vocale",
    "ingénieurs speech technology",
    "French Tech",
    "souveraineté numérique",
  ],
  openGraph: {
    title: "Équipe Lexia - Chercheurs & Ingénieurs en Technologie Vocale",
    description: "Chercheurs, ingénieurs et innovateurs basés à Paris, dédiés au développement de solutions vocales souveraines pour l'entreprise.",
    type: "website",
    url: "https://www.lexiapro.fr/team",
    images: [
      {
        url: "/logos/equipe.jpg",
        width: 1200,
        height: 630,
        alt: "Équipe Lexia - Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Équipe Lexia - Technologie Vocale Souveraine",
    description: "Chercheurs et ingénieurs basés à Paris, dédiés à la technologie vocale entreprise.",
    images: ["/logos/equipe.jpg"],
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/team",
  },
}

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Équipe Lexia",
  url: "https://www.lexiapro.fr/team",
  mainEntity: {
    "@type": "Organization",
    name: "Lexia",
    url: "https://www.lexiapro.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    employee: [
      {
        "@type": "Person",
        name: "Mathis Escriva",
        jobTitle: "Co-Founder",
      },
      {
        "@type": "Person",
        name: "Martial Roberge",
        jobTitle: "Co-Founder",
      },
      {
        "@type": "Person",
        name: "Hugo Fouan",
        jobTitle: "CTO",
      },
      {
        "@type": "Person",
        name: "Jeanne Lesca",
        jobTitle: "Head of Marketing & Communication",
      },
    ],
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.lexiapro.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Équipe",
      item: "https://www.lexiapro.fr/team",
    },
  ],
}

export default function TeamPage() {
  return (
    <>
      <JsonLd data={teamJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <TeamContent />
    </>
  )
}
