"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { 
  Factory, 
  Mic, 
  ClipboardList, 
  Headphones, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Package, 
  Wrench,
  Clock,
  Users,
  TrendingDown,
  FileText,
  Phone,
  AlertTriangle,
  Search,
  Send,
  ChevronRight,
  Volume2,
  CircleDot,
  Activity,
  Gauge,
  Eye,
  Timer,
  Cpu,
  ArrowDownRight,
  X,
  Keyboard,
  Brain,
  Layers,
  BadgeCheck,
  Globe,
  Lock,
  Server,
  MonitorSmartphone
} from "lucide-react"
import Link from "next/link"

/* ─── Waveform ─── */
function VoiceWaveform({ active, color = "orange" }: { active: boolean; color?: string }) {
  const bars = useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
    delay: i * 0.03,
    duration: 0.35 + Math.random() * 0.4,
    base: 3 + Math.sin(i * 0.6) * 2,
  })), [])

  return (
    <div className="flex items-end gap-[2px] h-10 px-1">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width: '2px',
            height: active ? `${bar.base + Math.random() * 20}px` : '2px',
            background: active
              ? `hsl(var(--${color === 'blue' ? '217 91% 60%' : color === 'emerald' ? '160 84% 39%' : '25 95% 53%'}))`
              : 'hsl(var(--muted-foreground) / 0.15)',
            opacity: active ? 0.4 + Math.random() * 0.6 : 0.3,
            animation: active ? `waveBar ${bar.duration}s ease-in-out infinite alternate` : 'none',
            animationDelay: `${bar.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ─── Typed transcription ─── */
function TypedTranscription({ 
  text, highlights, active, speed = 30 
}: { 
  text: string
  highlights: { word: string; color: string; label: string; confidence?: number }[]
  active: boolean
  speed?: number
}) {
  const [displayedLength, setDisplayedLength] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!active) { setDisplayedLength(0); return }
    setDisplayedLength(0)
    intervalRef.current = setInterval(() => {
      setDisplayedLength(prev => {
        if (prev >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          return prev
        }
        return prev + 1
      })
    }, speed)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [active, text, speed])

  const displayed = text.slice(0, displayedLength)
  let result = displayed
  highlights.forEach(h => {
    const regex = new RegExp(`(${h.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    result = result.replace(regex, `<mark class="px-1 rounded ${h.color} font-medium not-italic text-[13px]">$1</mark>`)
  })

  return (
    <div className="font-mono text-[13px] leading-[1.8] tracking-tight text-foreground/80">
      <span dangerouslySetInnerHTML={{ __html: result }} />
      {displayedLength < text.length && active && (
        <span className="inline-block w-[2px] h-[14px] bg-foreground/60 ml-0.5 animate-pulse align-middle" />
      )}
    </div>
  )
}

/* ─── Window chrome (macOS style app window header) ─── */
function WindowChrome({ title, status, statusColor = "emerald", right }: { 
  title: string; status?: string; statusColor?: string; right?: React.ReactNode 
}) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-b bg-muted/40">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[11px] font-medium text-muted-foreground">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {status && (
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full bg-${statusColor}-500/10 text-${statusColor}-600 dark:text-${statusColor}-400 flex items-center gap-1`}>
            <span className={`w-1.5 h-1.5 rounded-full bg-${statusColor}-500 animate-pulse`} />
            {status}
          </span>
        )}
        {right}
      </div>
    </div>
  )
}

/* ─── Horizontal stepper with connecting lines ─── */
function ProcessStepper({ steps, currentStep }: { 
  steps: { icon: any; label: string }[]; currentStep: number 
}) {
  return (
    <div className="flex items-center w-full mb-10">
      {steps.map((s, i) => {
        const Icon = s.icon
        const isActive = i <= currentStep
        const isCurrentlyProcessing = i === currentStep
        return (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5 relative">
              <div className={`
                w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-500
                ${isActive 
                  ? 'bg-foreground border-foreground text-background' 
                  : 'bg-background border-muted-foreground/20 text-muted-foreground/40'}
                ${isCurrentlyProcessing ? 'ring-4 ring-foreground/10' : ''}
              `}>
                <Icon className="h-4 w-4" />
              </div>
              <span className={`text-[10px] font-medium transition-all duration-500 whitespace-nowrap ${isActive ? 'text-foreground' : 'text-muted-foreground/40'}`}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 mx-2 mt-[-18px]">
                <div className="h-[2px] bg-muted-foreground/10 rounded-full relative overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-foreground rounded-full transition-all duration-700 ease-out"
                    style={{ width: i < currentStep ? '100%' : '0%' }}
                  />
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ─── Entity tag with confidence ─── */
function EntityTag({ label, value, color, confidence }: { 
  label: string; value: string; color: string; confidence: number 
}) {
  return (
    <div className={`inline-flex items-center gap-1.5 pl-2 pr-1 py-1 rounded-md border ${color} text-[10px] font-medium`}>
      <span className="opacity-60">{label}</span>
      <span>{value}</span>
      <span className="text-[9px] opacity-40 font-mono ml-0.5">{confidence}%</span>
    </div>
  )
}


export function ManufacturingContent() {
  const [d1, setD1] = useState(false)
  const [d1s, setD1s] = useState(-1)
  const [d2, setD2] = useState(false)
  const [d2s, setD2s] = useState(-1)
  const [d3, setD3] = useState(false)
  const [d3s, setD3s] = useState(-1)

  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === ref1.current && entry.isIntersecting && !d1) {
            setD1(true); setD1s(0)
            setTimeout(() => setD1s(1), 1200)
            setTimeout(() => setD1s(2), 4200)
            setTimeout(() => setD1s(3), 6200)
          }
          if (entry.target === ref2.current && entry.isIntersecting && !d2) {
            setD2(true); setD2s(0)
            setTimeout(() => setD2s(1), 1000)
            setTimeout(() => setD2s(2), 3800)
            setTimeout(() => setD2s(3), 5800)
          }
          if (entry.target === ref3.current && entry.isIntersecting && !d3) {
            setD3(true); setD3s(0)
            setTimeout(() => setD3s(1), 1000)
            setTimeout(() => setD3s(2), 3600)
            setTimeout(() => setD3s(3), 5400)
          }
        })
      },
      { threshold: 0.2 }
    )
    if (ref1.current) observer.observe(ref1.current)
    if (ref2.current) observer.observe(ref2.current)
    if (ref3.current) observer.observe(ref3.current)
    return () => observer.disconnect()
  }, [d1, d2, d3])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">

        <style jsx>{`
          @keyframes waveBar {
            0% { transform: scaleY(0.4); }
            100% { transform: scaleY(1.4); }
          }
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .anim-slide-up {
            animation: fadeSlideUp 0.4s ease-out forwards;
          }
        `}</style>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
          <div className="container py-28 md:py-40 relative">
            <ScrollAnimation>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-8">
                  <Factory className="h-3 w-3" />
                  Manufacturing
                </div>
                <h1 className="mb-6 text-4xl font-light tracking-[-0.025em] md:text-5xl lg:text-[3.5rem] leading-[1.08]">
                  Voice AI built{" "}
                  <br className="hidden md:block" />
                  <span className="font-extralight text-muted-foreground">for manufacturing</span>
                </h1>
                <p className="text-base leading-relaxed text-muted-foreground max-w-xl mx-auto mb-10">
                  Transform every voice interaction into structured data.
                  Part references, article codes, industry terminology — Lexia understands
                  your teams&#39; language and feeds directly into your systems.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/contact">
                    <Button size="lg" className="font-normal h-11 px-6">
                      Request a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="font-normal h-11 px-6 text-muted-foreground"
                    onClick={() => document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Use Cases
                    <ArrowDownRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ── Key figures ── */}
        <section className="border-y bg-muted/10">
          <div className="container py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "+99%", label: "Industry jargon accuracy", icon: Zap },
                { value: "<200ms", label: "Real-time latency", icon: Timer },
                { value: "On-Prem", label: "Sovereign deployment", icon: Shield },
                { value: "SAP, SF", label: "Native integrations", icon: Database },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-3 justify-center">
                  <m.icon className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
                  <div>
                    <span className="text-lg font-light tracking-tight">{m.value}</span>
                    <p className="text-[10px] text-muted-foreground">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Field observations</p>
              <h2 className="mb-12 text-2xl font-light tracking-tight md:text-3xl max-w-lg">
                The friction you face every day
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
                {[
                  { icon: TrendingDown, title: "Slow manual entry", desc: "Your operators leave their workstation to enter data on a terminal. Reference errors, incomplete tickets, wasted time." },
                  { icon: Users, title: "Overwhelmed after-sales", desc: "Hundreds of daily calls, duplicate CRM entry, critical information lost between the phone and the software." },
                  { icon: Package, title: "Incomplete traceability", desc: "Quality reports filled in after the fact, non-conformances reported at end of shift. You lose responsiveness." },
                ].map((p, i) => (
                  <ScrollAnimation key={i} delay={i * 80}>
                    <div className="bg-background p-8 h-full">
                      <p.icon className="h-5 w-5 text-muted-foreground/40 mb-4" />
                      <h3 className="text-sm font-medium mb-2">{p.title}</h3>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* ── Avant / Avec Lexia ── */}
        <section className="border-t bg-muted/5">
          <div className="container py-24 md:py-32">
            <ScrollAnimation>
              <div className="mx-auto max-w-5xl">
                <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-4 text-center">Comparison</p>
                <h2 className="mb-14 text-2xl font-light tracking-tight md:text-3xl text-center max-w-md mx-auto">
                  Before and after Lexia
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* AVANT */}
                  <ScrollAnimation delay={0}>
                    <div className="rounded-xl md:rounded-r-none border-2 border-dashed border-muted-foreground/15 p-8 md:p-10 h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/40 to-orange-500/40" />
                      <div className="flex items-center gap-2 mb-8">
                        <X className="h-4 w-4 text-red-500/60" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Without Lexia</span>
                      </div>
                      <div className="space-y-6">
                        {[
                          { icon: Keyboard, text: "Manual entry on terminal after each intervention" },
                          { icon: Clock, text: "5 to 10 min per ticket — queue at the data entry station" },
                          { icon: AlertTriangle, text: "15% errors on part references and article codes" },
                          { icon: Users, text: "Duplicate after-sales entry: call, take notes, then re-type into CRM" },
                          { icon: FileText, text: "Quality reports filled from memory at end of shift" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg border border-dashed border-muted-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <item.icon className="h-3.5 w-3.5 text-muted-foreground/40" />
                            </div>
                            <p className="text-[13px] text-muted-foreground leading-relaxed">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* AVEC LEXIA */}
                  <ScrollAnimation delay={100}>
                    <div className="rounded-xl md:rounded-l-none border-2 border-foreground/10 p-8 md:p-10 h-full relative overflow-hidden bg-foreground/[0.02]">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                      <div className="flex items-center gap-2 mb-8">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span className="text-xs font-medium text-foreground uppercase tracking-widest">With Lexia</span>
                      </div>
                      <div className="space-y-6">
                        {[
                          { icon: Mic, text: "Voice dictation directly from the workstation, hands-free" },
                          { icon: Zap, text: "Ticket created in under 30 seconds, zero movement" },
                          { icon: CheckCircle2, text: "+99% accuracy on industry references and article codes" },
                          { icon: Database, text: "After-sales call transcribed and injected into CRM automatically" },
                          { icon: Eye, text: "Quality report dictated in real time during inspection" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                              <item.icon className="h-3.5 w-3.5 text-background" />
                            </div>
                            <p className="text-[13px] text-foreground leading-relaxed">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            USE CASE 1 — Voice Tickets
        ══════════════════════════════════════════════ */}
        <section id="use-cases" className="border-t bg-muted/5">
          <div className="container py-24 md:py-32">
            <div className="mx-auto max-w-6xl">
              <ScrollAnimation>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ClipboardList className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-1">Use Case 01 — Production &amp; Supply Chain</p>
                    <h2 className="text-2xl font-light tracking-tight md:text-3xl">Voice-powered ticket creation</h2>
                  </div>
                </div>
                <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl ml-14 mb-14">
                  On the production line, your operators dictate their maintenance
                  or non-conformance tickets. Lexia recognizes part references and feeds directly into your CMMS.
                </p>
              </ScrollAnimation>

              <div ref={ref1}>
                <ScrollAnimation delay={50}>
                  <ProcessStepper 
                    steps={[
                      { icon: Mic, label: "Capture" },
                      { icon: Cpu, label: "Transcription" },
                      { icon: Search, label: "Extraction" },
                      { icon: Send, label: "CMMS" },
                    ]}
                    currentStep={d1s}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    {/* Input side */}
                    <div className="lg:col-span-5 space-y-4">
                      {/* Audio window */}
                      <div className="rounded-xl border overflow-hidden shadow-sm">
                        <WindowChrome 
                          title="lexia-voice  —  Workshop B3" 
                          status={d1 && d1s < 2 ? "REC" : undefined}
                          statusColor="red"
                          right={
                            d1 ? <span className="text-[10px] font-mono text-muted-foreground/60">00:04.2s</span> : null
                          }
                        />
                        <div className="p-5 bg-background flex items-center justify-center min-h-[56px]">
                          <VoiceWaveform active={d1 && d1s >= 0 && d1s < 2} color="orange" />
                        </div>
                      </div>

                      {/* Transcription window */}
                      <div className="rounded-xl border overflow-hidden shadow-sm">
                        <WindowChrome 
                          title="lexia-transcribe" 
                          status={d1s >= 1 && d1s < 3 ? "LIVE" : d1s >= 3 ? "DONE" : undefined}
                          statusColor={d1s >= 3 ? "emerald" : "amber"}
                        />
                        <div className="p-5 bg-background min-h-[140px]">
                          {d1s >= 1 ? (
                            <>
                              <TypedTranscription
                                active={d1s >= 1}
                                text={`Maintenance ticket for hydraulic press PH-340, part reference KLM-2847-B, pressure fault on secondary circuit, high priority.`}
                                highlights={d1s >= 2 ? [
                                  { word: "PH-340", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400", label: "Equipment", confidence: 99 },
                                  { word: "KLM-2847-B", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400", label: "Part ref.", confidence: 98 },
                                  { word: "pressure fault on secondary circuit", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400", label: "Fault type", confidence: 97 },
                                  { word: "high priority", color: "bg-red-500/15 text-red-600 dark:text-red-400", label: "Priority", confidence: 99 },
                                ] : []}
                                speed={28}
                              />
                              {d1s >= 2 && (
                                <div className="mt-5 pt-4 border-t border-dashed flex flex-wrap gap-1.5 anim-slide-up">
                                  <EntityTag label="EQUIPMENT" value="PH-340" color="bg-blue-500/5 border-blue-500/20 text-blue-600 dark:text-blue-400" confidence={99} />
                                  <EntityTag label="PART" value="KLM-2847-B" color="bg-violet-500/5 border-violet-500/20 text-violet-600 dark:text-violet-400" confidence={98} />
                                  <EntityTag label="FAULT" value="Hydraulic" color="bg-orange-500/5 border-orange-500/20 text-orange-600 dark:text-orange-400" confidence={97} />
                                  <EntityTag label="PRIORITY" value="P1" color="bg-red-500/5 border-red-500/20 text-red-600 dark:text-red-400" confidence={99} />
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="flex items-center gap-2 text-[13px] text-muted-foreground/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
                              Waiting for audio stream...
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
                      <div className={`flex flex-col items-center gap-2 transition-all duration-700 ${d1s >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/20 to-foreground/20" />
                        <ChevronRight className="h-4 w-4 text-foreground/30" />
                        <span className="text-[9px] font-mono text-muted-foreground/40">210ms</span>
                      </div>
                    </div>

                    {/* Output — GMAO Ticket */}
                    <div className={`lg:col-span-5 transition-all duration-700 ${d1s >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="rounded-xl border overflow-hidden shadow-sm h-full">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-emerald-500/[0.04]">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="text-[11px] font-medium">CMMS — Ticket #MT-2847</span>
                          </div>
                          <span className="text-[9px] font-mono text-muted-foreground/50">08/02/2026 14:32:07</span>
                        </div>
                        <div className="p-5 bg-background space-y-3">
                          <div className="grid grid-cols-2 gap-2.5">
                            {[
                              { label: "Equipment", value: "Hydraulic press PH-340" },
                              { label: "Part reference", value: "KLM-2847-B", mono: true },
                              { label: "Category", value: "Hydraulic — Sec. circuit" },
                              { label: "Priority", value: "P1 — High", dot: "bg-red-500" },
                            ].map((f, i) => (
                              <div key={i} className="rounded-lg border p-2.5 bg-muted/20">
                                <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">{f.label}</p>
                                <div className="flex items-center gap-1.5">
                                  {f.dot && <span className={`w-1.5 h-1.5 rounded-full ${f.dot}`} />}
                                  <p className={`text-[13px] font-medium ${f.mono ? 'font-mono' : ''} ${f.dot ? 'text-red-600 dark:text-red-400' : ''}`}>{f.value}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="rounded-lg border p-2.5 bg-muted/20">
                            <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Auto-generated description</p>
                            <p className="text-[13px] text-muted-foreground leading-relaxed">Pressure fault detected on secondary circuit of hydraulic press PH-340. Intervention required.</p>
                          </div>
                          <div className="pt-2 flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-[10px] text-emerald-600/70 dark:text-emerald-400/70">
                              <CheckCircle2 className="h-3 w-3" /> Maintenance team notified
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-emerald-600/70 dark:text-emerald-400/70">
                              <CheckCircle2 className="h-3 w-3" /> Sync SAP PM
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Metrics */}
                <div className="mt-14 grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
                  {[
                    { value: "÷3", label: "Entry time", sub: "vs. manual entry on terminal" },
                    { value: "0", label: "Reference errors", sub: "Industry jargon recognition" },
                    { value: "100%", label: "Hands-free", sub: "Compatible with PPE, gloves, helmet" },
                  ].map((m, i) => (
                    <ScrollAnimation key={i} delay={80 * i}>
                      <div className="bg-background p-6 text-center">
                        <div className="text-2xl font-extralight tracking-tight mb-1">{m.value}</div>
                        <p className="text-xs font-medium mb-0.5">{m.label}</p>
                        <p className="text-[10px] text-muted-foreground">{m.sub}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            USE CASE 2 — SAV Automation
        ══════════════════════════════════════════════ */}
        <section className="border-t">
          <div className="container py-24 md:py-32">
            <div className="mx-auto max-w-6xl">
              <ScrollAnimation>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Headphones className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-1">Use Case 02 — After-Sales Service</p>
                    <h2 className="text-2xl font-light tracking-tight md:text-3xl">Automated after-sales call processing</h2>
                  </div>
                </div>
                <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl ml-14 mb-14">
                  Every call is transcribed in real time, automatically categorized,
                  and injected into your CRM. No more duplicate entry, no more incomplete tickets.
                </p>
              </ScrollAnimation>

              <div ref={ref2}>
                <ScrollAnimation delay={50}>
                  <ProcessStepper 
                    steps={[
                      { icon: Phone, label: "Incoming call" },
                      { icon: Cpu, label: "Transcription" },
                      { icon: Search, label: "Categorization" },
                      { icon: Database, label: "CRM / ERP" },
                    ]}
                    currentStep={d2s}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-5 space-y-4">
                      {/* Phone call */}
                      <div className="rounded-xl border overflow-hidden shadow-sm">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-muted/40">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${d2 ? 'bg-foreground' : 'bg-muted'}`}>
                              <Phone className="h-3.5 w-3.5 text-background" />
                            </div>
                            <div>
                              <p className="text-[11px] font-medium">+33 4 72 XX XX XX</p>
                              <p className="text-[9px] text-muted-foreground">After-sales line — Industrial equipment</p>
                            </div>
                          </div>
                          {d2 && (
                            <div className="flex items-center gap-1.5">
                              <CircleDot className="h-2 w-2 text-red-500 animate-pulse" />
                              <span className="text-[10px] font-mono text-muted-foreground/60">02:34</span>
                            </div>
                          )}
                        </div>
                        <div className="p-5 bg-background flex items-center justify-center min-h-[56px]">
                          <VoiceWaveform active={d2 && d2s >= 0 && d2s < 2} color="blue" />
                        </div>
                      </div>

                      {/* Transcription */}
                      <div className="rounded-xl border overflow-hidden shadow-sm">
                        <WindowChrome 
                          title="lexia-transcribe" 
                          status={d2s >= 1 && d2s < 3 ? "LIVE" : d2s >= 3 ? "DONE" : undefined}
                          statusColor={d2s >= 3 ? "emerald" : "amber"}
                        />
                        <div className="p-5 bg-background min-h-[160px]">
                          {d2s >= 1 ? (
                            <>
                              <TypedTranscription
                                active={d2s >= 1}
                                text={`Hello, I have a problem with my generator model GE-5500. It starts but stops after 30 seconds. I bought it in March 2024, serial number SN-44821. It should still be under warranty.`}
                                highlights={d2s >= 2 ? [
                                  { word: "GE-5500", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400", label: "Product", confidence: 99 },
                                  { word: "SN-44821", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400", label: "Serial #", confidence: 99 },
                                  { word: "starts but stops after 30 seconds", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400", label: "Symptom", confidence: 96 },
                                  { word: "March 2024", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400", label: "Purchase date", confidence: 98 },
                                  { word: "under warranty", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400", label: "Status", confidence: 94 },
                                ] : []}
                                speed={22}
                              />
                              {d2s >= 2 && (
                                <div className="mt-5 pt-4 border-t border-dashed flex flex-wrap gap-1.5 anim-slide-up">
                                  <EntityTag label="PRODUCT" value="GE-5500" color="bg-blue-500/5 border-blue-500/20 text-blue-600 dark:text-blue-400" confidence={99} />
                                  <EntityTag label="SERIAL" value="SN-44821" color="bg-violet-500/5 border-violet-500/20 text-violet-600 dark:text-violet-400" confidence={99} />
                                  <EntityTag label="CATEGORY" value="Fault" color="bg-red-500/5 border-red-500/20 text-red-600 dark:text-red-400" confidence={97} />
                                  <EntityTag label="WARRANTY" value="Active" color="bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" confidence={94} />
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="flex items-center gap-2 text-[13px] text-muted-foreground/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
                              Waiting for call...
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
                      <div className={`flex flex-col items-center gap-2 transition-all duration-700 ${d2s >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/20 to-foreground/20" />
                        <ChevronRight className="h-4 w-4 text-foreground/30" />
                        <span className="text-[9px] font-mono text-muted-foreground/40">180ms</span>
                      </div>
                    </div>

                    {/* Output — CRM */}
                    <div className={`lg:col-span-5 transition-all duration-700 ${d2s >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="rounded-xl border overflow-hidden shadow-sm h-full">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-emerald-500/[0.04]">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="text-[11px] font-medium">Salesforce — #SAV-9412</span>
                          </div>
                          <span className="text-[9px] font-mono text-muted-foreground/50">08/02/2026 14:35:41</span>
                        </div>
                        <div className="p-5 bg-background space-y-3">
                          <div className="rounded-lg border p-2.5 bg-muted/20">
                            <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Customer</p>
                            <p className="text-[13px] font-medium">+33 4 72 XX XX XX — <span className="text-muted-foreground font-normal">identified via SN-44821</span></p>
                          </div>
                          <div className="grid grid-cols-2 gap-2.5">
                            <div className="rounded-lg border p-2.5 bg-muted/20">
                              <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Product</p>
                              <p className="text-[13px] font-medium">GE-5500</p>
                            </div>
                            <div className="rounded-lg border p-2.5 bg-muted/20">
                              <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Serial #</p>
                              <p className="text-[13px] font-medium font-mono">SN-44821</p>
                            </div>
                            <div className="rounded-lg border p-2.5 bg-muted/20">
                              <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Category</p>
                              <p className="text-[13px] font-medium flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500" />Fault — Power supply</p>
                            </div>
                            <div className="rounded-lg border p-2.5 bg-muted/20">
                              <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Warranty</p>
                              <p className="text-[13px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Active (03/2024)</p>
                            </div>
                          </div>
                          <div className="rounded-lg border p-2.5 bg-muted/20">
                            <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Symptom</p>
                            <p className="text-[13px] text-muted-foreground leading-relaxed">Starts then stops after 30s. Probable fuel supply issue.</p>
                          </div>
                          <div className="rounded-lg border p-2.5 bg-amber-500/[0.04] border-amber-500/15">
                            <p className="text-[9px] text-amber-600 uppercase tracking-wider mb-0.5 font-medium">Automatic action</p>
                            <p className="text-[13px] text-muted-foreground">Escalated to N2 technician — time slots offered within 48h</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <div className="mt-14 grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
                  {[
                    { value: "-60%", label: "Processing time", sub: "Per after-sales ticket" },
                    { value: "100%", label: "Documented calls", sub: "Zero information loss" },
                    { value: "÷2", label: "Cost per ticket", sub: "CRM/ERP automation" },
                  ].map((m, i) => (
                    <ScrollAnimation key={i} delay={80 * i}>
                      <div className="bg-background p-6 text-center">
                        <div className="text-2xl font-extralight tracking-tight mb-1">{m.value}</div>
                        <p className="text-xs font-medium mb-0.5">{m.label}</p>
                        <p className="text-[10px] text-muted-foreground">{m.sub}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            USE CASE 3 — Quality Inspection
        ══════════════════════════════════════════════ */}
        <section className="border-t bg-muted/5">
          <div className="container py-24 md:py-32">
            <div className="mx-auto max-w-6xl">
              <ScrollAnimation>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-1">Use Case 03 — Quality Control</p>
                    <h2 className="text-2xl font-light tracking-tight md:text-3xl">Voice inspection reports</h2>
                  </div>
                </div>
                <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl ml-14 mb-14">
                  Your inspectors dictate their observations during rounds. Lexia automatically
                  structures the report, checks tolerances, and triggers alerts.
                </p>
              </ScrollAnimation>

              <div ref={ref3}>
                <ScrollAnimation delay={50}>
                  <ProcessStepper 
                    steps={[
                      { icon: Mic, label: "Field dictation" },
                      { icon: Cpu, label: "Transcription" },
                      { icon: Gauge, label: "Analysis" },
                      { icon: FileText, label: "Report" },
                    ]}
                    currentStep={d3s}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="rounded-xl border overflow-hidden shadow-sm">
                        <WindowChrome 
                          title="lexia-voice  —  Inspection station #7" 
                          status={d3 && d3s < 2 ? "REC" : undefined}
                          statusColor="red"
                          right={d3 ? <span className="text-[10px] font-mono text-muted-foreground/60">Round 2:00 PM</span> : null}
                        />
                        <div className="p-5 bg-background flex items-center justify-center min-h-[56px]">
                          <VoiceWaveform active={d3 && d3s >= 0 && d3s < 2} color="emerald" />
                        </div>
                      </div>

                      <div className="rounded-xl border overflow-hidden shadow-sm">
                        <WindowChrome 
                          title="lexia-transcribe" 
                          status={d3s >= 1 && d3s < 3 ? "LIVE" : d3s >= 3 ? "DONE" : undefined}
                          statusColor={d3s >= 3 ? "emerald" : "amber"}
                        />
                        <div className="p-5 bg-background min-h-[140px]">
                          {d3s >= 1 ? (
                            <>
                              <TypedTranscription
                                active={d3s >= 1}
                                text={`Inspection lot 2847, reference ALU-PRO-25. Dimension A: 12.3 millimeters, tolerance 12.0 plus or minus 0.5. Compliant. Surface condition face B: minor micro-scratches, non-blocking.`}
                                highlights={d3s >= 2 ? [
                                  { word: "lot 2847", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400", label: "Lot #", confidence: 99 },
                                  { word: "ALU-PRO-25", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400", label: "Reference", confidence: 99 },
                                  { word: "12.3 millimeters", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400", label: "Measurement", confidence: 98 },
                                  { word: "12.0 plus or minus 0.5", color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400", label: "Tolerance", confidence: 99 },
                                  { word: "Compliant", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400", label: "Verdict", confidence: 99 },
                                  { word: "minor micro-scratches", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400", label: "Observation", confidence: 95 },
                                ] : []}
                                speed={24}
                              />
                              {d3s >= 2 && (
                                <div className="mt-5 pt-4 border-t border-dashed flex flex-wrap gap-1.5 anim-slide-up">
                                  <EntityTag label="LOT" value="2847" color="bg-blue-500/5 border-blue-500/20 text-blue-600 dark:text-blue-400" confidence={99} />
                                  <EntityTag label="REF" value="ALU-PRO-25" color="bg-violet-500/5 border-violet-500/20 text-violet-600 dark:text-violet-400" confidence={99} />
                                  <EntityTag label="DIM. A" value="12.3mm" color="bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" confidence={98} />
                                  <EntityTag label="VERDICT" value="Compliant" color="bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" confidence={99} />
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="flex items-center gap-2 text-[13px] text-muted-foreground/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
                              Waiting for dictation...
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
                      <div className={`flex flex-col items-center gap-2 transition-all duration-700 ${d3s >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/20 to-foreground/20" />
                        <ChevronRight className="h-4 w-4 text-foreground/30" />
                        <span className="text-[9px] font-mono text-muted-foreground/40">195ms</span>
                      </div>
                    </div>

                    {/* Output — Quality Report */}
                    <div className={`lg:col-span-5 transition-all duration-700 ${d3s >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="rounded-xl border overflow-hidden shadow-sm h-full">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-emerald-500/[0.04]">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="text-[11px] font-medium">SAP QM — Report #QC-2847</span>
                          </div>
                          <span className="text-[9px] font-mono text-muted-foreground/50">08/02/2026 14:02:18</span>
                        </div>
                        <div className="p-5 bg-background space-y-3">
                          <div className="grid grid-cols-2 gap-2.5">
                            <div className="rounded-lg border p-2.5 bg-muted/20">
                              <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Batch</p>
                              <p className="text-[13px] font-medium font-mono">2847</p>
                            </div>
                            <div className="rounded-lg border p-2.5 bg-muted/20">
                              <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Reference</p>
                              <p className="text-[13px] font-medium font-mono">ALU-PRO-25</p>
                            </div>
                          </div>

                          {/* Tolerance gauge */}
                          <div className="rounded-lg border p-3 bg-muted/20">
                            <div className="flex items-center justify-between mb-2.5">
                              <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider">Dimension A — Dimensional inspection</p>
                              <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 flex items-center gap-1">
                                <CheckCircle2 className="h-2.5 w-2.5" /> COMPLIANT
                              </span>
                            </div>
                            <div className="relative">
                              <div className="flex items-center justify-between text-[9px] text-muted-foreground/50 mb-1">
                                <span>11.0</span>
                                <span>12.0 ± 0.5</span>
                                <span>13.0</span>
                              </div>
                              <div className="h-2 bg-muted/50 rounded-full relative overflow-hidden">
                                <div className="absolute inset-y-0 left-[25%] right-[25%] bg-emerald-500/15 rounded-full" />
                                <div className="absolute inset-y-0 left-[37.5%] right-[37.5%] bg-emerald-500/25 rounded-full" />
                                <div 
                                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-background shadow-sm"
                                  style={{ left: 'calc(25% + 65%)' }}
                                />
                              </div>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-[10px] text-muted-foreground">Measured: <span className="font-medium font-mono text-foreground">12.3 mm</span></span>
                                <span className="text-[10px] text-muted-foreground/50">|</span>
                                <span className="text-[10px] text-muted-foreground">Tol: <span className="font-mono">11.5 — 12.5 mm</span></span>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border p-2.5 bg-amber-500/[0.04] border-amber-500/15">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <AlertTriangle className="h-3 w-3 text-amber-500" />
                              <p className="text-[9px] text-amber-600 uppercase tracking-wider font-medium">Observation — Minor</p>
                            </div>
                            <p className="text-[13px] text-muted-foreground">Micro-scratches on face B. Non-blocking for lot compliance.</p>
                          </div>

                          <div className="pt-1 flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-[10px] text-emerald-600/70 dark:text-emerald-400/70">
                              <CheckCircle2 className="h-3 w-3" /> Integrated SAP QM
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-emerald-600/70 dark:text-emerald-400/70">
                              <CheckCircle2 className="h-3 w-3" /> Lot file updated
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <div className="mt-14 grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
                  {[
                    { value: "÷4", label: "Reporting time", sub: "From observation to final report" },
                    { value: "100%", label: "Traceability", sub: "Every inspection documented" },
                    { value: "+40%", label: "NCs detected", sub: "Ease of reporting" },
                  ].map((m, i) => (
                    <ScrollAnimation key={i} delay={80 * i}>
                      <div className="bg-background p-6 text-center">
                        <div className="text-2xl font-extralight tracking-tight mb-1">{m.value}</div>
                        <p className="text-xs font-medium mb-0.5">{m.label}</p>
                        <p className="text-[10px] text-muted-foreground">{m.sub}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Integration ── */}
        <section className="border-t">
          <div className="container py-24 md:py-32">
            <ScrollAnimation>
              <div className="mx-auto max-w-4xl">
                <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-4">Ecosystem</p>
                <h2 className="mb-4 text-2xl font-light tracking-tight md:text-3xl">
                  Native integration with your tools
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed max-w-lg mb-12">
                  Lexia adapts to your infrastructure. Not the other way around.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
                  {[
                    { name: "SAP", desc: "ERP, PM, QM" },
                    { name: "Salesforce", desc: "CRM, Service Cloud" },
                    { name: "CMMS", desc: "Carl, Maximo, Coswin" },
                    { name: "MES", desc: "Scheduling" },
                    { name: "Microsoft", desc: "Dynamics, Teams" },
                    { name: "API REST", desc: "Custom endpoints" },
                    { name: "Webhooks", desc: "Real-time events" },
                    { name: "On-Premise", desc: "Air-gap, sovereign" },
                  ].map((tool, i) => (
                    <ScrollAnimation key={i} delay={40 * i}>
                      <div className="bg-background p-5 text-center h-full hover:bg-muted/30 transition-colors">
                        <p className="text-sm font-medium mb-0.5">{tool.name}</p>
                        <p className="text-[10px] text-muted-foreground">{tool.desc}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ── Architecture visuelle ── */}
        <section className="border-t bg-muted/5">
          <div className="container py-24 md:py-32">
            <ScrollAnimation>
              <div className="mx-auto max-w-5xl">
                <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-4 text-center">Architecture</p>
                <h2 className="mb-4 text-2xl font-light tracking-tight md:text-3xl text-center">
                  How Lexia integrates
                </h2>
                <p className="text-[15px] text-muted-foreground text-center max-w-lg mx-auto mb-16">
                  From the operator&#39;s microphone to your ERP, in under 200 milliseconds.
                </p>

                {/* Visual flow diagram */}
                <div className="relative">
                  {/* Row 1 — Input sources */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[
                      { icon: Mic, label: "Field operator", sub: "Headset / PPE mic" },
                      { icon: Phone, label: "Incoming after-sales call", sub: "Phone line" },
                      { icon: MonitorSmartphone, label: "Mobile application", sub: "Tablet / Smartphone" },
                    ].map((src, i) => (
                      <ScrollAnimation key={i} delay={i * 80}>
                        <div className="rounded-xl border-2 border-dashed border-muted-foreground/15 p-5 text-center h-full">
                          <div className="w-10 h-10 rounded-full border-2 border-muted-foreground/15 flex items-center justify-center mx-auto mb-3">
                            <src.icon className="h-4 w-4 text-muted-foreground/50" />
                          </div>
                          <p className="text-xs font-medium mb-0.5">{src.label}</p>
                          <p className="text-[10px] text-muted-foreground">{src.sub}</p>
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>

                  {/* Arrows down */}
                  <ScrollAnimation delay={200}>
                    <div className="flex justify-center py-3">
                      <div className="flex items-center gap-8">
                        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/20 to-muted-foreground/40" />
                        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/20 to-muted-foreground/40" />
                        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/20 to-muted-foreground/40" />
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Row 2 — Lexia Core */}
                  <ScrollAnimation delay={300}>
                    <div className="rounded-2xl border-2 border-foreground/15 p-6 md:p-8 relative overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-foreground/[0.02] via-foreground/[0.04] to-foreground/[0.02]" />
                      <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                            <Brain className="h-6 w-6 text-background" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Lexia Engine</p>
                            <p className="text-[10px] text-muted-foreground">Industrial voice AI</p>
                          </div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                          {[
                            { icon: Activity, label: "Transcription", sub: "Real-time" },
                            { icon: Search, label: "Industry NER", sub: "Industrial entities" },
                            { icon: Layers, label: "Structuring", sub: "Auto fields" },
                            { icon: Send, label: "Dispatch", sub: "Multi-system" },
                          ].map((step, i) => (
                            <div key={i} className="text-center">
                              <div className="w-8 h-8 rounded-lg bg-muted/50 border flex items-center justify-center mx-auto mb-1.5">
                                <step.icon className="h-3.5 w-3.5 text-muted-foreground" />
                              </div>
                              <p className="text-[11px] font-medium">{step.label}</p>
                              <p className="text-[9px] text-muted-foreground">{step.sub}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Arrows down */}
                  <ScrollAnimation delay={400}>
                    <div className="flex justify-center py-3">
                      <div className="flex items-center gap-8">
                        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-emerald-500/40" />
                        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-emerald-500/40" />
                        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-emerald-500/40" />
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Row 3 — Output systems */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Wrench, label: "CMMS", sub: "Maintenance tickets", color: "border-emerald-500/20 bg-emerald-500/[0.03]" },
                      { icon: Database, label: "CRM / ERP", sub: "Customer records, after-sales tickets", color: "border-emerald-500/20 bg-emerald-500/[0.03]" },
                      { icon: FileText, label: "Quality", sub: "Reports, compliance", color: "border-emerald-500/20 bg-emerald-500/[0.03]" },
                    ].map((out, i) => (
                      <ScrollAnimation key={i} delay={450 + i * 80}>
                        <div className={`rounded-xl border-2 p-5 text-center h-full ${out.color}`}>
                          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                            <out.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <p className="text-xs font-medium mb-0.5">{out.label}</p>
                          <p className="text-[10px] text-muted-foreground">{out.sub}</p>
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ── Normes & Confiance ── */}
        <section className="border-t">
          <div className="container py-20 md:py-24">
            <ScrollAnimation>
              <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border rounded-xl overflow-hidden">
                  {[
                    { icon: Shield, label: "GDPR", sub: "Compliant" },
                    { icon: Lock, label: "E2E Encrypted", sub: "End-to-end encryption" },
                    { icon: Server, label: "On-Premise", sub: "Air-gap ready" },
                    { icon: Globe, label: "Made in France", sub: "Sovereignty" },
                    { icon: BadgeCheck, label: "ISO 27001", sub: "Certified security" },
                  ].map((badge, i) => (
                    <ScrollAnimation key={i} delay={i * 60}>
                      <div className="bg-background p-6 text-center h-full flex flex-col items-center justify-center gap-2">
                        <badge.icon className="h-5 w-5 text-muted-foreground/40" />
                        <div>
                          <p className="text-xs font-medium">{badge.label}</p>
                          <p className="text-[9px] text-muted-foreground">{badge.sub}</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ── Industrial Image + CTA ── */}
        <section className="relative overflow-hidden">
          <div className="relative h-[480px] md:h-[560px]">
            <img
              src="/images/factory-wide.jpg"
              alt="Industrial environment — production line"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
            <div className="absolute inset-0 flex items-end">
              <div className="container pb-16 md:pb-20">
                <ScrollAnimation>
                  <div className="max-w-xl">
                    <h2 className="mb-4 text-2xl font-light tracking-tight md:text-3xl text-white">
                      Ready to transform your operations?
                    </h2>
                    <p className="text-[15px] text-white/70 leading-relaxed mb-8">
                      30 minutes to show you how Lexia integrates
                      into your industrial environment.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start gap-3">
                      <Link href="/contact">
                        <Button size="lg" className="font-normal h-11 px-6 bg-white text-black hover:bg-white/90">
                          Schedule a Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button size="lg" variant="ghost" className="font-normal h-11 px-6 text-white/70 hover:text-white hover:bg-white/10">
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
