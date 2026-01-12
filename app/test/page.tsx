"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { LiveWaveform } from "@/components/ui/live-waveform"
import { Matrix, wave, pulse, loader } from "@/components/ui/matrix"
import { Info, CheckCircle2, AlertCircle, Sparkles } from "lucide-react"

export default function TestPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-32 md:py-40 relative">
          <div className="relative z-10">
            <ScrollAnimation>
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="mb-8 text-5xl font-light tracking-[-0.03em] leading-[1.1] md:text-6xl lg:text-7xl">
                  Shadcn UI
                  <span className="block mt-2.5 font-extralight tracking-[-0.025em]">Design Elements</span>
                </h1>
                <p className="mb-12 text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Éléments graphiques décoratifs basés sur shadcn/ui
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <Separator />

        {/* Section 1: Progress Bars */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl text-center">
                Progress Bars
              </h2>
              <p className="mb-12 text-base leading-relaxed text-muted-foreground text-center">
                Barres de progression animées pour illustrer des processus
              </p>
              
              <div className="space-y-8">
                <Card className="border rounded-xl p-8">
                  <CardHeader>
                    <CardTitle className="font-normal">Progress Animé</CardTitle>
                    <CardDescription>Barre de progression qui se remplit automatiquement</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Processing...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Loading data...</span>
                        <span>{Math.min(progress * 0.8, 100).toFixed(0)}%</span>
                      </div>
                      <Progress value={progress * 0.8} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border rounded-xl p-8">
                  <CardHeader>
                    <CardTitle className="font-normal">Progress Statique</CardTitle>
                    <CardDescription>Différents niveaux de progression</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Progress value={25} className="h-1.5" />
                    <Progress value={50} className="h-1.5" />
                    <Progress value={75} className="h-1.5" />
                    <Progress value={100} className="h-1.5" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Section 2: Skeleton Loaders */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl text-center">
                Skeleton Loaders
              </h2>
              <p className="mb-12 text-base leading-relaxed text-muted-foreground text-center">
                Placeholders animés pour le chargement de contenu
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </div>
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </Card>

                <Card className="border rounded-xl p-6">
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Section 3: Badges */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl text-center">
                Badges & Tags
              </h2>
              <p className="mb-12 text-base leading-relaxed text-muted-foreground text-center">
                Badges pour catégoriser et mettre en évidence
              </p>
              
              <div className="space-y-8">
                <Card className="border rounded-xl p-8">
                  <CardHeader>
                    <CardTitle className="font-normal">Variantes de Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="default">Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="outline" className="border-blue-500/50 text-blue-600 dark:text-blue-400">
                        Custom
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border rounded-xl p-8">
                  <CardHeader>
                    <CardTitle className="font-normal">Badges dans du Contenu</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">New</Badge>
                      <span className="text-sm text-muted-foreground">Feature disponible</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">Research</Badge>
                      <span className="text-sm text-muted-foreground">En cours de développement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="default">Enterprise</Badge>
                      <span className="text-sm text-muted-foreground">Solution disponible</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Section 4: Tabs */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl text-center">
                Tabs
              </h2>
              <p className="mb-12 text-base leading-relaxed text-muted-foreground text-center">
                Navigation par onglets pour organiser le contenu
              </p>
              
              <Card className="border rounded-xl p-8">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-light">Overview</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Vue d'ensemble de nos solutions de speech technology pour entreprises.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-light">Features</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Découvrez les fonctionnalités avancées de notre plateforme.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="pricing" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-light">Pricing</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Tarifs adaptés aux besoins de votre entreprise.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Section 5: Alerts */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl text-center">
                Alerts
              </h2>
              <p className="mb-12 text-base leading-relaxed text-muted-foreground text-center">
                Alertes pour mettre en évidence des informations importantes
              </p>
              
              <div className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    Cette fonctionnalité est disponible pour tous les utilisateurs.
                  </AlertDescription>
                </Alert>

                <Alert variant="default" className="border-blue-500/50">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <AlertTitle className="text-blue-600 dark:text-blue-400">Succès</AlertTitle>
                  <AlertDescription>
                    Votre demande a été traitée avec succès.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Attention</AlertTitle>
                  <AlertDescription>
                    Cette action nécessite une confirmation.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Section 6: Combinaisons avec éléments existants */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl text-center">
                Combinaisons
              </h2>
              <p className="mb-12 text-base leading-relaxed text-muted-foreground text-center">
                Combinaisons de composants shadcn/ui avec les éléments graphiques existants
              </p>
              
              <div className="space-y-6">
                <Card className="border rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-10">
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
                  </div>
                  <div className="relative z-10">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="font-normal">Card avec Matrix</CardTitle>
                        <Badge variant="secondary">New</Badge>
                      </div>
                      <CardDescription>
                        Combinaison d'une carte avec animation Matrix en arrière-plan
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Progress value={65} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Progression illustrée avec une barre de progression
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                <Card className="border rounded-xl p-8">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-normal">Card avec Waveform</CardTitle>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center py-4 opacity-15">
                        <LiveWaveform
                          active={false}
                          processing={true}
                          height={60}
                          barWidth={4}
                          barGap={2}
                          mode="static"
                          fadeEdges={true}
                          historySize={120}
                        />
                      </div>
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                          Animation de waveform intégrée dans une carte
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border rounded-xl p-8">
                  <CardHeader>
                    <CardTitle className="font-normal">Tabs avec Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="tab1" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1" className="mt-6 space-y-4">
                        <Progress value={progress} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Contenu de l'onglet 1 avec barre de progression
                        </p>
                      </TabsContent>
                      <TabsContent value="tab2" className="mt-6 space-y-4">
                        <div className="flex gap-2">
                          <Badge>Tag 1</Badge>
                          <Badge variant="secondary">Tag 2</Badge>
                          <Badge variant="outline">Tag 3</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Contenu de l'onglet 2 avec badges
                        </p>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <Separator />

        {/* Section 7: Exemples d'utilisation */}
        <section className="container py-24 md:py-32">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl text-center">
                Exemples d'Utilisation
              </h2>
              <p className="mb-12 text-base leading-relaxed text-muted-foreground text-center">
                Comment intégrer ces composants dans vos pages
              </p>
              
              <div className="space-y-6">
                <Alert>
                  <Sparkles className="h-4 w-4" />
                  <AlertTitle>Astuce</AlertTitle>
                  <AlertDescription>
                    Utilisez les Progress bars pour illustrer des processus, les Skeleton pour les états de chargement,
                    et les Badges pour catégoriser le contenu. Tous ces éléments s'intègrent parfaitement avec le design minimaliste.
                  </AlertDescription>
                </Alert>

                <Card className="border rounded-xl p-8">
                  <CardHeader>
                    <CardTitle className="font-normal">Code d'exemple</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
{`// Progress bar animée
<Progress value={progress} className="h-2" />

// Skeleton loader
<Skeleton className="h-32 w-full" />

// Badge
<Badge variant="secondary">New Feature</Badge>

// Alert
<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </main>
      <Footer />
    </div>
  )
}
