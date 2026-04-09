"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { Matrix, wave, pulse, vu } from "@/components/ui/matrix"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type UseCaseCategory = "all" | "productivity" | "customer-service" | "analytics" | "quality"

const useCases = [
  {
    id: "voice-activated-crm",
    title: "Voice-Activated CRM",
    category: "productivity" as UseCaseCategory,
    description: "Integrate speech commands into customer relationship management systems, enabling hands-free data entry and retrieval.",
    longDescription: "Transform your customer relationship management with voice-activated commands. Our speech technology seamlessly integrates with your existing CRM systems, allowing sales teams to update records, search contacts, and log interactions using natural voice commands. Reduce data entry time by up to 60% while improving accuracy and enabling field teams to stay productive on the go.",
    image: "/logos/image_illustration1.png",
    features: [
      "Hands-free data entry and retrieval",
      "Natural language voice commands",
      "Real-time synchronization with CRM systems",
      "Multi-language support",
      "Secure enterprise-grade integration"
    ],
    benefits: [
      "Increase sales team productivity",
      "Reduce data entry errors",
      "Enable mobile workforce efficiency",
      "Improve customer interaction quality"
    ]
  },
  {
    id: "automated-call-transcription",
    title: "Automated Call Transcription",
    category: "customer-service" as UseCaseCategory,
    description: "Real-time transcription and analysis of customer service calls, automatically populating enterprise systems with structured data.",
    longDescription: "Revolutionize your customer service operations with real-time call transcription and intelligent analysis. Our advanced speech recognition technology captures every conversation with high accuracy, automatically extracting key information and populating your enterprise systems. Transform unstructured voice data into actionable insights, enabling better customer service, compliance tracking, and business intelligence.",
    image: "/logos/image_illustration2.png",
    features: [
      "Real-time transcription with high accuracy",
      "Automatic data extraction and structuring",
      "Sentiment analysis and key topic detection",
      "Integration with CRM and ticketing systems",
      "Compliance and quality assurance tools"
    ],
    benefits: [
      "Improve customer service quality",
      "Enable data-driven decision making",
      "Ensure regulatory compliance",
      "Reduce manual documentation time"
    ]
  },
  {
    id: "meeting-intelligence",
    title: "Meeting Intelligence",
    category: "productivity" as UseCaseCategory,
    description: "Transform meetings into actionable insights by integrating speech recognition with project management and documentation systems.",
    longDescription: "Turn every meeting into a valuable asset with intelligent speech recognition and analysis. Our technology captures meeting discussions, identifies action items, assigns tasks, and automatically updates your project management tools. Eliminate the need for manual note-taking while ensuring nothing important is missed. Transform meeting outcomes into immediate productivity gains.",
    image: "/logos/image_illustration3.png",
    features: [
      "Automatic meeting transcription",
      "Action item identification and extraction",
      "Integration with project management tools",
      "Speaker identification and attribution",
      "Meeting summaries and insights generation"
    ],
    benefits: [
      "Eliminate manual note-taking",
      "Improve meeting follow-through",
      "Enhance team collaboration",
      "Create searchable meeting archives"
    ]
  },
  {
    id: "voice-powered-analytics",
    title: "Voice-Powered Analytics",
    category: "analytics" as UseCaseCategory,
    description: "Enable voice-driven data exploration and reporting, allowing business users to query analytics systems using natural language.",
    longDescription: "Democratize data access with voice-powered analytics. Business users can now interact with complex analytics systems using natural language queries, eliminating the need for technical expertise. Ask questions in plain English and receive instant insights, reports, and visualizations. Transform how your organization interacts with data, making analytics accessible to everyone.",
    image: "/logos/image_illustration1.png",
    features: [
      "Natural language data queries",
      "Voice-driven report generation",
      "Real-time analytics insights",
      "Multi-database integration",
      "Conversational data exploration"
    ],
    benefits: [
      "Make analytics accessible to all users",
      "Reduce time to insights",
      "Enable faster decision making",
      "Increase data-driven culture"
    ]
  },
  {
    id: "intelligent-voice-assistant",
    title: "Intelligent Voice Assistant",
    category: "productivity" as UseCaseCategory,
    description: "Deploy enterprise-grade voice assistants that understand context and integrate seamlessly with your business systems.",
    longDescription: "Deploy intelligent voice assistants that truly understand your business context. Our technology creates voice assistants that integrate deeply with your enterprise systems, understanding your workflows, terminology, and business processes. From scheduling meetings to generating reports, these assistants become valuable team members that enhance productivity across your organization.",
    image: "/logos/image_illustration2.png",
    features: [
      "Context-aware conversations",
      "Deep enterprise system integration",
      "Customizable business logic",
      "Multi-modal interactions",
      "Continuous learning and improvement"
    ],
    benefits: [
      "Enhance employee productivity",
      "Reduce repetitive tasks",
      "Improve user experience",
      "Scale support operations"
    ]
  },
  {
    id: "voice-quality-assurance",
    title: "Voice Quality Assurance",
    category: "quality" as UseCaseCategory,
    description: "Automated quality monitoring and analysis of voice interactions to ensure consistent service delivery and compliance.",
    longDescription: "Ensure consistent quality across all voice interactions with automated monitoring and analysis. Our technology continuously evaluates customer interactions, identifying quality issues, compliance risks, and training opportunities. Provide real-time feedback to agents, ensure regulatory compliance, and maintain high service standards across all touchpoints.",
    image: "/logos/image_illustration3.png",
    features: [
      "Automated quality scoring",
      "Real-time compliance monitoring",
      "Sentiment and emotion analysis",
      "Automated coaching recommendations",
      "Comprehensive quality dashboards"
    ],
    benefits: [
      "Maintain consistent service quality",
      "Ensure regulatory compliance",
      "Identify training opportunities",
      "Improve customer satisfaction"
    ]
  }
]

export function UseCasesContent() {
  const [activeFilter, setActiveFilter] = useState<UseCaseCategory>("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = [
    { id: "all" as UseCaseCategory, label: "All Use Cases" },
    { id: "productivity" as UseCaseCategory, label: "Productivity" },
    { id: "customer-service" as UseCaseCategory, label: "Customer Service" },
    { id: "analytics" as UseCaseCategory, label: "Analytics" },
    { id: "quality" as UseCaseCategory, label: "Quality Assurance" },
  ]

  const filteredUseCases = activeFilter === "all" 
    ? useCases 
    : useCases.filter(useCase => useCase.category === activeFilter)

  const activeCategoryLabel = categories.find(cat => cat.id === activeFilter)?.label || "Filter"

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container py-16 md:py-20">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex-1">
                  <h1 className="mb-4 text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
                    Use Cases
                  </h1>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg mb-6">
                    Discover how enterprises leverage Lexia&apos;s speech technology to transform their operations
                    and drive innovation across their organizations.
                  </p>
                  <div className="flex items-center gap-4 opacity-15">
                    <Matrix rows={7} cols={7} frames={wave} fps={12} autoplay={true} loop={true} size={6} gap={1.5} brightness={0.7} />
                    <Matrix rows={7} cols={7} frames={pulse} fps={10} autoplay={true} loop={true} size={6} gap={1.5} brightness={0.7} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div
                    className="relative"
                    onMouseEnter={() => setIsFilterOpen(true)}
                    onMouseLeave={() => setIsFilterOpen(false)}
                  >
                    <Button variant="outline" className="font-normal">
                      {activeCategoryLabel}
                      <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
                    </Button>
                    {isFilterOpen && (
                      <>
                        <div className="absolute left-0 top-full h-1.5 w-full" />
                        <div className="absolute left-0 top-full mt-1.5 w-[200px] rounded-md border bg-popover p-2 shadow-lg z-50">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => {
                                setActiveFilter(category.id)
                                setIsFilterOpen(false)
                              }}
                              className={`w-full text-left rounded-md px-3 py-2 text-sm font-normal transition-colors ${
                                activeFilter === category.id
                                  ? "bg-accent text-accent-foreground"
                                  : "hover:bg-accent hover:text-accent-foreground"
                              }`}
                            >
                              {category.label}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <Link href="/contact">
                    <Button className="font-normal">Book a Call</Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            {filteredUseCases.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No use cases found for this filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUseCases.map((useCase, index) => (
                <ScrollAnimation key={useCase.id} delay={index * 50}>
                  <Card className="border rounded-xl overflow-hidden flex flex-col h-full transition-opacity hover:opacity-90">
                    <div className="relative aspect-video w-full">
                      <Image src={useCase.image} alt={useCase.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-light mb-3">{useCase.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed line-clamp-3">{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xs font-normal mb-2 text-muted-foreground uppercase tracking-wider">Features</h3>
                          <div className="flex flex-wrap gap-2">
                            {useCase.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="text-xs px-2 py-1 rounded-md border bg-muted/50 text-muted-foreground">
                                {feature.split(' ').slice(0, 3).join(' ')}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="text-xs font-normal mb-2 text-muted-foreground uppercase tracking-wider">Benefits</h3>
                          <ul className="space-y-1.5">
                            {useCase.benefits.slice(0, 2).map((benefit, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                                <span className="mr-1.5 text-foreground mt-0.5">&bull;</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <div className="px-6 pb-6 pt-0">
                      <div className="flex gap-3">
                        <Link href={`/usecases/${useCase.id}`}>
                          <Button className="font-normal text-xs flex-1" size="sm">Learn More</Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" className="font-normal text-xs flex-1" size="sm">Book a Call</Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </ScrollAnimation>
              ))}
              </div>
            )}
          </div>
        </section>

        <Separator />

        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-light tracking-tight md:text-4xl">Forward Deploy Example</h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  See how Lexia&apos;s speech technology powers real-world applications. 
                  MILO is an educational assistant that demonstrates the power of our platform.
                </p>
              </div>
              
              <Card className="border rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:items-stretch">
                  <div className="relative w-full aspect-video md:aspect-auto md:h-full">
                    <iframe
                      src="https://www.youtube.com/embed/oLa7GZZN_GU"
                      title="MILO - Educational Assistant"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 'none' }}
                    />
                  </div>
                  <div className="flex flex-col p-8 md:p-12">
                    <CardHeader className="p-0 pb-6">
                      <div className="text-xs font-normal text-muted-foreground uppercase tracking-wider mb-2">Forward Deploy</div>
                      <CardTitle className="text-2xl font-light mb-4 md:text-3xl">MILO</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        MILO is an intelligent educational assistant powered by Lexia&apos;s speech technology. 
                        It helps students and educators interact naturally with educational content, 
                        providing personalized learning experiences through voice interactions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex-1">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-normal mb-3 text-muted-foreground uppercase tracking-wider">Key Capabilities</h3>
                          <ul className="space-y-2">
                            <li className="text-sm text-muted-foreground flex items-start"><span className="mr-2 text-foreground">&bull;</span>Natural language understanding for educational queries</li>
                            <li className="text-sm text-muted-foreground flex items-start"><span className="mr-2 text-foreground">&bull;</span>Voice-activated content navigation and search</li>
                            <li className="text-sm text-muted-foreground flex items-start"><span className="mr-2 text-foreground">&bull;</span>Personalized learning path recommendations</li>
                            <li className="text-sm text-muted-foreground flex items-start"><span className="mr-2 text-foreground">&bull;</span>Real-time speech-to-text for note-taking</li>
                          </ul>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="text-sm font-normal mb-3 text-muted-foreground uppercase tracking-wider">Impact</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            MILO demonstrates how Lexia&apos;s speech technology can be deployed in educational 
                            environments to enhance learning experiences and make educational content more 
                            accessible through natural voice interactions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <div className="flex gap-4 pt-6">
                      <a href="https://www.google.com/search?q=MILO+TF1" target="_blank" rel="noopener noreferrer">
                        <Button className="font-normal flex-1 md:flex-initial">Learn More</Button>
                      </a>
                      <Link href="/contact">
                        <Button variant="outline" className="font-normal flex-1 md:flex-initial">Book a Call</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">Ready to Transform Your Operations?</h2>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                Let&apos;s discuss how Lexia&apos;s speech technology can address your specific use case
                and drive innovation in your organization.
              </p>
              <div className="flex items-center justify-center gap-6 mb-10 opacity-15">
                <Matrix rows={7} cols={7} frames={wave} fps={12} autoplay={true} loop={true} size={7} gap={2} brightness={0.6} />
                <Matrix rows={7} cols={7} frames={pulse} fps={10} autoplay={true} loop={true} size={7} gap={2} brightness={0.6} />
                <Matrix rows={7} cols={7} frames={wave} fps={12} autoplay={true} loop={true} size={7} gap={2} brightness={0.6} />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="default" className="font-normal w-full sm:w-auto">Book a Call</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="font-normal w-full sm:w-auto">Contact Us</Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </main>
      <Footer />
    </div>
  )
}
