"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { LiveWaveform } from "@/components/ui/live-waveform"
import { ArrowLeft, CheckCircle2, ArrowRight, Sparkles, Info, Zap, TrendingUp, Users, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type UseCaseCategory = "productivity" | "customer-service" | "analytics" | "quality"

type UseCase = {
  id: string
  title: string
  category: UseCaseCategory
  description: string
  longDescription: string
  detailedContent: string[]
  image: string
  features: string[]
  benefits: string[]
  useCases: string[]
  stats?: Array<{ label: string; value: string; icon: string }>
}

export function UseCasePageContent({ useCase }: { useCase: UseCase }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src={useCase.image}
            alt={useCase.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container pb-12">
            <ScrollAnimation>
              <Link href="/usecases">
                <Button variant="ghost" size="sm" className="mb-6 font-normal hover:bg-background/80">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Use Cases
                </Button>
              </Link>
              <Badge variant="outline" className="mb-4 text-xs font-normal bg-background/90 backdrop-blur-sm capitalize">
                {useCase.category.replace("-", " ")}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 max-w-4xl">
                {useCase.title}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-foreground/90 max-w-3xl">
                {useCase.longDescription}
              </p>
            </ScrollAnimation>
          </div>
        </section>

        <Separator />

        {/* Stats Section */}
        {useCase.stats && (
          <section className="container py-12">
            <ScrollAnimation>
              <div className="mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {useCase.stats.map((stat, index) => {
                    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                      zap: Zap,
                      "trending-up": TrendingUp,
                      users: Users,
                      shield: Shield,
                    }
                    const Icon = iconMap[stat.icon] || Zap
                    return (
                      <ScrollAnimation key={index} delay={index * 50}>
                        <Card className="border rounded-xl p-6 text-center group hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center group-hover:border-foreground/30 transition-colors">
                              <Icon className="h-6 w-6 text-foreground/60" />
                            </div>
                          </div>
                          <div className="text-3xl font-light mb-2">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </Card>
                      </ScrollAnimation>
                    )
                  })}
                </div>
              </div>
            </ScrollAnimation>
          </section>
        )}

        <Separator />

        {/* Main Content with Tabs */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimation>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 p-2 md:p-1 h-auto md:h-9 mb-8">
                  <TabsTrigger value="overview" className="font-normal text-base md:text-sm px-4 py-3 md:px-3 md:py-1 whitespace-nowrap h-auto md:h-7">Overview</TabsTrigger>
                  <TabsTrigger value="features" className="font-normal text-base md:text-sm px-4 py-3 md:px-3 md:py-1 whitespace-nowrap h-auto md:h-7">Features</TabsTrigger>
                  <TabsTrigger value="benefits" className="font-normal text-base md:text-sm px-4 py-3 md:px-3 md:py-1 whitespace-nowrap h-auto md:h-7">Benefits</TabsTrigger>
                  <TabsTrigger value="examples" className="font-normal text-base md:text-sm px-4 py-3 md:px-3 md:py-1 whitespace-nowrap h-auto md:h-7">Examples</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <Card className="border-2 rounded-xl p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-foreground/3 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                    <div className="relative z-10">
                      <div className="mb-6 flex items-center gap-3">
                        <Sparkles className="h-5 w-5 text-foreground/40" />
                        <h2 className="text-2xl font-light tracking-tight">Solution Overview</h2>
                      </div>
                      <div className="space-y-6">
                        {useCase.detailedContent.map((paragraph, index) => (
                          <p key={index} className="text-base md:text-lg leading-relaxed text-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="features" className="space-y-6">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Key Capabilities</AlertTitle>
                    <AlertDescription>
                      These features are designed to address your specific business needs and integrate seamlessly with your existing systems.
                    </AlertDescription>
                  </Alert>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCase.features.map((feature, index) => (
                      <ScrollAnimation key={index} delay={index * 30}>
                        <Card className="border rounded-xl p-6 group hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-lg border border-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/30 transition-colors">
                              <CheckCircle2 className="h-4 w-4 text-foreground/60" />
                            </div>
                            <p className="text-sm leading-relaxed text-foreground flex-1">{feature}</p>
                          </div>
                        </Card>
                      </ScrollAnimation>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-6">
                  <Alert>
                    <TrendingUp className="h-4 w-4" />
                    <AlertTitle>Business Impact</AlertTitle>
                    <AlertDescription>
                      These benefits have been measured across multiple enterprise deployments and demonstrate the tangible value of this solution.
                    </AlertDescription>
                  </Alert>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCase.benefits.map((benefit, index) => (
                      <ScrollAnimation key={index} delay={index * 30}>
                        <Card className="border rounded-xl p-6 group hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-lg border border-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/30 transition-colors">
                              <TrendingUp className="h-4 w-4 text-foreground/60" />
                            </div>
                            <p className="text-sm leading-relaxed text-foreground flex-1">{benefit}</p>
                          </div>
                        </Card>
                      </ScrollAnimation>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="examples" className="space-y-6">
                  <Alert>
                    <Users className="h-4 w-4" />
                    <AlertTitle>Real-World Applications</AlertTitle>
                    <AlertDescription>
                      These examples demonstrate how organizations are successfully implementing this solution across different use cases.
                    </AlertDescription>
                  </Alert>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCase.useCases.map((example, index) => (
                      <ScrollAnimation key={index} delay={index * 30}>
                        <Card className="border rounded-xl p-6 group hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <Badge variant="outline" className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center flex-shrink-0 text-xs font-normal">
                              {index + 1}
                            </Badge>
                            <p className="text-sm leading-relaxed text-foreground flex-1">{example}</p>
                          </div>
                        </Card>
                      </ScrollAnimation>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </ScrollAnimation>
          </div>
        </section>

        <Separator />

        {/* CTA Section */}
        <section className="container py-16 md:py-24">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl">
              <Card className="border-2 rounded-xl p-10 md:p-16 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-center opacity-20">
                    <LiveWaveform
                      active={true}
                      processing={true}
                      height={80}
                      barWidth={3}
                      barGap={2}
                      mode="static"
                      fadeEdges={true}
                      barColor="gray"
                      historySize={100}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4">
                    Ready to Implement This Solution?
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Let's discuss how {useCase.title} can transform your operations and drive innovation in your organization.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact">
                      <Button size="lg" variant="default" className="font-normal group/btn">
                        Book a Call
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="font-normal">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollAnimation>
        </section>
      </main>
      <Footer />
    </div>
  )
}

