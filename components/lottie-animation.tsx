"use client"

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from "react"

interface LottieAnimationProps {
  src?: string
  animationData?: any
  width?: number | string
  height?: number | string
  loop?: boolean
  autoplay?: boolean
  className?: string
}

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function LottieAnimation({
  src,
  animationData: initialAnimationData,
  width = "100%",
  height = "100%",
  loop = true,
  autoplay = true,
  className = "",
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<any>(initialAnimationData || null)
  const [error, setError] = useState<boolean>(false)
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    // If direct animation data is provided, use it
    if (initialAnimationData) {
      setAnimationData(initialAnimationData)
      return
    }

    // If no src is provided, don't try to fetch
    if (!src) {
      setError(true)
      return
    }

    // If src is a URL, fetch the JSON
    if (src.startsWith("http") || src.startsWith("/")) {
      fetch(src)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => setAnimationData(data))
        .catch((error) => {
          console.error("Error loading Lottie animation:", error)
          setError(true)
        })
    } else {
      // If src is already a JSON string
      try {
        setAnimationData(JSON.parse(src))
      } catch (error) {
        console.error("Error parsing Lottie JSON:", error)
        setError(true)
      }
    }
  }, [src, initialAnimationData])

  if (error || !animationData) {
    return (
      <div
        className={`animate-pulse bg-muted/50 rounded-md flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-xs text-muted-foreground">Animation</span>
      </div>
    )
  }

  return (
    <div className={className} style={{ width, height }}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        lottieRef={lottieRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}
