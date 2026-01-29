"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface GradientOrbProps {
  size?: number
  blur?: number
  opacity?: number
  colors?: string[]
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"
  animate?: boolean
  className?: string
}

export function GradientOrb({
  size = 200,
  blur = 100,
  opacity = 0.1,
  colors = ["#d97706", "#b91c1c", "#4f46e5", "#4338ca"],
  position = "center",
  animate = true,
  className,
}: GradientOrbProps) {
  const orbRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    if (!animate || !orbRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return
      const rect = orbRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [animate])

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }

  const gradientColors = colors.join(", ")

  return (
    <div
      ref={orbRef}
      className={cn(
        "absolute pointer-events-none",
        positionClasses[position],
        className
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${gradientColors})`,
        filter: `blur(${blur}px)`,
        opacity,
        transform: animate
          ? `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`
          : undefined,
        transition: animate ? "transform 0.3s ease-out" : undefined,
      }}
    />
  )
}



