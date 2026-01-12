import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { LiveWaveform } from "@/components/ui/live-waveform"
import { Code2, Zap, Lock, Globe, Terminal, Key, Server, Activity, PlayCircle, Copy, Check, ArrowRight, Sparkles, Cpu, Shield, Layers, GitBranch, Code } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "API Documentation | Lexia",
  description: "Lexia API documentation - Coming soon. Integrate speech technology into your applications with our powerful REST API.",
  openGraph: {
    title: "API Documentation | Lexia",
    description: "Lexia API documentation - Coming soon. Integrate speech technology into your applications.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.lexiapro.fr/api",
  },
}

export default function APIPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Advanced Gradients */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-3xl" />
          </div>
          <div className="container relative py-32 md:py-40">
            <ScrollAnimation>
              <div className="mx-auto max-w-5xl text-center">
                <div className="mb-10 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-foreground/10 blur-2xl" />
                    <div className="relative rounded-full border-2 border-foreground/30 bg-gradient-to-br from-muted/80 to-muted/40 p-8 backdrop-blur-sm shadow-lg">
                      <Code2 className="h-14 w-14 text-foreground" />
                    </div>
                  </div>
                </div>
                <h1 className="mb-6 text-6xl font-light tracking-tight md:text-7xl lg:text-8xl">
                  API
                  <span className="block mt-2 text-5xl md:text-6xl lg:text-7xl text-muted-foreground">Documentation</span>
                </h1>
                <p className="mb-10 text-xl leading-relaxed text-muted-foreground md:text-2xl max-w-3xl mx-auto">
                  Build the future of voice-enabled applications with Lexia's powerful, developer-first REST API
                </p>
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <Badge variant="outline" className="text-base font-normal px-5 py-2 border-2">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Coming Soon
                  </Badge>
                  <div className="h-5 w-px bg-border" />
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs font-mono font-normal">
                      v1.0.0
                    </Badge>
                    <span className="text-xs text-muted-foreground">beta</span>
                  </div>
                  <div className="h-5 w-px bg-border" />
                  <span className="text-sm text-muted-foreground">REST • WebSocket • GraphQL</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-b bg-muted/30">
          <div className="container py-8">
            <ScrollAnimation>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { label: "Endpoints", value: "50+", icon: Code },
                  { label: "Uptime", value: "99.9%", icon: Activity },
                  { label: "Response Time", value: "<100ms", icon: Zap },
                  { label: "Rate Limit", value: "1000/min", icon: GitBranch },
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <stat.icon className="h-5 w-5 text-muted-foreground" />
                    <div className="text-2xl font-light">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-7xl">
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-border" />
                  <Badge variant="outline" className="text-xs font-normal uppercase tracking-wider">
                    Quick Start
                  </Badge>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h2 className="text-center text-4xl font-light tracking-tight md:text-5xl mb-4">
                  Get Started in Seconds
                </h2>
                <p className="text-center text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  Integrate speech recognition into your application with just a few lines of code.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Request Card */}
                <Card className="border-2 rounded-xl overflow-hidden">
                  <CardHeader className="border-b bg-gradient-to-r from-muted/50 to-muted/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge className="font-mono text-xs font-normal bg-blue-500/10 border-blue-500/20 text-blue-500">
                          POST
                        </Badge>
                        <code className="text-sm font-mono text-foreground">/v1/transcribe</code>
                      </div>
                      <Badge variant="outline" className="text-xs font-normal">Live</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Tabs defaultValue="curl" className="w-full">
                      <TabsList className="w-full justify-start rounded-none border-b bg-muted/20 p-0 h-auto">
                        <TabsTrigger value="curl" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground font-normal px-6 py-3">
                          <Terminal className="mr-2 h-3.5 w-3.5" />
                          cURL
                        </TabsTrigger>
                        <TabsTrigger value="javascript" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground font-normal px-6 py-3">
                          <Code className="mr-2 h-3.5 w-3.5" />
                          JavaScript
                        </TabsTrigger>
                        <TabsTrigger value="python" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground font-normal px-6 py-3">
                          <Code className="mr-2 h-3.5 w-3.5" />
                          Python
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="curl" className="m-0 p-6 bg-muted/10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-lg" />
                          <pre className="relative text-xs md:text-sm leading-relaxed overflow-x-auto font-mono">
                            <code className="text-foreground/90">
{`curl https://api.lexiapro.fr/v1/transcribe \\
  -X POST \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: audio/wav" \\
  --data-binary @audio.wav`}
                            </code>
                          </pre>
                        </div>
                      </TabsContent>
                      <TabsContent value="javascript" className="m-0 p-6 bg-muted/10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-lg" />
                          <pre className="relative text-xs md:text-sm leading-relaxed overflow-x-auto font-mono">
                            <code className="text-foreground/90">
{`const response = await fetch(
  'https://api.lexiapro.fr/v1/transcribe',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer sk_live_...',
      'Content-Type': 'audio/wav'
    },
    body: audioFile
  }
);

const { transcript } = await response.json();
console.log(transcript);`}
                            </code>
                          </pre>
                        </div>
                      </TabsContent>
                      <TabsContent value="python" className="m-0 p-6 bg-muted/10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-lg" />
                          <pre className="relative text-xs md:text-sm leading-relaxed overflow-x-auto font-mono">
                            <code className="text-foreground/90">
{`import requests

response = requests.post(
    'https://api.lexiapro.fr/v1/transcribe',
    headers={
        'Authorization': 'Bearer sk_live_...',
        'Content-Type': 'audio/wav'
    },
    data=audio_file
)

data = response.json()
print(data['transcript'])`}
                            </code>
                          </pre>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Response Card */}
                <Card className="border-2 rounded-xl overflow-hidden">
                  <CardHeader className="border-b bg-gradient-to-r from-green-500/10 to-green-500/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <CardTitle className="text-sm font-normal">Response</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs font-normal">200 OK</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 bg-muted/10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-lg" />
                      <pre className="relative text-xs md:text-sm leading-relaxed overflow-x-auto font-mono">
                        <code className="text-foreground/90">
{`{
  "id": "trans_abc123xyz",
  "status": "completed",
  "transcript": "Hello, this is a sample...",
  "confidence": 0.95,
  "language": "en-US",
  "duration": 12.5,
  "timestamp": "2024-01-15T10:30:00Z",
  "metadata": {
    "model": "lexia-v1",
    "sampling_rate": 16000
  }
}`}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Core Features */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 text-center">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="h-px w-16 bg-border" />
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <div className="h-px w-16 bg-border" />
                </div>
                <h2 className="text-4xl font-light tracking-tight md:text-5xl mb-4">
                  Everything You Need
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  A complete API platform designed for developers, by developers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Terminal,
                    title: "REST API",
                    description: "Standard REST endpoints with predictable, resource-oriented URLs. Works with any HTTP client.",
                    features: ["JSON responses", "HTTP/2 support", "Request batching", "Pagination"],
                    color: "from-blue-500/10 to-blue-500/5 border-blue-500/20",
                  },
                  {
                    icon: Zap,
                    title: "Real-time Streaming",
                    description: "WebSocket-based streaming for ultra-low latency transcription. Perfect for live applications.",
                    features: ["Sub-100ms latency", "Bi-directional", "Auto-reconnect", "Multi-stream"],
                    color: "from-purple-500/10 to-purple-500/5 border-purple-500/20",
                  },
                  {
                    icon: Key,
                    title: "API Keys",
                    description: "Granular access control with scoped API keys. Separate keys for development and production.",
                    features: ["Scoped permissions", "Rate limiting", "Usage analytics", "Key rotation"],
                    color: "from-orange-500/10 to-orange-500/5 border-orange-500/20",
                  },
                  {
                    icon: Lock,
                    title: "Enterprise Security",
                    description: "Bank-level encryption, SOC 2 Type II certified, and GDPR compliant. Your data is safe.",
                    features: ["End-to-end encryption", "SOC 2 certified", "GDPR compliant", "Audit logs"],
                    color: "from-red-500/10 to-red-500/5 border-red-500/20",
                  },
                  {
                    icon: Server,
                    title: "High Availability",
                    description: "99.9% uptime SLA with automatic failover, global edge locations, and zero-downtime deployments.",
                    features: ["99.9% SLA", "Multi-region", "Auto-scaling", "Edge CDN"],
                    color: "from-green-500/10 to-green-500/5 border-green-500/20",
                  },
                  {
                    icon: Activity,
                    title: "Analytics & Monitoring",
                    description: "Real-time dashboards, usage metrics, error tracking, and cost analysis. All in one place.",
                    features: ["Usage metrics", "Error tracking", "Cost analysis", "Alerting"],
                    color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20",
                  },
                ].map((feature, index) => (
                  <ScrollAnimation key={index} delay={index * 50}>
                    <Card className={`border-2 rounded-xl p-6 h-full group hover:shadow-md transition-all duration-300 bg-gradient-to-br ${feature.color}`}>
                      <div className="mb-4 flex items-start justify-between">
                        <div className={`rounded-xl border bg-gradient-to-br ${feature.color} p-3 group-hover:opacity-80 transition-opacity`}>
                          <feature.icon className="h-6 w-6 text-foreground/80" />
                        </div>
                        <Badge variant="outline" className="text-xs font-normal">
                          Beta
                        </Badge>
                      </div>
                      <h3 className="mb-2 text-xl font-light">{feature.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-foreground/70">
                            <div className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Coming Soon CTA */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-5xl">
              <Card className="border-2 rounded-2xl p-16 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-foreground/5 to-transparent rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-center opacity-25">
                    <LiveWaveform
                      active={true}
                      processing={true}
                      height={120}
                      barWidth={4}
                      barGap={2}
                      mode="dynamic"
                      fadeEdges={true}
                      barColor="gray"
                      historySize={140}
                    />
                  </div>
                  <div className="mb-6 flex items-center justify-center">
                    <Badge variant="outline" className="text-base font-normal px-5 py-2 border-2">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Badge>
                  </div>
                  <h2 className="mb-4 text-4xl font-light tracking-tight md:text-5xl">
                    Join the Early Access Program
                  </h2>
                  <p className="mb-10 text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                    Be among the first developers to build with Lexia's API. Get priority access, dedicated support, and early feedback opportunities.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact">
                      <button className="inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 text-base font-normal text-background transition-all hover:bg-foreground/90 hover:scale-105">
                        Request Early Access
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="inline-flex items-center justify-center rounded-md border-2 border-foreground/20 px-8 py-3 text-base font-normal transition-all hover:bg-muted hover:border-foreground/30">
                        Contact Sales
                      </button>
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
