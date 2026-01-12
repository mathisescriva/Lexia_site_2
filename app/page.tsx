import type { Metadata } from "next"
import { HomePage } from "./HomePage"

export const metadata: Metadata = {
  title: "Lexia - Speech Technology for Enterprise",
  description: "Lexia is a deep tech company specializing in speech technology and enterprise solutions. We develop optimized speech-to-text models for enterprise environments, offering voice-activated CRM, automated call transcription, and meeting intelligence solutions.",
  keywords: "speech technology, speech-to-text, enterprise solutions, voice recognition, Gilbert API, voice-activated CRM, automated transcription, meeting intelligence, Hugging Face models, AI Lab ECE",
  openGraph: {
    title: "Lexia - Speech Technology for Enterprise",
    description: "Reconciling speech with enterprise systems. Deep tech company specializing in speech-to-text models and voice-activated solutions.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr",
  },
}

export default function Home() {
  return <HomePage />
}
