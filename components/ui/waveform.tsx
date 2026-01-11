"use client"

import { cn } from "@/lib/utils"

interface WaveformProps {
  className?: string
  width?: number
  height?: number
}

export function Waveform({ className, width = 100, height = 150 }: WaveformProps) {
  const viewBoxWidth = 200
  const viewBoxHeight = 100
  
  return (
    <div className={cn("flex items-center justify-center", className)} style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        <path
          d="M 0 50 Q 50 40 100 50 T 200 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="opacity-60"
        />
      </svg>
    </div>
  )
}