import type { Metadata } from "next"
import { BlogPageContent } from "./BlogPageContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Blog - Technologie Vocale & Solutions Entreprise",
  description: "Articles et actualités sur la technologie vocale, le speech-to-text, la reconnaissance vocale entreprise, les modèles IA et la recherche. Découvrez nos insights sur le CRM vocal, la transcription automatique et l'intelligence de réunion.",
  keywords: [
    "blog technologie vocale",
    "articles speech-to-text",
    "reconnaissance vocale entreprise",
    "IA vocale actualités",
    "recherche AI Lab ECE",
    "modèles Hugging Face",
    "transcription automatique",
    "CRM vocal",
    "Gilbert API",
  ],
  openGraph: {
    title: "Blog - Technologie Vocale & Solutions Entreprise | Lexia",
    description: "Articles et actualités sur la technologie vocale, le speech-to-text et les solutions IA pour l'entreprise.",
    type: "website",
    url: "https://www.lexiapro.fr/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Lexia - Technologie Vocale & Solutions Entreprise",
    description: "Articles et actualités sur la technologie vocale et le speech-to-text pour l'entreprise.",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/blog",
  },
}

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Lexia",
  url: "https://www.lexiapro.fr/blog",
  description: "Articles et actualités sur la technologie vocale et les solutions speech-to-text pour l'entreprise.",
  publisher: {
    "@type": "Organization",
    name: "Lexia",
    url: "https://www.lexiapro.fr",
    logo: {
      "@type": "ImageObject",
      url: "https://www.lexiapro.fr/logos/logo_lexia.webp",
    },
  },
}

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogJsonLd} />
      <BlogPageContent />
    </>
  )
}



