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
        url: "/logos/lexia-equipe-team-paris.jpg",
        width: 1200,
        height: 630,
        alt: "Équipe Lexia - startup deeptech française de technologie vocale basée à Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Équipe Lexia - Technologie Vocale Souveraine",
    description: "Chercheurs et ingénieurs basés à Paris, dédiés à la technologie vocale entreprise.",
    images: ["/logos/lexia-equipe-team-paris.jpg"],
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
  primaryImageOfPage: {
    "@type": "ImageObject",
    contentUrl: "https://www.lexiapro.fr/logos/lexia-equipe-team-paris.jpg",
    url: "https://www.lexiapro.fr/logos/lexia-equipe-team-paris.jpg",
    name: "Équipe Lexia - startup deeptech française de technologie vocale à Paris",
    description: "Photo de l'équipe fondatrice de Lexia, startup deeptech française spécialisée en technologie vocale et speech-to-text pour l'entreprise, basée à Paris. De gauche à droite : Mathis Escriva (Co-Fondateur), Jeanne Lesca (Head of Marketing), Martial Roberge (Co-Fondateur), Hugo Fouan (CTO).",
    width: 1200,
    height: 800,
    caption: "L'équipe Lexia à Paris - Technologie vocale souveraine pour l'entreprise",
  },
  mainEntity: {
    "@type": "Organization",
    name: "Lexia",
    url: "https://www.lexiapro.fr",
    image: "https://www.lexiapro.fr/logos/lexia-equipe-team-paris.jpg",
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
        image: "https://www.lexiapro.fr/logos/mathis.jpg",
      },
      {
        "@type": "Person",
        name: "Martial Roberge",
        jobTitle: "Co-Founder",
        image: "https://www.lexiapro.fr/logos/martial.jpg",
      },
      {
        "@type": "Person",
        name: "Hugo Fouan",
        jobTitle: "CTO",
        image: "https://www.lexiapro.fr/logos/hugo.jpg",
      },
      {
        "@type": "Person",
        name: "Jeanne Lesca",
        jobTitle: "Head of Marketing & Communication",
        image: "https://www.lexiapro.fr/logos/jeanne.jpg",
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
