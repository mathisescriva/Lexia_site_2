"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { MapPin, Clock, Users, Sparkles, CheckCircle2, ArrowRight, Microscope, TrendingUp, Users2, ArrowUpRight, Wrench, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type JobCategory = "all" | "engineering" | "research" | "sales"

const jobOpenings = [
  {
    id: "engineer-part-time-freelance",
    title: "Engineer Part-Time Freelance Research Scientist",
    category: "research" as JobCategory,
    location: "Paris, France / Remote",
    type: "Part-time / Freelance",
    department: "Research",
    description: "Contribute to research projects on a flexible, part-time basis. Ideal for researchers looking for additional projects.",
    requirements: [
      "PhD or Master's in relevant field",
      "Experience in speech technology or NLP",
      "Ability to work independently",
      "Flexible schedule availability",
      "Strong communication skills"
    ],
    icon: Microscope,
  },
  {
    id: "marc-ingenieur-rd-junior",
    title: "Engineer R&D Junior",
    category: "engineering" as JobCategory,
    location: "Paris, France",
    type: "Full-time",
    department: "Engineering",
    description: "Junior R&D engineer position for recent graduates passionate about speech technology and innovation.",
    requirements: [
      "Master's degree in Computer Science, Engineering, or related field",
      "Interest in speech recognition and machine learning",
      "Strong programming skills (Python, C++)",
      "Eagerness to learn and grow",
      "Good problem-solving abilities"
    ],
    icon: Wrench,
  },
  {
    id: "post-sales",
    title: "Sales Engineer",
    category: "sales" as JobCategory,
    location: "Paris, France",
    type: "Full-time",
    department: "Sales",
    description: "Bridge the gap between sales and technical teams, ensuring successful implementation and customer satisfaction.",
    requirements: [
      "Technical background in software or speech technology",
      "Experience in sales engineering or customer success",
      "Strong communication and presentation skills",
      "Ability to understand customer needs and provide solutions",
      "Experience with enterprise software sales"
    ],
    icon: Briefcase,
  },
]

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState<JobCategory>("all")

  const categories = [
    { id: "all" as JobCategory, label: "All Positions" },
    { id: "engineering" as JobCategory, label: "Engineering" },
    { id: "research" as JobCategory, label: "Research" },
    { id: "sales" as JobCategory, label: "Sales" },
  ]

  const filteredJobs = activeFilter === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeFilter)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="mb-6 text-4xl font-light tracking-[-0.02em] md:text-5xl lg:text-6xl leading-[1.1]">
                    Join Our
                    <span className="block mt-2 font-extralight tracking-[-0.015em]">Team</span>
                  </h1>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    Build the future of speech technology with a team of passionate researchers, 
                    engineers, and innovators. We're looking for talented individuals who share our 
                    vision of reconciling speech with enterprise systems.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mb-8">
                    <Badge variant="outline" className="px-4 py-2">
                      <MapPin className="h-3 w-3 mr-2" />
                      Paris, France
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2">
                      <Users className="h-3 w-3 mr-2" />
                      Growing Team
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2">
                      <Sparkles className="h-3 w-3 mr-2" />
                      Innovation Focus
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button 
                      size="lg" 
                      variant="default" 
                      className="font-normal"
                      onClick={() => {
                        document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      View Open Positions
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-2 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src="/logos/IALAB1.webp"
                          alt="Intelligence Lab"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Why Join Us Section */}
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimation>
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
                  Why Join Lexia?
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  We're building cutting-edge speech technology that transforms how enterprises 
                  interact with voice-enabled systems. Join us in shaping the future.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollAnimation delay={100}>
                <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center flex-shrink-0 bg-muted/30">
                        <Microscope className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-light mb-3">Cutting-Edge Research</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          Work on state-of-the-art speech technology with access to the latest 
                          research and tools. Collaborate with leading institutions and push the 
                          boundaries of what's possible.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={150}>
                <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center flex-shrink-0 bg-muted/30">
                        <TrendingUp className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-light mb-3">Impact at Scale</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          Your work will directly impact enterprise customers and transform how 
                          businesses interact with speech technology. See your contributions make 
                          a real difference.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center flex-shrink-0 bg-muted/30">
                        <Users2 className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-light mb-3">Collaborative Culture</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          Join a team that values collaboration, knowledge sharing, and continuous 
                          learning. Work alongside passionate colleagues who are experts in their fields.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={250}>
                <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center flex-shrink-0 bg-muted/30">
                        <ArrowUpRight className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-light mb-3">Growth Opportunities</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          Grow your career with opportunities to work on diverse projects, attend 
                          conferences, publish research, and take on increasing responsibilities.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <Separator />

        {/* Open Positions Section */}
        <section id="open-positions" className="container py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimation>
              <div className="mb-12 text-center">
                <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
                  Open Positions
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  Explore our current openings and find the perfect role for you.
                </p>
              </div>
            </ScrollAnimation>

            {/* Filter Tabs */}
            <ScrollAnimation delay={100}>
              <div className="mb-8 flex justify-center">
                <Tabs value={activeFilter} onValueChange={(v) => setActiveFilter(v as JobCategory)} className="w-full max-w-2xl">
                  <TabsList className="grid w-full grid-cols-4">
                    {categories.map((category) => (
                      <TabsTrigger key={category.id} value={category.id} className="text-xs">
                        {category.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </ScrollAnimation>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.length === 0 ? (
                <ScrollAnimation>
                  <Card className="border rounded-xl p-12 text-center">
                    <CardDescription>
                      No positions available in this category at the moment. Check back soon!
                    </CardDescription>
                  </Card>
                </ScrollAnimation>
              ) : (
                filteredJobs.map((job, index) => (
                  <ScrollAnimation key={job.id} delay={100 + index * 50}>
                    <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center flex-shrink-0 bg-muted/30">
                                <job.icon className="h-6 w-6 text-foreground" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-xl font-light mb-2">{job.title}</CardTitle>
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                  <Badge variant="secondary">{job.department}</Badge>
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="h-3 w-3" />
                                    {job.location}
                                  </div>
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    {job.type}
                                  </div>
                                </div>
                                <CardDescription className="text-sm leading-relaxed">
                                  {job.description}
                                </CardDescription>
                              </div>
                            </div>
                          </div>
                          <a href={`mailto:careers@lexia.ai?subject=Application for ${encodeURIComponent(job.title)}`}>
                            <Button variant="outline" className="font-normal md:ml-4">
                              Apply
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        </div>
                      </CardHeader>
                      <Separator className="mx-6" />
                      <CardContent className="pt-6">
                        <div>
                          <h3 className="text-sm font-normal mb-3 text-muted-foreground uppercase tracking-wider">
                            Key Requirements
                          </h3>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-foreground flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))
              )}
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA Section */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl">
              <Card className="border-2 rounded-xl p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-foreground/[0.02] to-transparent rounded-full blur-3xl" />
                <div className="relative z-10">
                  <CardHeader className="pb-8">
                    <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
                      Don't See a Role That Fits?
                    </h2>
                    <CardDescription className="text-base leading-relaxed max-w-2xl mx-auto">
                      We're always looking for talented individuals. Send us your resume and 
                      we'll keep you in mind for future opportunities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a href="mailto:careers@lexia.ai?subject=Spontaneous Application">
                        <Button size="lg" variant="default" className="font-normal w-full sm:w-auto">
                          Send Your Resume
                        </Button>
                      </a>
                      <Link href="/contact">
                        <Button size="lg" variant="outline" className="font-normal w-full sm:w-auto">
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Alert Section */}
        <section className="container py-12">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl">
              <Alert>
                <Sparkles className="h-4 w-4" />
                <AlertTitle>Equal Opportunity</AlertTitle>
                <AlertDescription>
                  Lexia is an equal opportunity employer. We celebrate diversity and are committed 
                  to creating an inclusive environment for all employees.
                </AlertDescription>
              </Alert>
            </div>
          </ScrollAnimation>
        </section>
      </main>
      <Footer />
    </div>
  )
}

