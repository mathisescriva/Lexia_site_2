import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Lexia",
  description: "Lexia's Privacy Policy - How we collect, use, and protect your personal data.",
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
                        LEXIA FRANCE, société par actions simplifiée au capital social de 500 €, dont le siège social est situé au MAISON DE LA TECHNOPOLE 6 RUE LEONARD DE VINCI 53810 CHANGE, immatriculée au Registre du Commerce et des Sociétés de Laval sous le numéro 928 955 426, représentée par M. Mathis Escriva agissant et ayant les pouvoirs nécessaires en tant que président. SIRET : 92895542600020 (ci-après "Lexia", "nous", "notre") s'engage à protéger votre vie privée et vos données personnelles.
                      </p>
                      <p className="text-base leading-relaxed text-foreground">
                        Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez notre site web <Link href="https://www.lexiapro.fr" className="underline hover:opacity-60 transition-opacity">www.lexiapro.fr</Link> ou nos services.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">2. Responsable du Traitement</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Le responsable du traitement des données personnelles est LEXIA FRANCE, dont les coordonnées sont :
                      </p>
                      <ul className="list-disc pl-6 mt-4 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Adresse : MAISON DE LA TECHNOPOLE 6 RUE LEONARD DE VINCI 53810 CHANGE</li>
                        <li>Email : <a href="mailto:contacts@lexiapro.fr" className="underline hover:opacity-60 transition-opacity">contacts@lexiapro.fr</a></li>
                        <li>Site web : <Link href="https://www.lexiapro.fr" className="underline hover:opacity-60 transition-opacity">www.lexiapro.fr</Link></li>
                        <li>SIRET : 92895542600020</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">3. Données Collectées</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        Nous collectons les données personnelles suivantes :
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li><strong>Données d'identification :</strong> nom, prénom, adresse email</li>
                        <li><strong>Données de contact :</strong> numéro de téléphone, adresse postale</li>
                        <li><strong>Données techniques :</strong> adresse IP, type de navigateur, pages visitées</li>
                        <li><strong>Données de communication :</strong> messages, demandes de contact, contenus de formulaires</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">4. Finalités du Traitement</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        Vos données personnelles sont traitées pour les finalités suivantes :
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Répondre à vos demandes de contact et de renseignements</li>
                        <li>Fournir nos services de technologie vocale</li>
                        <li>Améliorer notre site web et nos services</li>
                        <li>Respecter nos obligations légales et réglementaires</li>
                        <li>Gérer la relation client et le support technique</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">5. Base Légale du Traitement</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Le traitement de vos données personnelles est basé sur votre consentement, l'exécution d'un contrat, le respect d'une obligation légale ou notre intérêt légitime, conformément au Règlement Général sur la Protection des Données (RGPD).
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">6. Conservation des Données</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales applicables.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">7. Vos Droits</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        Conformément au RGPD, vous disposez des droits suivants :
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                        <li><strong>Droit de rectification :</strong> corriger vos données personnelles inexactes</li>
                        <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                        <li><strong>Droit à la limitation :</strong> demander la limitation du traitement</li>
                        <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                        <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                      </ul>
                      <p className="text-base leading-relaxed text-foreground mt-4">
                        Pour exercer ces droits, vous pouvez nous contacter à l'adresse <a href="mailto:contacts@lexiapro.fr" className="underline hover:opacity-60 transition-opacity">contacts@lexiapro.fr</a>.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">8. Sécurité des Données</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou altération.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">9. Cookies</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Notre site web utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">10. Modification de la Politique</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une mise à jour de la date de dernière modification.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">11. Contact</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à :
                      </p>
                      <ul className="list-none pl-0 mt-4 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Email : <a href="mailto:contacts@lexiapro.fr" className="underline hover:opacity-60 transition-opacity">contacts@lexiapro.fr</a></li>
                        <li>Adresse : MAISON DE LA TECHNOPOLE 6 RUE LEONARD DE VINCI 53810 CHANGE</li>
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



