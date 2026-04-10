import type { Metadata } from "next"
import { BlogPageContent } from "./BlogPageContent"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Blog - Voice Technology & Enterprise Solutions",
  description: "Articles and news about voice technology, speech-to-text, enterprise voice recognition, AI models, and research. Discover our insights on voice CRM, automatic transcription, and meeting intelligence.",
  keywords: [
    "voice technology blog",
    "speech-to-text articles",
    "enterprise voice recognition",
    "voice AI news",
    "AI Lab ECE research",
    "Hugging Face models",
    "automatic transcription",
    "voice CRM",
    "Gilbert API",
  ],
  openGraph: {
    title: "Blog - Voice Technology & Enterprise Solutions | Lexia",
    description: "Articles and news about voice technology, speech-to-text, and AI solutions for enterprises.",
    type: "website",
    url: "https://www.lexiapro.fr/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexia Blog - Voice Technology & Enterprise Solutions",
    description: "Articles and news about voice technology and speech-to-text for enterprises.",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/blog",
  },
}

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Lexia Blog",
  url: "https://www.lexiapro.fr/blog",
  description: "Articles and news about voice technology and speech-to-text solutions for enterprises.",
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



