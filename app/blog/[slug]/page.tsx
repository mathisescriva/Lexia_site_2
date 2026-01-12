import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This should match the blogPosts array from BlogPageContent.tsx
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

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${post.title} | Lexia Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container pb-8">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="mb-6 font-normal">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            <Badge variant="outline" className="mb-4 text-xs font-normal">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Article Content */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Card className="border rounded-xl p-8 md:p-12">
              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-base leading-relaxed text-foreground mb-6">
                  {post.content}
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  {post.excerpt}
                </p>
              </div>
            </Card>

            <div className="mt-12 text-center">
              <Link href="/blog">
                <Button variant="outline" size="lg" className="font-normal">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

