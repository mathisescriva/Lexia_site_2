import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/Providers"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lexiapro.fr"),
  title: {
    default: "Lexia - Technologie Vocale pour l'Entreprise | Speech-to-Text Souverain",
    template: "%s | Lexia",
  },
  description: "Lexia est une entreprise deeptech française spécialisée dans la technologie vocale pour l'entreprise. Solutions speech-to-text souveraines, transcription automatique, CRM vocal et intelligence de réunion. Déploiement on-premise, RGPD compliant.",
  keywords: [
    "technologie vocale",
    "speech-to-text",
    "reconnaissance vocale",
    "transcription automatique",
    "IA vocale entreprise",
    "CRM vocal",
    "intelligence de réunion",
    "speech technology",
    "enterprise voice solutions",
    "souveraineté numérique",
    "RGPD",
    "on-premise",
    "API vocale",
    "Lexia",
    "deeptech française",
    "Gilbert API",
    "Hugging Face",
    "AI Lab ECE",
  ],
  authors: [{ name: "Lexia", url: "https://www.lexiapro.fr" }],
  creator: "Lexia",
  publisher: "Lexia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.lexiapro.fr",
    siteName: "Lexia",
    title: "Lexia - Technologie Vocale pour l'Entreprise",
    description: "Solutions speech-to-text souveraines pour l'entreprise. Transcription automatique, CRM vocal, intelligence de réunion. Déploiement on-premise, RGPD compliant.",
    images: [
      {
        url: "/logos/logo_lexia.webp",
        width: 1200,
        height: 630,
        alt: "Lexia - Technologie Vocale pour l'Entreprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexia - Technologie Vocale pour l'Entreprise",
    description: "Solutions speech-to-text souveraines pour l'entreprise. Transcription automatique, CRM vocal, intelligence de réunion.",
    images: ["/logos/logo_lexia.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.lexiapro.fr",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
