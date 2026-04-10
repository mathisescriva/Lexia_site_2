import type { Metadata } from "next"
import { ResearchContent } from "./ResearchContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Research & Development - Voice AI & Speech-to-Text Models",
  description: "Lexia research and development in collaboration with the Intelligence Lab at ECE. Enterprise-optimized speech-to-text models, post-training, model optimization, scientific publications. Models available on Hugging Face.",
  keywords: [
    "voice AI research",
    "speech-to-text models",
    "post-training LLM",
    "model optimization",
    "AI Lab ECE",
    "Hugging Face models",
    "SLERP model merging",
    "AI scientific publications",
    "deeptech research",
    "Lexia Labs",
  ],
  openGraph: {
    title: "Research & Development | Lexia",
    description: "Enterprise-optimized speech-to-text models. Post-training, optimization, scientific publications.",
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
    title: "Lexia R&D - Voice AI & Speech-to-Text Models",
    description: "Research and development of enterprise speech-to-text models.",
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
  description: "Research and development of enterprise-optimized speech-to-text models, in collaboration with the Intelligence Lab at ECE.",
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
