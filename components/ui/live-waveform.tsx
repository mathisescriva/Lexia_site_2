"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface LiveWaveformProps {
  active?: boolean
  processing?: boolean
  height?: number
  barWidth?: number
  barGap?: number
  mode?: "static" | "scrolling"
  fadeEdges?: boolean
  barColor?: string
  historySize?: number
  className?: string
}

export function LiveWaveform({
  active = false,
  processing = false,
  height = 80,
  barWidth = 3,
  barGap = 2,
  mode = "static",
  fadeEdges = true,
  barColor = "gray",
  historySize = 120,
  className,
}: LiveWaveformProps) {
  const [amplitudes, setAmplitudes] = useState<number[]>([])
  const animationRef = useRef<number>()
  const timeRef = useRef(0)

  useEffect(() => {
    const barCount = Math.floor(historySize / (barWidth + barGap))
    const initial = Array.from({ length: barCount }, () => 0.2)
    setAmplitudes(initial)

    const animate = () => {
      timeRef.current += 0.015
      
      // Sine functions are periodic, so no need to reset - just use the value directly
      // Using modulo with a large period to prevent overflow while maintaining continuity
      const time = timeRef.current % (Math.PI * 2 * 1000)

      setAmplitudes((prev) =>
        prev.map((_, index) => {
          // Create a regular, smooth wave pattern
          const x = (index / prev.length) * Math.PI * 4
          const phase = x + time
          
          // Regular sine wave with multiple harmonics
          const wave1 = Math.sin(phase) * 0.12
          const wave2 = Math.sin(phase * 1.5 + time * 0.5) * 0.06
          const base = 0.2
          const amplitude = base + wave1 + wave2
          
          return Math.max(0.15, Math.min(0.4, amplitude))
        })
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [barWidth, barGap, historySize])

  const barCount = amplitudes.length || Math.floor(historySize / (barWidth + barGap))

  if (amplitudes.length === 0) {
    return null
  }

  const totalWidth = barCount * (barWidth + barGap) - barGap

  return (
    <div
      className={cn("flex items-center justify-center relative", className)}
      style={{ height, width: totalWidth }}
    >
      {amplitudes.map((amplitude, index) => {
        const opacity = fadeEdges
          ? Math.min(1, Math.min(index / (barCount * 0.3), (barCount - index) / (barCount * 0.3)))
          : 1

        // Center the bars vertically (symmetrical around Y axis)
        const barHeight = amplitude * height * 0.45
        const halfHeight = height / 2

        return (
          <div
            key={index}
            className="bg-foreground transition-all duration-150 ease-linear"
            style={{
              width: `${barWidth}px`,
              height: `${barHeight}px`,
              minHeight: "3px",
              opacity: opacity,
              bottom: `${halfHeight - barHeight / 2}px`,
              left: `${index * (barWidth + barGap)}px`,
              position: "absolute",
            }}
          />
        )
      })}
    </div>
  )
}