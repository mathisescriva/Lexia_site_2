import type { Metadata } from "next"
import { BlogPageContent } from "./BlogPageContent"

export const metadata: Metadata = {
  title: "Blog - Speech Technology & Enterprise Solutions | Lexia",
  description: "Insights, updates, and stories about speech technology, enterprise solutions, and innovation. Learn about speech-to-text models, voice-activated CRM, automated transcription, meeting intelligence, and AI Lab ECE research.",
  keywords: "speech technology blog, speech-to-text articles, enterprise voice solutions, AI Lab ECE research, voice recognition, automated transcription, meeting intelligence, Hugging Face models, Gilbert API",
  openGraph: {
    title: "Blog - Speech Technology & Enterprise Solutions | Lexia",
    description: "Insights, updates, and stories about speech technology, enterprise solutions, and innovation.",
    type: "website",
  },
}

export default function BlogPage() {
  return <BlogPageContent />
}

