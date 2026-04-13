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
    default: "Lexia - Technologie Vocale Souveraine pour l'Entreprise",
    template: "%s | Lexia",
  },
  description: "Lexia is a French deeptech company specializing in enterprise voice technology. Sovereign speech-to-text solutions, automatic transcription, voice CRM, and meeting intelligence. On-premise deployment, GDPR compliant.",
  keywords: [
    "voice technology",
    "speech-to-text",
    "voice recognition",
    "automatic transcription",
    "enterprise voice AI",
    "voice CRM",
    "meeting intelligence",
    "speech technology",
    "enterprise voice solutions",
    "digital sovereignty",
    "GDPR",
    "on-premise",
    "voice API",
    "Lexia",
    "French deeptech",
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
    locale: "en_US",
    url: "https://www.lexiapro.fr",
    siteName: "Lexia",
    title: "Lexia - Enterprise Voice Technology",
    description: "Sovereign speech-to-text solutions for enterprises. Automatic transcription, voice CRM, meeting intelligence. On-premise deployment, GDPR compliant.",
    images: [
      {
        url: "/logos/logo_lexia.webp",
        width: 1200,
        height: 630,
        alt: "Lexia - Enterprise Voice Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexia - Enterprise Voice Technology",
    description: "Sovereign speech-to-text solutions for enterprises. Automatic transcription, voice CRM, meeting intelligence.",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
