"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LiveWaveform } from "@/components/ui/live-waveform"
import { Matrix, wave, pulse, loader, snake } from "@/components/ui/matrix"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HomePage() {
  const companyLogos = [
    { src: "/logos/logo_CA.webp", alt: "Crédit Agricole" },
    { src: "/logos/logo_CBC.webp", alt: "CBC" },
    { src: "/logos/logo_consortium.webp", alt: "Consortium" },
    { src: "/logos/logo_omnes.webp", alt: "Omnes" },
    { src: "/logos/logo.webp", alt: "Partner" },
    { src: "/logos/Safran_-_logo_2016.webp", alt: "Safran" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-32 lg:py-40" itemScope={true} itemType="https://schema.org/Organization">
          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center gap-0 md:gap-8 lg:gap-16">
            {/* Left Waveform */}
            <div className="hidden md:block opacity-10 pt-4">
              <LiveWaveform
                active={false}
                processing={true}
                height={150}
                barWidth={5}
                barGap={2}
                mode="static"
                fadeEdges={true}
                barColor="gray"
                historySize={150}
              />
            </div>
            
            <div className="flex-1 w-full max-w-4xl text-center px-4 md:px-0">
              <h1 className="mb-6 md:mb-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[-0.02em] leading-[1.1]">
                Reconciling{" "}
                <span className="inline-block bg-gradient-to-r from-orange-500 via-red-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Speech
                </span>
                <span className="block mt-2.5 font-extralight tracking-[-0.025em]">with Enterprise</span>
              </h1>
              <p className="mb-8 md:mb-12 text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground px-4 md:px-0" itemProp="description">
                We are a deeptech company that transforms how enterprises interact with their systems through voice. 
                We build speech-to-text solutions that integrate seamlessly into your workflows, enabling voice-activated 
                CRM systems, automated call transcription, and intelligent meeting analysis.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row mb-12 md:mb-16">
                <Link href="/contact">
                  <Button size="lg" variant="default" className="font-normal">
                    Get Started
                  </Button>
                </Link>
                <Link href="/usecases">
                  <Button size="lg" variant="outline" className="font-normal">
                    Learn More
                  </Button>
                </Link>
              </div>
              {/* Company Logos */}
              {companyLogos.length > 0 && (
                <div className="pt-16 border-t">
                  <p className="mb-8 text-sm text-muted-foreground font-normal">Trusted by leading enterprises</p>
                  <div className="relative overflow-hidden">
                    <div className="flex items-center gap-12 opacity-60 grayscale animate-scroll">
                      {/* Duplicate logos for seamless loop */}
                      {[...companyLogos, ...companyLogos].map((logo, index) => (
                        <Image
                          key={index}
                          src={logo.src}
                          alt={logo.alt}
                          width={120}
                          height={40}
                          className="h-8 w-auto object-contain flex-shrink-0"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Waveform */}
            <div className="hidden md:block opacity-10 pt-4">
              <LiveWaveform
                active={false}
                processing={true}
                height={150}
                barWidth={5}
                barGap={2}
                mode="static"
                fadeEdges={true}
                barColor="gray"
                historySize={150}
              />
            </div>
          </div>
        </section>

        <Separator />

        {/* Use Cases Section */}
        <section id="use-cases" className="container py-24 md:py-32" itemScope={true} itemType="https://schema.org/ItemList">
          <ScrollAnimation>
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
                  Use Cases
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto md:text-lg">
                  Discover how enterprises leverage Lexia's speech technology to transform their operations
                  and drive innovation across their organizations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 *:flex-1 *:flex *:flex-col">
                <ScrollAnimation delay={50}>
                  <Card className="overflow-hidden pt-0 border flex flex-col rounded-xl transition-opacity hover:opacity-90" itemScope={true} itemType="https://schema.org/Service">
                    <CardContent className="px-0 flex-shrink-0">
                      <Image
                        src="/logos/image_illustration1.png"
                        alt="Voice-Activated CRM"
                        width={400}
                        height={225}
                        className="aspect-video w-full object-cover"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="font-normal" itemProp="name">Voice-Activated CRM</CardTitle>
                      <CardDescription itemProp="description">
                        Integrate speech commands into customer relationship management systems,
                        enabling hands-free data entry and retrieval.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
                      <Link href="/usecases">
                        <Button className="font-normal w-full">Learn More</Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="font-normal w-full">Book a Call</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <Card className="overflow-hidden pt-0 border flex flex-col rounded-xl transition-opacity hover:opacity-90" itemScope itemType="https://schema.org/Service">
                    <CardContent className="px-0 flex-shrink-0">
                      <Image
                        src="/logos/image_illustration2.png"
                        alt="Automated Call Transcription"
                        width={400}
                        height={225}
                        className="aspect-video w-full object-cover"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="font-normal" itemProp="name">Automated Call Transcription</CardTitle>
                      <CardDescription itemProp="description">
                        Real-time transcription and analysis of customer service calls,
                        automatically populating enterprise systems with structured data.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
                      <Link href="/usecases">
                        <Button className="font-normal w-full">Learn More</Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="font-normal w-full">Book a Call</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </ScrollAnimation>
                <ScrollAnimation delay={150}>
                  <Card className="overflow-hidden pt-0 border flex flex-col rounded-xl transition-opacity hover:opacity-90" itemScope itemType="https://schema.org/Service">
                    <CardContent className="px-0 flex-shrink-0">
                      <Image
                        src="/logos/image_illustration3.png"
                        alt="Meeting Intelligence"
                        width={400}
                        height={225}
                        className="aspect-video w-full object-cover"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="font-normal" itemProp="name">Meeting Intelligence</CardTitle>
                      <CardDescription itemProp="description">
                        Transform meetings into actionable insights by integrating speech
                        recognition with project management and documentation systems.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
                      <Link href="/usecases">
                        <Button className="font-normal w-full">Learn More</Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="font-normal w-full">Book a Call</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </ScrollAnimation>
              </div>
              <ScrollAnimation delay={200}>
                <div className="mt-12 text-center">
                  <Link href="/usecases">
                    <Button variant="outline" size="lg" className="font-normal">
                      More use cases
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Enterprise Solutions Section */}
        <section id="enterprise-solutions" className="container py-24 md:py-32" itemScope={true} itemType="https://schema.org/Service">
          <ScrollAnimation>
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
                  Enterprise Solutions
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto md:text-lg">
                  Comprehensive speech technology solutions designed for enterprise-scale deployment,
                  security, and compliance requirements.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ScrollAnimation delay={50}>
                  <Card className="border rounded-xl p-6 h-full flex flex-col transition-all hover:shadow-md" itemScope={true} itemType="https://schema.org/Service">
                    <div className="mb-4 flex items-center justify-center h-12">
                      <Matrix
                        rows={5}
                        cols={5}
                        frames={wave}
                        fps={12}
                        autoplay={true}
                        loop={true}
                        size={6}
                        gap={1.5}
                        brightness={0.5}
                      />
                    </div>
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-xl font-light mb-3" itemProp="name">Custom Integration</CardTitle>
                      <CardDescription className="text-sm leading-relaxed" itemProp="description">
                        Tailored speech technology solutions that integrate seamlessly with your existing enterprise infrastructure and workflows.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <Card className="border rounded-xl p-6 h-full flex flex-col transition-all hover:shadow-md" itemScope itemType="https://schema.org/Service">
                    <div className="mb-4 flex items-center justify-center h-12">
                      <Matrix
                        rows={5}
                        cols={5}
                        frames={pulse}
                        fps={10}
                        autoplay={true}
                        loop={true}
                        size={6}
                        gap={1.5}
                        brightness={0.5}
                      />
                    </div>
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-xl font-light mb-3" itemProp="name">API Access</CardTitle>
                      <CardDescription className="text-sm leading-relaxed" itemProp="description">
                        RESTful API access to our speech recognition models, enabling easy integration into your applications and services.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollAnimation>
                <ScrollAnimation delay={150}>
                  <Card className="border rounded-xl p-6 h-full flex flex-col transition-all hover:shadow-md" itemScope itemType="https://schema.org/Service">
                    <div className="mb-4 flex items-center justify-center h-12">
                      <Matrix
                        rows={5}
                        cols={5}
                        frames={loader}
                        fps={8}
                        autoplay={true}
                        loop={true}
                        size={6}
                        gap={1.5}
                        brightness={0.5}
                      />
                    </div>
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-xl font-light mb-3" itemProp="name">Post-Training</CardTitle>
                      <CardDescription className="text-sm leading-relaxed" itemProp="description">
                        Customize pre-trained models through post-training techniques to meet your specific domain and use case requirements.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <Card className="border rounded-xl p-6 h-full flex flex-col transition-all hover:shadow-md" itemScope itemType="https://schema.org/Service">
                    <div className="mb-4 flex items-center justify-center h-12">
                      <Matrix
                        rows={5}
                        cols={5}
                        frames={snake}
                        fps={10}
                        autoplay={true}
                        loop={true}
                        size={6}
                        gap={1.5}
                        brightness={0.5}
                      />
                    </div>
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-xl font-light mb-3" itemProp="name">Enterprise Support</CardTitle>
                      <CardDescription className="text-sm leading-relaxed" itemProp="description">
                        Dedicated support and consulting services to ensure successful deployment and optimization of your speech technology solutions.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="mt-16 text-center">
              <Link href="/contact">
                <Button variant="outline" size="lg" className="font-normal">
                  Book a Call
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Research & Development Section */}
        <section id="research" className="container py-24 md:py-32" itemScope={true} itemType="https://schema.org/ResearchProject">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimation>
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-light tracking-tight md:text-4xl">
                  Research & Development
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl" itemProp="description">
                  In collaboration with the Intelligence Lab of ECE, we develop optimized speech-to-text models 
                  for enterprise environments, creating efficient and scalable solutions that bridge cutting-edge 
                  research and practical applications.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <ScrollAnimation delay={100}>
                <Card className="border-2 rounded-xl overflow-hidden group relative h-full flex flex-col" itemScope={true} itemType="https://schema.org/CreativeWork">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/logos/image_illustration1.png"
                        alt="Optimized Models"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </CardContent>
                  <CardHeader className="relative">
                    <div className="text-xs font-normal text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">
                      Research
                    </div>
                    <CardTitle className="text-xl font-light mb-3" itemProp="name">Optimized Models</CardTitle>
                    <CardDescription className="text-sm leading-relaxed" itemProp="description">
                      Speech-to-text models optimized specifically for enterprise environments, 
                      balancing accuracy, latency, and computational efficiency.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={150}>
                <Card className="border-2 rounded-xl overflow-hidden group relative h-full flex flex-col" itemScope={true} itemType="https://schema.org/CreativeWork">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/logos/image_illustration2.png"
                        alt="Post-Training"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </CardContent>
                  <CardHeader className="relative">
                    <div className="text-xs font-normal text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-2">
                      Development
                    </div>
                    <CardTitle className="text-xl font-light mb-3" itemProp="name">Post-Training</CardTitle>
                    <CardDescription className="text-sm leading-relaxed" itemProp="description">
                      Custom pipeline development through post-training techniques, 
                      enabling models to adapt to specific enterprise domains and vocabularies.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <Card className="border-2 rounded-xl overflow-hidden group relative h-full flex flex-col" itemScope={true} itemType="https://schema.org/CreativeWork">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/logos/image_illustration3.png"
                        alt="Hugging Face"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </CardContent>
                  <CardHeader className="relative">
                    <div className="text-xs font-normal text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                      Open Source
                    </div>
                    <CardTitle className="text-xl font-light mb-3" itemProp="name">Hugging Face</CardTitle>
                    <CardDescription className="text-sm leading-relaxed" itemProp="description">
                      Our models are available on Hugging Face, providing easy access 
                      to optimized speech-to-text solutions for the developer community.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={250}>
              <div className="mt-12 text-center">
                <Link href="/research#research-papers">
                  <Button variant="outline" size="lg" className="font-normal">
                    View Papers
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <section id="contact" className="container py-16 md:py-20" itemScope={true} itemType="https://schema.org/ContactPage">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl">
              <div className="text-center space-y-6">
                <div className="mb-6 flex items-center justify-center opacity-15">
                  <LiveWaveform
                    active={true}
                    processing={true}
                    height={60}
                    barWidth={2}
                    barGap={2}
                    mode="static"
                    fadeEdges={true}
                    barColor="gray"
                    historySize={100}
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight" itemProp="name">
                  Get in Touch
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground max-w-xl mx-auto" itemProp="description">
                  Interested in learning more about our speech technology solutions?
                  Let's start a conversation about how we can help your enterprise.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <Link href="/contact">
                    <Button size="default" variant="default" className="font-normal group/btn">
                      Book a Call
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="default" variant="outline" className="font-normal">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Partners Section */}
        <section id="partners" className="container py-16 md:py-24" itemScope={true} itemType="https://schema.org/Organization">
          <ScrollAnimation>
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-12 text-2xl font-light tracking-tight md:text-3xl text-center">
                They are behind us
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
                <ScrollAnimation delay={50}>
                  <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src="/logos/BPI.png"
                      alt="BPI France"
                      width={150}
                      height={80}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src="/logos/LMT.jpg"
                      alt="LMT"
                      width={150}
                      height={80}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={150}>
                  <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src="/logos/logo-french-tech.png"
                      alt="French Tech"
                      width={150}
                      height={80}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src="/logos/logo_IA_lab.webp"
                      alt="Intelligence Lab of ECE"
                      width={150}
                      height={80}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </main>
      <Footer />
    </div>
  )
}

