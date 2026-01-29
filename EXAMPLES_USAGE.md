# Exemples d'utilisation des nouveaux composants graphiques

## 1. FloatingParticles - Particules flottantes

### Usage basique
```tsx
import { FloatingParticles } from "@/components/ui/floating-particles"

// Dans une section avec position relative
<section className="relative">
  <FloatingParticles 
    count={30} 
    speed={0.3} 
    opacity={0.05}
    color="rgb(79, 70, 229)" // Couleur bleue du gradient
  />
  {/* Votre contenu ici */}
</section>
```

### Exemple dans le Hero
```tsx
<section className="container py-32 md:py-40 relative">
  <FloatingParticles 
    count={20} 
    speed={0.2} 
    opacity={0.03}
  />
  {/* Contenu hero */}
</section>
```

## 2. GradientOrb - Orbes à dégradé

### Usage basique
```tsx
import { GradientOrb } from "@/components/ui/gradient-orb"

<section className="relative">
  <GradientOrb 
    size={300}
    blur={120}
    opacity={0.08}
    position="top-right"
    animate={true}
  />
  {/* Contenu */}
</section>
```

### Exemple dans une carte
```tsx
<Card className="relative overflow-hidden">
  <GradientOrb 
    size={200}
    blur={80}
    opacity={0.06}
    position="center"
    colors={["#d97706", "#b91c1c", "#4f46e5"]}
  />
  <CardContent>
    {/* Contenu de la carte */}
  </CardContent>
</Card>
```

## 3. GridPattern - Motif de grille

### Usage basique
```tsx
import { GridPattern } from "@/components/ui/grid-pattern"

<section className="relative">
  <GridPattern 
    size={30}
    gap={2}
    opacity={0.04}
    animate={false}
  />
  {/* Contenu */}
</section>
```

### Exemple comme séparateur
```tsx
<div className="relative h-32">
  <GridPattern 
    size={20}
    gap={1}
    strokeWidth={0.5}
    opacity={0.06}
  />
</div>
```

## Exemples d'intégration dans les pages existantes

### Page d'accueil - Hero Section
```tsx
<section className="container py-32 md:py-40 relative">
  {/* Particules flottantes en arrière-plan */}
  <FloatingParticles count={25} speed={0.25} opacity={0.04} />
  
  {/* Orbes décoratifs dans les coins */}
  <GradientOrb 
    size={250} 
    position="top-left" 
    opacity={0.05}
  />
  <GradientOrb 
    size={200} 
    position="bottom-right" 
    opacity={0.05}
  />
  
  {/* Contenu hero existant */}
  <div className="relative z-10">
    {/* ... */}
  </div>
</section>
```

### Section Research - What We Do
```tsx
<section className="container py-24 md:py-32 relative">
  {/* Grille subtile en arrière-plan */}
  <GridPattern size={40} gap={2} opacity={0.03} />
  
  {/* Orbe au centre */}
  <GradientOrb 
    size={300} 
    position="center" 
    opacity={0.04}
  />
  
  <div className="relative z-10">
    {/* Contenu existant */}
  </div>
</section>
```

### Cartes de contenu
```tsx
<Card className="relative overflow-hidden">
  {/* Orbe décoratif */}
  <GradientOrb 
    size={150} 
    position="top-right" 
    opacity={0.05}
    animate={true}
  />
  
  <CardHeader>
    {/* Contenu */}
  </CardHeader>
</Card>
```

### Section Contact
```tsx
<section className="container py-24 md:py-32 relative">
  {/* Particules flottantes */}
  <FloatingParticles count={15} speed={0.2} opacity={0.03} />
  
  {/* Orbes dans les coins */}
  <GradientOrb size={200} position="top-left" opacity={0.04} />
  <GradientOrb size={180} position="bottom-right" opacity={0.04} />
  
  <Card className="relative z-10">
    {/* Contenu de contact */}
  </Card>
</section>
```

## Combinaisons recommandées

### Subtile et minimaliste
- **GridPattern** seul (opacité 0.03-0.05)
- Parfait pour les arrière-plans de sections

### Modérément décoratif
- **FloatingParticles** + **GradientOrb** (1-2 orbes)
- Bon pour les sections importantes (Hero, Contact)

### Plus dynamique (à utiliser avec parcimonie)
- **FloatingParticles** + **GradientOrb** (plusieurs) + **GridPattern**
- Réservé aux sections très importantes

## Paramètres recommandés par contexte

### Hero Section
```tsx
<FloatingParticles count={20-30} speed={0.2-0.3} opacity={0.03-0.05} />
<GradientOrb size={250-300} blur={100-120} opacity={0.04-0.06} />
```

### Sections de contenu
```tsx
<GridPattern size={30-40} gap={1-2} opacity={0.03-0.04} />
<GradientOrb size={200-250} opacity={0.03-0.05} />
```

### Cartes
```tsx
<GradientOrb size={150-200} blur={60-80} opacity={0.04-0.06} />
```

### Footer
```tsx
<GridPattern size={20} gap={1} opacity={0.02-0.03} />
<FloatingParticles count={10-15} speed={0.15} opacity={0.02} />
```

## Notes importantes

1. **Toujours utiliser `relative` sur le parent** pour que les éléments absolus se positionnent correctement
2. **Z-index** : Les éléments décoratifs doivent être en arrière-plan (z-0 ou z-10), le contenu au-dessus (z-20+)
3. **Performance** : Réduire le nombre de particules sur mobile si nécessaire
4. **Accessibilité** : Respecter `prefers-reduced-motion` (à implémenter si nécessaire)
5. **Opacité** : Rester entre 0.02 et 0.08 maximum pour rester subtil



