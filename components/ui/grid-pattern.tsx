"use client"

import { cn } from "@/lib/utils"

interface GridPatternProps {
  size?: number
  gap?: number
  strokeWidth?: number
  opacity?: number
  color?: string
  animate?: boolean
  className?: string
}

export function GridPattern({
  size = 20,
  gap = 1,
  strokeWidth = 0.5,
  opacity = 0.05,
  color = "currentColor",
  animate = false,
  className,
}: GridPatternProps) {
  const patternSize = size + gap

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden",
        animate && "animate-pulse",
        className
      )}
      style={{ opacity }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width={patternSize}
            height={patternSize}
            patternUnits="userSpaceOnUse"
          >
            <rect
              width={size}
              height={size}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  )
}



