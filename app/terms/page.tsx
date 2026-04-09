import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "Conditions générales d'utilisation de Lexia. Termes et conditions d'utilisation de notre site web et de nos services de technologie vocale pour l'entreprise.",
  keywords: ["conditions générales", "CGU", "termes de service", "Lexia", "utilisation"],
  openGraph: {
    title: "Conditions Générales d'Utilisation | Lexia",
    description: "Conditions d'utilisation du site web et des services Lexia.",
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
                      <h2 className="text-2xl font-light mb-4">1. Informations Légales</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        Le site web <Link href="https://www.lexiapro.fr" className="underline hover:opacity-60 transition-opacity">www.lexiapro.fr</Link> est édité par :
                      </p>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        <strong>LEXIA FRANCE</strong><br />
                        Société par actions simplifiée au capital social de 500 €<br />
                        Siège social : MAISON DE LA TECHNOPOLE 6 RUE LEONARD DE VINCI 53810 CHANGE<br />
                        Immatriculée au Registre du Commerce et des Sociétés de Laval sous le numéro 928 955 426<br />
                        SIRET : 92895542600020<br />
                        Représentée par M. Mathis Escriva agissant et ayant les pouvoirs nécessaires en tant que président
                      </p>
                      <p className="text-base leading-relaxed text-foreground">
                        Email : <a href="mailto:contacts@lexiapro.fr" className="underline hover:opacity-60 transition-opacity">contacts@lexiapro.fr</a>
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">2. Objet</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les conditions d'accès et d'utilisation du site web <Link href="https://www.lexiapro.fr" className="underline hover:opacity-60 transition-opacity">www.lexiapro.fr</Link> ainsi que les services proposés par LEXIA FRANCE.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">3. Acceptation des Conditions</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        L'accès et l'utilisation du site impliquent l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser notre site web.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">4. Accès au Site</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        L'accès au site est libre et gratuit. LEXIA FRANCE se réserve le droit de :
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Modifier, suspendre ou interrompre l'accès au site à tout moment</li>
                        <li>Restreindre l'accès à certaines parties du site</li>
                        <li>Modifier ou supprimer tout contenu du site</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">5. Utilisation du Site</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        Vous vous engagez à utiliser le site de manière conforme aux présentes CGU et à la législation en vigueur. Il est notamment interdit de :
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Utiliser le site à des fins illégales ou frauduleuses</li>
                        <li>Porter atteinte aux droits de propriété intellectuelle de LEXIA FRANCE</li>
                        <li>Perturber le fonctionnement du site ou des serveurs</li>
                        <li>Tenter d'accéder de manière non autorisée à des zones restreintes du site</li>
                        <li>Transmettre des virus, logiciels malveillants ou tout code nuisible</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">6. Propriété Intellectuelle</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        L'ensemble du contenu du site (textes, images, logos, graphismes, etc.) est la propriété exclusive de LEXIA FRANCE ou de ses partenaires et est protégé par le droit d'auteur et les lois sur la propriété intellectuelle. Toute reproduction, représentation, modification ou adaptation sans autorisation préalable est strictement interdite.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">7. Services</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        LEXIA FRANCE propose des services de technologie vocale et de reconnaissance vocale pour les entreprises. Les caractéristiques, prix et conditions d'utilisation des services sont décrits sur le site et peuvent être modifiés à tout moment sans préavis.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">8. Protection des Données Personnelles</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Le traitement de vos données personnelles est décrit dans notre <Link href="/privacy" className="underline hover:opacity-60 transition-opacity">Politique de Confidentialité</Link>, qui fait partie intégrante des présentes CGU.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">9. Limitation de Responsabilité</h2>
                      <p className="text-base leading-relaxed text-foreground mb-4">
                        LEXIA FRANCE s'efforce d'assurer l'exactitude et la mise à jour des informations sur le site, mais ne peut garantir leur exhaustivité ou leur exactitude. LEXIA FRANCE ne pourra être tenue responsable de :
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-foreground">
                        <li>Dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le site</li>
                        <li>Interruptions, erreurs ou bugs du site</li>
                        <li>Pertes de données ou autres dommages informatiques</li>
                        <li>Utilisation frauduleuse ou non autorisée de vos identifiants</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">10. Liens Externes</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Le site peut contenir des liens vers des sites externes. LEXIA FRANCE n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">11. Modification des CGU</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        LEXIA FRANCE se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il est recommandé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">12. Droit Applicable et Juridiction</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Les présentes CGU sont régies par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light mb-4">13. Contact</h2>
                      <p className="text-base leading-relaxed text-foreground">
                        Pour toute question concernant ces conditions générales d'utilisation, vous pouvez nous contacter à :
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



