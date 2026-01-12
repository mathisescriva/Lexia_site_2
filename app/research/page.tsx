"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { Matrix, wave, pulse, loader } from "@/components/ui/matrix"
import Image from "next/image"
import Link from "next/link"

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-5xl text-center mb-16">
              <h1 className="mb-6 text-4xl font-light tracking-[-0.02em] md:text-5xl lg:text-6xl leading-[1.1]">
                Research{" "}
                <span className="inline-block">&</span>
                <span className="block mt-1 font-extralight tracking-[-0.015em]">Development</span>
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-6">
                We develop speech-to-text models optimized for enterprise environments, 
                creating efficient and scalable solutions that bridge cutting-edge research 
                with practical business applications.
              </p>
              <p className="text-sm text-muted-foreground">
                In collaboration with the Intelligence Lab of ECE
              </p>
            </div>
          </ScrollAnimation>
        </section>

        {/* Video Section */}
        <section className="container pb-24 md:pb-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-5xl">
              <Card className="border rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-video bg-muted/50">
                    <iframe
                      src="https://www.youtube.com/embed/1V4a2wDRvNo"
                      title="Lexia Research & Development"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full transition-opacity group-hover:opacity-95"
                      style={{ border: 'none' }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* What We Do Section */}
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimation>
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
                  What We Do
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-8">
                  Our research focuses on developing and optimizing speech technology models 
                  specifically designed for enterprise use cases.
                </p>
                {/* Matrix visualization */}
                <div className="flex items-center justify-center gap-8 opacity-20">
                  <Matrix
                    rows={7}
                    cols={7}
                    frames={wave}
                    fps={12}
                    autoplay={true}
                    loop={true}
                    size={8}
                    gap={2}
                    brightness={0.6}
                  />
                  <Matrix
                    rows={7}
                    cols={7}
                    frames={pulse}
                    fps={10}
                    autoplay={true}
                    loop={true}
                    size={8}
                    gap={2}
                    brightness={0.6}
                  />
                  <Matrix
                    rows={7}
                    cols={7}
                    frames={loader}
                    fps={12}
                    autoplay={true}
                    loop={true}
                    size={8}
                    gap={2}
                    brightness={0.6}
                  />
                </div>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <ScrollAnimation delay={100}>
                <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center text-xs font-normal">
                        01
                      </div>
                    </div>
                    <CardTitle className="text-xl font-light mb-3">Speech-to-Text Models</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      We develop and optimize speech-to-text models specifically tailored for 
                      enterprise environments. Our models are designed to handle complex business 
                      terminology, multiple languages, and diverse audio conditions while maintaining 
                      high accuracy and low latency.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={150}>
                <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center text-xs font-normal">
                        02
                      </div>
                    </div>
                    <CardTitle className="text-xl font-light mb-3">Post-Training & Customization</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      We specialize in post-training large language models to create custom pipelines 
                      for enterprise clients. Our approach enables companies to leverage state-of-the-art 
                      AI capabilities while maintaining control over their specific use cases and data.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center text-xs font-normal">
                        03
                      </div>
                    </div>
                    <CardTitle className="text-xl font-light mb-3">Model Optimization</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      Our research focuses on making large language models more efficient and scalable 
                      for production deployments. We develop techniques that reduce computational costs 
                      while preserving or improving model performance.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={250}>
                <Card className="border rounded-xl group transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center text-xs font-normal">
                        04
                      </div>
                    </div>
                    <CardTitle className="text-xl font-light mb-3">Enterprise Integration</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      We bridge the gap between research and production by creating models that integrate 
                      seamlessly with existing enterprise systems. Our solutions are designed with 
                      security, compliance, and scalability in mind.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>
            </div>

            {/* Image Section */}
            <ScrollAnimation delay={300}>
              <div className="mb-16">
                <Card className="border rounded-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-[16/9]">
                      <Image
                        src="/logos/IALAB1.webp"
                        alt="Intelligence Lab"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={350}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://huggingface.co/Gilbert-AI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="default" className="font-normal">
                    View Our Models on Hugging Face
                  </Button>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <Separator />

        {/* Research Papers Section */}
        <section id="research-papers" className="container py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimation>
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
                  Research Papers
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  Our research contributes to the advancement of large language models and 
                  speech technology through peer-reviewed publications and open-source contributions.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <Card className="border-2 rounded-xl overflow-hidden group relative transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-foreground/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Paper Preview - Left Side */}
                  <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10">
                    <div className="relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-8">
                      {/* PDF Preview with shadow effect */}
                      <div className="relative w-full max-w-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent rounded-lg blur-xl" />
                        <div className="relative bg-background border-2 rounded-lg shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                          {/* PDF Header */}
                          <div className="bg-muted/50 px-6 py-4 border-b">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-3 h-3 rounded-full bg-red-500/50" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                              <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">
                              S31203_9035-1.pdf
                            </div>
                          </div>
                          
                          {/* PDF Content Preview */}
                          <div className="p-6 space-y-4 bg-background">
                            <div className="space-y-2">
                              <div className="h-4 bg-foreground/20 rounded w-3/4" />
                              <div className="h-4 bg-foreground/10 rounded w-full" />
                              <div className="h-4 bg-foreground/10 rounded w-5/6" />
                            </div>
                            <div className="space-y-2 pt-2">
                              <div className="h-3 bg-foreground/10 rounded w-full" />
                              <div className="h-3 bg-foreground/10 rounded w-4/5" />
                              <div className="h-3 bg-foreground/10 rounded w-full" />
                              <div className="h-3 bg-foreground/10 rounded w-3/4" />
                            </div>
                            <div className="pt-4 space-y-2">
                              <div className="h-2 bg-foreground/5 rounded w-full" />
                              <div className="h-2 bg-foreground/5 rounded w-full" />
                              <div className="h-2 bg-foreground/5 rounded w-2/3" />
                            </div>
                            <div className="pt-2 flex gap-2">
                              <div className="h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded w-full" />
                              <div className="h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded w-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-2xl" />
                      <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-xl" />
                    </div>
                  </div>
                  
                  {/* Paper Info - Right Side */}
                  <div className="lg:col-span-3 flex flex-col p-8 md:p-12 relative">
                    <CardHeader className="p-0 pb-6">
                      <div className="text-xs font-normal text-muted-foreground uppercase tracking-wider mb-2">
                        Published in I3E • 2025
                      </div>
                      <CardTitle className="text-2xl font-light mb-4 md:text-3xl leading-tight">
                        Geometric Model Merging for Efficient and Scalable Adaptation of Large Language Models
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        We propose Layer-Adaptive Spherical Linear Interpolation (Layer-Adaptive SLERP), 
                        a novel merging strategy that combines fine-tuned large language models efficiently 
                        without additional training. Our method significantly improves merging stability 
                        and task-specific performance across multiple architectures and parameter scales.
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0 flex-1">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-normal mb-4 text-muted-foreground uppercase tracking-wider">
                            Key Contributions
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex items-start gap-2 p-3 rounded-lg border bg-muted/30 transition-colors hover:bg-muted/50">
                              <span className="text-foreground mt-0.5">•</span>
                              <span className="text-sm text-muted-foreground">Geometry-preserving SLERP path</span>
                            </div>
                            <div className="flex items-start gap-2 p-3 rounded-lg border bg-muted/30 transition-colors hover:bg-muted/50">
                              <span className="text-foreground mt-0.5">•</span>
                              <span className="text-sm text-muted-foreground">Layer-specific coefficients</span>
                            </div>
                            <div className="flex items-start gap-2 p-3 rounded-lg border bg-muted/30 transition-colors hover:bg-muted/50">
                              <span className="text-foreground mt-0.5">•</span>
                              <span className="text-sm text-muted-foreground">50+ merges across 6 architectures</span>
                            </div>
                            <div className="flex items-start gap-2 p-3 rounded-lg border bg-muted/30 transition-colors hover:bg-muted/50">
                              <span className="text-foreground mt-0.5">•</span>
                              <span className="text-sm text-muted-foreground">Production-scale validation</span>
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-sm font-normal mb-3 text-muted-foreground uppercase tracking-wider">
                            Impact
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Our merged 7B variant attains competitive leaderboard performance and 
                            supports production-scale deployments, confirming the method's robustness 
                            and applicability to real-world adaptation tasks.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <a 
                        href="/logos/S31203_9035-1.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="font-normal w-full">
                          Download Paper
                        </Button>
                      </a>
                      <Link href="/research#research-papers">
                        <Button variant="outline" className="font-normal flex-1">
                          View All Papers
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </section>

        <Separator />

        {/* Why & How Section */}
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimation>
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
                  Why & How
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  Understanding our approach to speech technology and model development.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollAnimation delay={100}>
                <div>
                  <h3 className="text-xl font-light mb-4">Why</h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    Traditional fine-tuning approaches for large language models are resource-intensive 
                    and difficult to scale across multiple enterprise domains. We develop efficient 
                    methods that enable companies to leverage state-of-the-art speech technology 
                    without the prohibitive costs of training models from scratch.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Our research focuses on creating models that are not only accurate but also 
                    practical for real-world enterprise deployments, considering factors like 
                    computational efficiency, integration complexity, and domain-specific requirements.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={150}>
                <div>
                  <h3 className="text-xl font-light mb-4">How</h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    We use advanced techniques like geometric model merging, post-training optimization, 
                    and layer-adaptive interpolation to create efficient and scalable solutions. Our 
                    approach combines multiple fine-tuned models into a single performant model without 
                    requiring additional training.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    We work closely with enterprise clients to understand their specific needs, 
                    then develop custom pipelines that integrate seamlessly with their existing 
                    systems while maintaining high performance and reliability.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA Section */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl">
                Interested in Our Research?
              </h2>
              <p className="mb-10 text-base leading-relaxed text-muted-foreground">
                Explore our models on Hugging Face or get in touch to learn more about our 
                research and how it can benefit your enterprise.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://huggingface.co/Gilbert-AI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="font-normal">
                    View Models on Hugging Face
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="default" className="font-normal">
                    Book a Call
                  </Button>
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

