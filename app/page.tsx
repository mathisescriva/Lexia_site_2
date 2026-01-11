import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LiveWaveform } from "@/components/ui/live-waveform"
import Image from "next/image"

export default function Home() {
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
        <section className="container py-32 md:py-40">
          <div className="relative flex items-start justify-center gap-8 md:gap-16">
            {/* Left Waveform */}
            <div className="hidden md:block opacity-20 pt-4">
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
            
            {/* Center Content */}
            <div className="mx-auto max-w-3xl text-center flex-1">
              <h1 className="mb-8 text-5xl font-light tracking-[-0.03em] leading-[1.1] md:text-6xl lg:text-7xl">
                Reconciling Speech
                <span className="block mt-2.5 font-extralight tracking-[-0.025em]">with Enterprise</span>
              </h1>
              <p className="mb-12 text-lg leading-relaxed text-muted-foreground md:text-xl">
                We are a deep tech company reconciling speech with enterprise systems.
                Bridging the gap between cutting-edge research and practical applications.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
                <Button size="lg" variant="default" className="font-normal">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="font-normal">
                  Learn More
                </Button>
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
            <div className="hidden md:block opacity-20 pt-4">
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

        {/* About Section */}
        <section id="about" className="container py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
              About Lexia
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Lexia is a pioneering deep tech company at the forefront of speech technology.
              We combine cutting-edge research with enterprise-grade solutions, enabling
              seamless integration of speech capabilities into business systems.
            </p>
          </div>
        </section>

        <Separator />

        {/* Research Section */}
        <section id="research" className="container py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
              Research & Development
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our research team pushes the boundaries of speech technology, developing
              innovative solutions that address real-world challenges in enterprise environments.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-xl font-normal">Advanced Algorithms</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  State-of-the-art speech processing algorithms and machine learning models
                  designed for enterprise-scale applications.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-xl font-normal">Enterprise Integration</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Research focused on seamless integration with existing enterprise
                  infrastructures and workflows.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Use Cases Section */}
        <section id="usecases" className="container py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
              Use Cases
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              How enterprises leverage Lexia's speech technology to transform their operations.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Voice-Activated CRM</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Integrate speech commands into customer relationship management systems,
                  enabling hands-free data entry and retrieval.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Automated Call Transcription</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Real-time transcription and analysis of customer service calls,
                  automatically populating enterprise systems with structured data.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Meeting Intelligence</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Transform meetings into actionable insights by integrating speech
                  recognition with project management and documentation systems.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Voice-Controlled ERP</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Enable voice commands for enterprise resource planning systems,
                  streamlining inventory management and reporting workflows.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Compliance Documentation</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Automatically generate compliance documentation from spoken interactions,
                  ensuring regulatory requirements are met in real-time.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Multilingual Support</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Process speech across multiple languages and dialects, reconciling
                  voice data with enterprise systems regardless of language barriers.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Solutions Section */}
        <section id="solutions" className="container py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
              Enterprise Solutions
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We reconcile speech technology with enterprise systems, creating powerful
              solutions that transform how businesses interact with voice-enabled applications.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Speech-to-Enterprise Integration</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Seamlessly connect speech interfaces with your existing enterprise systems,
                  enabling voice-driven workflows and applications.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Custom Speech Solutions</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Tailored speech technology solutions designed to meet your specific
                  business requirements and industry needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Research Partnerships</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Collaborate with our research team to develop cutting-edge speech
                  technology solutions for your organization.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="mb-3 text-lg font-normal">Enterprise Support</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Comprehensive support and maintenance services to ensure your speech
                  technology infrastructure runs smoothly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <section id="contact" className="container py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
              Get in Touch
            </h2>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Interested in learning more about our speech technology solutions?
              Let's start a conversation about how we can help your enterprise.
            </p>
            <Button size="lg" variant="default" className="font-normal">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}