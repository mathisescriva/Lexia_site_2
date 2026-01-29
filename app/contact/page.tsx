"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { LiveWaveform } from "@/components/ui/live-waveform"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const companyLogos = [
  { src: "/logos/logo_CA.webp", alt: "Crédit Agricole" },
  { src: "/logos/logo_CBC.webp", alt: "CBC" },
  { src: "/logos/logo_consortium.webp", alt: "Consortium" },
  { src: "/logos/logo_omnes.webp", alt: "Omnes" },
  { src: "/logos/logo.webp", alt: "Partner" },
  { src: "/logos/Safran_-_logo_2016.webp", alt: "Safran" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
    source: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent("Contact from Lexia Website")
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nProject Budget: ${formData.budget}\nHow did you find us: ${formData.source}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:contact@lexiapro.fr?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Image */}
        <section className="container py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <ScrollAnimation>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex-1 max-w-2xl">
                  <div className="mb-6 opacity-15">
                    <LiveWaveform
                      active={false}
                      processing={true}
                      height={80}
                      barWidth={5}
                      barGap={2}
                      mode="static"
                      fadeEdges={true}
                      barColor="gray"
                      historySize={150}
                    />
                  </div>
                  <h2 className="mb-4 text-2xl md:text-3xl font-light tracking-tight">
                    Transform Your Enterprise with Speech Technology
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    Ready to transform your enterprise with cutting-edge speech technology? 
                    Let's discuss how Lexia can help you integrate voice solutions into your workflow.
                  </p>
                </div>
                <div className="relative w-full md:w-[500px] md:flex-shrink-0 aspect-[4/3] rounded-xl overflow-hidden border border-foreground/10">
                  <Image
                    src="/logos/service_tech.jpeg"
                    alt="Lexia Service Technology"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <Separator />

        {/* Get in Touch Section */}
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Panel - Informational Content */}
                <div className="space-y-12">
                  {/* Header */}
                  <div>
                    <p className="text-xs font-normal text-muted-foreground uppercase tracking-wider mb-4">
                      GET STARTED /
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.1] mb-8">
                      Get in touch
                    </h1>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Share your project goals and requirements
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Receive a tailored proposal
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Schedule a strategy consultation
                      </p>
                    </div>
                  </div>

                  {/* Trusted By Section */}
                  <div className="pt-8 border-t">
                    <h3 className="text-sm font-normal text-muted-foreground mb-6">
                      Trusted by leading enterprises
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {companyLogos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={100}
                            height={40}
                            className="h-8 w-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Links */}
                  <div className="pt-8 border-t space-y-6">
                    <div>
                      <h4 className="text-sm font-normal mb-2">FAQ</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Browse our collection of{" "}
                        <Link href="/faq" className="underline hover:opacity-60 transition-opacity">
                          Frequently Asked Questions
                        </Link>{" "}
                        about our process and project delivery.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-normal mb-2">Resources</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Access our library and connect with designers in our{" "}
                        <Link href="/resources" className="underline hover:opacity-60 transition-opacity">
                          resource center
                        </Link>{" "}
                        filled with whitepapers and tutorials.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Contact Form */}
                <div>
                  <Card className="border rounded-xl p-8 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-normal">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Alex"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-normal">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Smith"
                            className="h-11"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-normal">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex.smith@example.com"
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-sm font-normal">
                          Project Budget
                        </Label>
                        <Select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="h-11"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-50k">$10,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-500k">$100,000 - $500,000</option>
                          <option value="over-500k">Over $500,000</option>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-normal">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          className="min-h-[140px] resize-y"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="source" className="text-sm font-normal">
                          How did you find us?
                        </Label>
                        <Input
                          id="source"
                          name="source"
                          type="text"
                          value={formData.source}
                          onChange={handleChange}
                          placeholder="Google / Referral / Other"
                          className="h-11"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full font-normal"
                      >
                        Submit
                      </Button>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        You acknowledge that you've reviewed and agreed to our{" "}
                        <Link href="/privacy" className="underline hover:opacity-60 transition-opacity">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" className="underline hover:opacity-60 transition-opacity">
                          Terms of Service
                        </Link>
                        .
                      </p>
                    </form>
                  </Card>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

