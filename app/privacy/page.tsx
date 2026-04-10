import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Lexia's privacy policy. Learn how we collect, use, and protect your personal data. GDPR compliant, European data hosting.",
  keywords: ["privacy policy", "GDPR", "data protection", "Lexia", "personal data"],
  openGraph: {
    title: "Privacy Policy | Lexia",
    description: "Lexia's privacy policy - How we protect your personal data.",
    type: "website",
    url: "https://www.lexiapro.fr/privacy",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-20">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
                Privacy Policy
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Content */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollAnimation>
              <Card className="border-2 rounded-xl p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-light mb-4">1. Introduction</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        LEXIA FRANCE, a simplified joint-stock company (société par actions simplifiée) with a share capital of €500, whose registered office is located at MAISON DE LA TECHNOPOLE 6 RUE LEONARD DE VINCI 53810 CHANGE, registered with the Laval Trade and Companies Register under number 928 955 426, represented by Mr. Mathis Escriva acting and having the necessary powers as president. SIRET: 92895542600020 (hereinafter "Lexia", "we", "our") is committed to protecting your privacy and personal data.
                      </p>
                      <p className="text-base leading-relaxed text-foreground">
                        This privacy policy describes how we collect, use, store, and protect your personal information when you use our website <Link href="https://www.lexiapro.fr" className="underline hover:opacity-60 transition-opacity">www.lexiapro.fr</Link> or our services.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">2. Data Controller</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        The data controller for personal data is LEXIA FRANCE, whose contact details are:
                      </p>
                      <ul className="list-disc pl-6 mt-4 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Address: MAISON DE LA TECHNOPOLE 6 RUE LEONARD DE VINCI 53810 CHANGE</li>
                        <li>Email: <a href="mailto:contacts@lexiapro.fr" className="underline hover:opacity-60 transition-opacity">contacts@lexiapro.fr</a></li>
                        <li>Website: <Link href="https://www.lexiapro.fr" className="underline hover:opacity-60 transition-opacity">www.lexiapro.fr</Link></li>
                        <li>SIRET: 92895542600020</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">3. Data Collected</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        We collect the following personal data:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li><strong>Identification data:</strong> last name, first name, email address</li>
                        <li><strong>Contact data:</strong> phone number, postal address</li>
                        <li><strong>Technical data:</strong> IP address, browser type, pages visited</li>
                        <li><strong>Communication data:</strong> messages, contact requests, form contents</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">4. Purposes of Processing</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        Your personal data is processed for the following purposes:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Responding to your contact and information requests</li>
                        <li>Providing our voice technology services</li>
                        <li>Improving our website and services</li>
                        <li>Complying with our legal and regulatory obligations</li>
                        <li>Managing the customer relationship and technical support</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">5. Legal Basis for Processing</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        The processing of your personal data is based on your consent, the performance of a contract, compliance with a legal obligation, or our legitimate interest, in accordance with the General Data Protection Regulation (GDPR).
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">6. Data Retention</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Your personal data is retained for the duration necessary to fulfill the purposes for which it was collected, and in accordance with applicable legal obligations.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">7. Your Rights</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        In accordance with the GDPR, you have the following rights:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li><strong>Right of access:</strong> obtain a copy of your personal data</li>
                        <li><strong>Right to rectification:</strong> correct inaccurate personal data</li>
                        <li><strong>Right to erasure:</strong> request the deletion of your data</li>
                        <li><strong>Right to restriction:</strong> request the restriction of processing</li>
                        <li><strong>Right to data portability:</strong> retrieve your data in a structured format</li>
                        <li><strong>Right to object:</strong> object to the processing of your data</li>
                      </ul>
                      <p className="text-base leading-relaxed text-foreground mt-4">
                        To exercise these rights, you can contact us at <a href="mailto:contacts@lexiapro.fr" className="underline hover:opacity-60 transition-opacity">contacts@lexiapro.fr</a>.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">8. Data Security</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, destruction, or alteration.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">9. Cookies</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Our website uses cookies to improve your browsing experience. You can configure your browser to reject cookies, but this may affect certain website features.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">10. Policy Changes</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        We reserve the right to modify this privacy policy at any time. Any changes will be published on this page with an updated last modification date.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">11. Contact</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        For any questions regarding this privacy policy, you can contact us at:
                      </p>
                      <ul className="list-none pl-0 mt-4 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Email: <a href="mailto:contacts@lexiapro.fr" className="underline hover:opacity-60 transition-opacity">contacts@lexiapro.fr</a></li>
                        <li>Address: MAISON DE LA TECHNOPOLE 6 RUE LEONARD DE VINCI 53810 CHANGE</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}



