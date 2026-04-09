import type { Metadata } from "next"
import { ResearchContent } from "./ResearchContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Recherche & Développement - IA Vocale & Modèles Speech-to-Text",
  description: "Recherche et développement Lexia en collaboration avec le Intelligence Lab de l'ECE. Modèles speech-to-text optimisés pour l'entreprise, post-training, optimisation de modèles, publications scientifiques. Modèles disponibles sur Hugging Face.",
  keywords: [
    "recherche IA vocale",
    "modèles speech-to-text",
    "post-training LLM",
    "optimisation modèles",
    "AI Lab ECE",
    "Hugging Face models",
    "SLERP model merging",
    "publications scientifiques IA",
    "recherche deeptech",
    "Lexia Labs",
  ],
  openGraph: {
    title: "Recherche & Développement | Lexia",
    description: "Modèles speech-to-text optimisés pour l'entreprise. Post-training, optimisation, publications scientifiques.",
    type: "website",
    url: "https://www.lexiapro.fr/research",
    images: [
      {
        url: "/logos/IALAB1.webp",
        width: 1200,
        height: 630,
        alt: "Lexia Research & Development - Intelligence Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R&D Lexia - IA Vocale & Modèles Speech-to-Text",
    description: "Recherche et développement de modèles speech-to-text pour l'entreprise.",
    images: ["/logos/IALAB1.webp"],
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/research",
  },
}

const researchJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  name: "Lexia Research & Development",
  url: "https://www.lexiapro.fr/research",
  description: "Recherche et développement de modèles speech-to-text optimisés pour l'entreprise, en collaboration avec le Intelligence Lab de l'ECE.",
  funder: {
    "@type": "Organization",
    name: "Lexia",
    url: "https://www.lexiapro.fr",
  },
  member: [
    {
      "@type": "Organization",
      name: "Intelligence Lab of ECE",
    },
  ],
}

const scholarlyArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "Geometric Model Merging for Efficient and Scalable Adaptation of Large Language Models",
  description: "Layer-Adaptive Spherical Linear Interpolation (Layer-Adaptive SLERP), a novel merging strategy for large language models.",
  author: [
    { "@type": "Person", name: "Mathis Escriva" },
  ],
  publisher: {
    "@type": "Organization",
    name: "I3E",
  },
  datePublished: "2025",
  url: "https://www.lexiapro.fr/logos/S31203_9035-1.pdf",
}

export default function ResearchPage() {
  return (
    <>
      <JsonLd data={researchJsonLd} />
      <JsonLd data={scholarlyArticleJsonLd} />
      <ResearchContent />
    </>
  )
}
