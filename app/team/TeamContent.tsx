"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import Image from "next/image"
import Link from "next/link"

export function TeamContent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation>
                <div>
                  <h1 className="mb-6 text-4xl font-light tracking-[-0.02em] md:text-5xl lg:text-6xl leading-[1.1]">
                    We are{" "}
                    <span className="block mt-2 font-extralight tracking-[-0.015em]">a Team</span>
                  </h1>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    A team of researchers, engineers, and innovators based in Paris, 
                    dedicated to developing sovereign and secure speech technology solutions 
                    for enterprise environments.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="px-4 py-2 rounded-full border text-sm text-muted-foreground">Paris, France</div>
                    <div className="px-4 py-2 rounded-full border text-sm text-muted-foreground">Sovereign Solutions</div>
                    <div className="px-4 py-2 rounded-full border text-sm text-muted-foreground">Enterprise Focus</div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.youtube.com/@Lexia-pro" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="font-normal">YouTube</Button>
                    </a>
                    <a href="https://www.linkedin.com/company/lexiapro" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="font-normal">LinkedIn</Button>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={100}>
                <figure className="m-0" itemScope itemType="https://schema.org/ImageObject">
                  <Card className="border-2 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative w-full aspect-[4/3]">
                        <Image src="/logos/lexia-equipe-team-paris.jpg" alt="Équipe Lexia - startup deeptech française de technologie vocale basée à Paris, fondée par Mathis Escriva et Martial Roberge" fill className="object-cover transition-transform duration-300 group-hover:scale-105" title="Lexia - Équipe fondatrice de la startup de technologie vocale à Paris" itemProp="contentUrl" priority />
                      </div>
                    </CardContent>
                  </Card>
                  <figcaption className="mt-3 text-xs text-muted-foreground text-center" itemProp="caption">
                    L&apos;équipe Lexia — startup deeptech de technologie vocale, Paris
                  </figcaption>
                  <meta itemProp="name" content="Équipe Lexia - technologie vocale Paris" />
                  <meta itemProp="description" content="Photo de l'équipe fondatrice de Lexia, startup deeptech française spécialisée en technologie vocale et speech-to-text pour l'entreprise, basée à Paris." />
                </figure>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <Separator />

        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimation>
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-light tracking-tight md:text-4xl">The Team</h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
                  A passionate team building the future of enterprise speech technology.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {[
                { name: "Mathis Escriva", role: "Co-Founder", src: "/logos/mathis.jpg" },
                { name: "Martial Roberge", role: "Co-Founder", src: "/logos/martial.jpg" },
                { name: "Hugo Fouan", role: "CTO", src: "/logos/hugo.jpg" },
                { name: "Jeanne Lesca", role: "Head of Marketing & Communication", src: "/logos/jeanne.jpg" },
                { name: "Louis Mouchon", role: "Fullstack Developer & MLOps", src: "/logos/mouchon.jpg" },
              ].map((member, i) => (
                <ScrollAnimation key={i} delay={i * 80}>
                  <div className="group text-center">
                    <div className="relative w-full rounded-xl overflow-hidden mb-4 border">
                      <Image src={member.src} alt={member.name} width={600} height={800} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" loading="eager" />
                    </div>
                    <h3 className="text-sm font-medium">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimation>
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-light tracking-tight md:text-4xl">Our Story</h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
                  Lexia was born from a vision to bridge the gap between cutting-edge research 
                  and practical enterprise applications.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation delay={100}>
                <Card className="border-2 rounded-xl overflow-hidden group relative h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/logos/service_tech.jpeg" alt="From Service to Technology" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </CardContent>
                  <CardHeader className="relative">
                    <div className="text-xs font-normal text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Our Journey</div>
                    <div className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center text-lg font-light mb-4">01</div>
                    <CardTitle className="text-xl font-light mb-3">From Service to Technology</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      Originally focused on service delivery, we recognized the need for more 
                      sophisticated and scalable solutions in speech technology. This realization 
                      led us to pivot towards developing our own research-driven technology platform.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={150}>
                <Card className="border-2 rounded-xl overflow-hidden group relative h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image src="/logos/logo_lexia.png" alt="Today's Mission" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </CardContent>
                  <CardHeader className="relative">
                    <div className="text-xs font-normal text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">Our Mission</div>
                    <div className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center text-lg font-light mb-4">02</div>
                    <CardTitle className="text-xl font-light mb-3">Today&apos;s Mission</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      Today, Lexia combines deep technical expertise with a commitment to creating 
                      sovereign and secure solutions that meet the highest standards of enterprise 
                      requirements. Based in Paris, we work closely with leading institutions and 
                      enterprises to deliver innovative speech technology solutions.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <Separator />

        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimation>
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">Our Values</h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide our work and shape our solutions.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { num: "01", title: "Sovereignty", desc: "All our solutions are designed with sovereignty in mind, ensuring that enterprises maintain full control over their data and technology infrastructure." },
                { num: "02", title: "Security", desc: "Security is at the core of everything we build. We implement rigorous security measures to protect sensitive enterprise data and ensure compliance with the highest standards." },
                { num: "03", title: "Innovation", desc: "We push the boundaries of speech technology through continuous research and development, always seeking to deliver cutting-edge solutions that address real-world enterprise challenges." },
                { num: "04", title: "Collaboration", desc: "We believe in the power of collaboration, working closely with our partners, clients, and the research community to create solutions that truly make a difference." },
              ].map((value, i) => (
                <ScrollAnimation key={i} delay={100 + i * 50}>
                  <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md h-full flex flex-col">
                    <CardHeader className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center text-lg font-light flex-shrink-0">{value.num}</div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-light mb-3">{value.title}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed">{value.desc}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation>
                <div>
                  <div className="text-xs font-normal text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-4">Proven Excellence</div>
                  <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
                    Forged in <span className="font-extralight">Competition</span>
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground mb-6">
                    Our team is composed of exceptional profiles who have consistently 
                    proven themselves in the most prestigious global competitions. From 
                    international hackathons to AI challenges, we continuously push 
                    our limits and benchmark our skills against the best in the world.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground mb-8">
                    We believe that excellence is not just claimed — it is demonstrated. 
                    That is why we actively participate in top-tier hackathons and 
                    competitions worldwide, earning recognition and validating 
                    our technical expertise on the global stage.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-full border text-sm text-muted-foreground">International Hackathons</div>
                    <div className="px-4 py-2 rounded-full border text-sm text-muted-foreground">AI Challenges</div>
                    <div className="px-4 py-2 rounded-full border text-sm text-muted-foreground">Top-Tier Profiles</div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <Card className="border-2 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-[4/3]">
                      <Image src="/logos/hackathon_stockholm.jpeg" alt="Lexia team at Luma Hackathon in Stockholm" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-sm font-medium text-white drop-shadow-lg">Luma Hackathon — Stockholm</p>
                        <p className="text-xs text-white/80 drop-shadow-lg mt-1">Competing among the best AI teams in Europe</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <Separator />

        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation>
                <div>
                  <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">Based in Paris</h2>
                  <p className="text-base leading-relaxed text-muted-foreground mb-8">
                    Located in the heart of Paris, we are part of a vibrant ecosystem of 
                    innovation, research, and enterprise technology. Our proximity to leading 
                    academic institutions and technology companies enables us to stay at the 
                    forefront of speech technology development.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <Card className="border-2 rounded-xl p-8">
                  <h3 className="text-xl font-light mb-4">Join Us</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                    Interested in joining our team? We&apos;re always looking for talented individuals 
                    who share our passion for speech technology and enterprise innovation.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/careers">
                      <Button size="lg" variant="default" className="font-normal w-full">View Open Positions</Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="font-normal w-full">Contact Us</Button>
                    </Link>
                  </div>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
