import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Lexia. Terms and conditions of use for our website and enterprise voice technology services.",
  keywords: ["terms of service", "TOS", "terms and conditions", "Lexia", "usage"],
  openGraph: {
    title: "Terms of Service | Lexia",
    description: "Terms of use for the Lexia website and services.",
    type: "website",
    url: "https://www.lexiapro.fr/terms",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-20">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
                Terms of Service
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
                      <h2 className="text-2xl font-light mb-4">1. Legal Information</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        The website <Link href="https://www.lexiapro.fr" className="underline hover:opacity-60 transition-opacity">www.lexiapro.fr</Link> is published by:
                      </p>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        <strong>LEXIA FRANCE</strong><br />
                        Simplified joint-stock company (SAS) with a share capital of €500<br />
                        Registered office: MAISON DE LA TECHNOPOLE 6 RUE LEONARD DE VINCI 53810 CHANGE<br />
                        Registered with the Laval Trade and Companies Register under number 928 955 426<br />
                        SIRET: 92895542600020<br />
                        Represented by Mr. Mathis Escriva, acting and duly authorized as President
                      </p>
                      <p className="text-base leading-relaxed text-foreground">
                        Email: <a href="mailto:contacts@lexiapro.fr" className="underline hover:opacity-60 transition-opacity">contacts@lexiapro.fr</a>
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">2. Purpose</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        The purpose of these Terms of Service (TOS) is to define the conditions of access to and use of the website <Link href="https://www.lexiapro.fr" className="underline hover:opacity-60 transition-opacity">www.lexiapro.fr</Link> as well as the services offered by LEXIA FRANCE.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">3. Acceptance of Terms</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Accessing and using the website implies full and complete acceptance of these Terms of Service. If you do not accept these terms, we ask that you refrain from using our website.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">4. Access to the Website</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        Access to the website is free of charge. LEXIA FRANCE reserves the right to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Modify, suspend, or discontinue access to the website at any time</li>
                        <li>Restrict access to certain parts of the website</li>
                        <li>Modify or remove any content from the website</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">5. Use of the Website</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        You agree to use the website in accordance with these Terms of Service and applicable law. In particular, it is prohibited to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Use the website for illegal or fraudulent purposes</li>
                        <li>Infringe upon the intellectual property rights of LEXIA FRANCE</li>
                        <li>Disrupt the operation of the website or its servers</li>
                        <li>Attempt unauthorized access to restricted areas of the website</li>
                        <li>Transmit viruses, malware, or any harmful code</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">6. Intellectual Property</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        All content on the website (text, images, logos, graphics, etc.) is the exclusive property of LEXIA FRANCE or its partners and is protected by copyright and intellectual property laws. Any reproduction, representation, modification, or adaptation without prior authorization is strictly prohibited.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">7. Services</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        LEXIA FRANCE provides voice technology and speech recognition services for businesses. The features, pricing, and terms of use for these services are described on the website and may be modified at any time without prior notice.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">8. Personal Data Protection</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        The processing of your personal data is described in our <Link href="/privacy" className="underline hover:opacity-60 transition-opacity">Privacy Policy</Link>, which forms an integral part of these Terms of Service.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">9. Limitation of Liability</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        LEXIA FRANCE endeavors to ensure the accuracy and currency of the information on the website but cannot guarantee its completeness or accuracy. LEXIA FRANCE shall not be held liable for:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Direct or indirect damages resulting from the use of, or inability to use, the website</li>
                        <li>Interruptions, errors, or bugs on the website</li>
                        <li>Loss of data or other computer-related damages</li>
                        <li>Fraudulent or unauthorized use of your credentials</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">10. External Links</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        The website may contain links to external websites. LEXIA FRANCE has no control over these websites and disclaims any liability for their content or privacy policies.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">11. Amendments to the Terms</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        LEXIA FRANCE reserves the right to modify these Terms of Service at any time. Amendments take effect upon publication on the website. We recommend that you review this page regularly to stay informed of any changes.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">12. Governing Law and Jurisdiction</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        These Terms of Service are governed by French law. In the event of a dispute, and after an attempt at amicable resolution, the French courts shall have exclusive jurisdiction.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">13. Contact</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        For any questions regarding these Terms of Service, you may contact us at:
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



