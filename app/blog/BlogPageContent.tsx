"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { Matrix, wave, pulse } from "@/components/ui/matrix"
import { Calendar, Clock, ArrowRight, User, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Speech Technology in Enterprise: How AI Lab Innovations Transform Business Operations",
    excerpt: "Exploring how speech recognition technology, developed in collaboration with the Intelligence Lab of ECE, is transforming enterprise workflows and revolutionizing the way businesses interact with their systems.",
    content: "Speech technology has evolved from a novelty to a critical enterprise tool. In collaboration with the Intelligence Lab of ECE, we explore the latest advancements in speech-to-text models and how they're reshaping business operations.",
    author: "Alexandre Martin",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "/logos/IALAB1.webp",
    featured: true,
    slug: "future-speech-technology-enterprise",
  },
  {
    id: 2,
    title: "Optimizing Speech-to-Text Models for Production: Best Practices for Enterprise Deployment",
    excerpt: "Best practices for deploying speech-to-text models in enterprise environments, focusing on accuracy, latency, and scalability. Learn how to optimize your speech recognition pipeline.",
    content: "Deploying speech-to-text models in production requires careful consideration of multiple factors. We share our insights on achieving optimal performance in enterprise environments.",
    author: "Sophie Chen",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Engineering",
    image: "/logos/service_tech.jpeg",
    featured: false,
    slug: "optimizing-speech-to-text-models-production",
  },
  {
    id: 3,
    title: "Building Custom Voice Pipelines for Enterprise: Integration Strategies",
    excerpt: "A deep dive into creating tailored voice processing pipelines that integrate seamlessly with existing enterprise infrastructure and CRM systems.",
    content: "Custom voice pipelines enable enterprises to leverage speech technology in ways that align perfectly with their unique requirements and workflows.",
    author: "Thomas Dubois",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Case Study",
    image: "/logos/team.webp",
    featured: false,
    slug: "building-custom-voice-pipelines-enterprise",
  },
  {
    id: 4,
    title: "Speech Recognition API for Enterprise: How to Integrate Voice Technology into Your Applications",
    excerpt: "Complete guide to integrating speech recognition APIs into enterprise applications. Learn about Gilbert API, authentication, and best practices for voice-enabled solutions.",
    content: "Enterprise speech recognition APIs enable developers to quickly integrate voice technology into their applications. This guide covers everything from API setup to production deployment.",
    author: "Marie Laurent",
    date: "February 20, 2024",
    readTime: "8 min read",
    category: "API",
    image: "/logos/service_tech.jpeg",
    featured: false,
    slug: "speech-recognition-api-enterprise-integration",
  },
  {
    id: 5,
    title: "Voice-Activated CRM Systems: Transforming Customer Relationship Management",
    excerpt: "Discover how voice-activated CRM systems are revolutionizing customer relationship management. Learn about hands-free data entry, voice search, and automated call transcription.",
    content: "Voice-activated CRM systems allow sales teams to update records, search contacts, and log interactions using natural voice commands, reducing data entry time by up to 60%.",
    author: "Jean-Pierre Moreau",
    date: "February 12, 2024",
    readTime: "6 min read",
    category: "Use Cases",
    image: "/logos/image_illustration1.png",
    featured: false,
    slug: "voice-activated-crm-systems",
  },
  {
    id: 6,
    title: "Automated Call Transcription: Real-Time Speech-to-Text for Customer Service",
    excerpt: "How automated call transcription is transforming customer service operations. Real-time transcription and analysis of customer service calls with automatic data population.",
    content: "Automated call transcription enables real-time transcription and analysis of customer service calls, automatically populating enterprise systems with structured data for better insights.",
    author: "Sophie Chen",
    date: "February 5, 2024",
    readTime: "7 min read",
    category: "Use Cases",
    image: "/logos/image_illustration2.png",
    featured: false,
    slug: "automated-call-transcription-customer-service",
  },
  {
    id: 7,
    title: "Meeting Intelligence: Speech Recognition for Project Management and Documentation",
    excerpt: "Transform meetings into actionable insights by integrating speech recognition with project management and documentation systems. Learn about meeting transcription and analysis.",
    content: "Meeting intelligence solutions integrate speech recognition with project management systems, transforming meetings into actionable insights and automated documentation.",
    author: "Alexandre Martin",
    date: "January 29, 2024",
    readTime: "5 min read",
    category: "Use Cases",
    image: "/logos/image_illustration3.png",
    featured: false,
    slug: "meeting-intelligence-speech-recognition",
  },
  {
    id: 8,
    title: "Hugging Face Speech Models: Optimized Speech-to-Text for Enterprise Applications",
    excerpt: "Explore our optimized speech-to-text models on Hugging Face, designed specifically for enterprise environments. Learn about post-training and custom pipeline development.",
    content: "Our speech-to-text models on Hugging Face are optimized for enterprise applications, featuring post-training capabilities and custom pipeline development for specific use cases.",
    author: "Thomas Dubois",
    date: "January 22, 2024",
    readTime: "6 min read",
    category: "Research",
    image: "/logos/IALAB1.webp",
    featured: false,
    slug: "hugging-face-speech-models-enterprise",
  },
  {
    id: 9,
    title: "Geometric Model Merging: Efficient Adaptation of Large Language Models for Speech",
    excerpt: "Deep dive into geometric model merging techniques for efficient and scalable adaptation of large language models for speech technology applications.",
    content: "Geometric model merging enables efficient and scalable adaptation of large language models for speech technology, reducing computational requirements while maintaining performance.",
    author: "Sophie Chen",
    date: "January 15, 2024",
    readTime: "9 min read",
    category: "Research",
    image: "/logos/IALAB1.webp",
    featured: false,
    slug: "geometric-model-merging-speech-technology",
  },
  {
    id: 10,
    title: "Enterprise Speech Technology: Security, Compliance, and Scalability Considerations",
    excerpt: "Essential considerations for deploying speech technology in enterprise environments: security, compliance with regulations, and scalability requirements.",
    content: "Enterprise speech technology deployments must address security, compliance, and scalability. This article covers best practices for enterprise-grade speech solutions.",
    author: "Marie Laurent",
    date: "January 8, 2024",
    readTime: "7 min read",
    category: "Enterprise",
    image: "/logos/service_tech.jpeg",
    featured: false,
    slug: "enterprise-speech-technology-security-compliance",
  },
  {
    id: 11,
    title: "MILO Educational Assistant: A Case Study in Speech Technology Deployment",
    excerpt: "Case study of MILO, an educational assistant powered by Lexia's speech technology, demonstrating real-world deployment of voice-activated learning solutions.",
    content: "MILO demonstrates how Lexia's speech technology can be deployed in educational environments to enhance learning experiences through natural voice interactions.",
    author: "Jean-Pierre Moreau",
    date: "January 1, 2024",
    readTime: "6 min read",
    category: "Case Study",
    image: "/logos/team.webp",
    featured: false,
    slug: "milo-educational-assistant-case-study",
  },
  {
    id: 12,
    title: "Post-Training Speech Models: Customizing Pre-Trained Models for Your Enterprise",
    excerpt: "Learn how to customize pre-trained speech models through post-training techniques to meet your enterprise's specific requirements and use cases.",
    content: "Post-training enables enterprises to customize pre-trained speech models for their specific requirements, improving accuracy and relevance for domain-specific applications.",
    author: "Alexandre Martin",
    date: "December 25, 2023",
    readTime: "8 min read",
    category: "Engineering",
    image: "/logos/IALAB1.webp",
    featured: false,
    slug: "post-training-speech-models-customization",
  },
]

export function BlogPageContent() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-20">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <h1 className="text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
                  Blog
                </h1>
                <div className="flex items-center gap-2 opacity-20">
                  <Matrix
                    rows={5}
                    cols={5}
                    frames={wave}
                    fps={10}
                    autoplay={true}
                    loop={true}
                    size={4}
                    gap={1}
                    brightness={0.6}
                  />
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Insights, updates, and stories about speech technology, enterprise solutions, and innovation.
              </p>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Featured Post */}
        {featuredPost && (
          <section className="container py-24 md:py-32">
            <ScrollAnimation>
              <div className="mx-auto max-w-5xl">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-4 w-4 text-foreground/40" />
                  <p className="text-xs font-normal text-muted-foreground uppercase tracking-wider">
                    Featured Article
                  </p>
                </div>
                <Card className="border-2 rounded-xl overflow-hidden group transition-all hover:shadow-md relative">
                  {/* Decorative gradient background */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/3 via-violet-500/3 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
                    <div className="relative aspect-video md:aspect-auto md:h-full min-h-[300px] overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/90 backdrop-blur-sm text-foreground border-0 shadow-lg">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col p-8 md:p-12 bg-card/50 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-xs font-normal">
                          {featuredPost.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-light mb-4 leading-tight group-hover:text-foreground/90 transition-colors duration-300">
                        {featuredPost.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-6 flex-1">
                        {featuredPost.excerpt}
                      </CardDescription>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b">
                        <div className="flex items-center gap-1.5">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button variant="outline" className="font-normal w-fit group/btn">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollAnimation>
          </section>
        )}

        <Separator />

        {/* Blog Posts Grid */}
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollAnimation>
              <h2 className="mb-12 text-2xl font-light tracking-tight md:text-3xl">
                Latest Articles
              </h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <ScrollAnimation key={post.id} delay={index * 100}>
                  <Card className="border rounded-xl overflow-hidden flex flex-col h-full transition-all hover:shadow-md hover:border-foreground/10 group relative">
                    {/* Subtle gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-violet-500/0 to-transparent opacity-0 group-hover:opacity-3 transition-opacity duration-700 rounded-xl" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/10 to-transparent" />
                        <div className="absolute top-3 right-3">
                          <Badge variant="outline" className="text-xs font-normal bg-background/90 backdrop-blur-sm border-0 shadow-sm">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="flex-1">
                      <CardTitle className="text-xl font-light mb-3 leading-tight group-hover:text-foreground/90 transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                        <CardDescription className="text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 pb-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b">
                          <div className="flex items-center gap-1.5">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm" className="font-normal text-xs group/btn">
                              Read More
                              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <Separator />
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl text-center">
              <Card className="border-2 rounded-xl p-10 md:p-16 relative overflow-hidden group">
                {/* Animated gradient background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/5 via-violet-500/5 to-transparent rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                
                {/* Decorative matrix animations */}
                <div className="absolute top-8 right-8 opacity-5">
                  <Matrix
                    rows={4}
                    cols={4}
                    frames={pulse}
                    fps={8}
                    autoplay={true}
                    loop={true}
                    size={5}
                    gap={1.5}
                    brightness={0.5}
                  />
                </div>
                <div className="absolute bottom-8 left-8 opacity-5">
                  <Matrix
                    rows={4}
                    cols={4}
                    frames={wave}
                    fps={10}
                    autoplay={true}
                    loop={true}
                    size={5}
                    gap={1.5}
                    brightness={0.5}
                  />
                </div>
                
                <div className="relative z-10">
                  <CardHeader className="pb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-foreground/40" />
                      <CardTitle className="text-3xl font-light">
                        Stay Updated
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed max-w-2xl mx-auto">
                      Subscribe to our newsletter to receive the latest insights on speech technology and enterprise innovation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-11 flex-1 border-2 focus-visible:ring-2 focus-visible:ring-ring"
                      />
                      <Button size="lg" className="font-normal w-full sm:w-auto group/btn">
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
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

