"use client"

import { useRef, useEffect } from "react"
import LottieAnimation from "./lottie-animation"
import { vodafoneLogo, amazonLogo, ibmLogo, idfcBankLogo } from "./sample-lottie-data"

// Use the embedded Lottie data for each logo
const logoAnimations = [vodafoneLogo, idfcBankLogo, amazonLogo, ibmLogo]

export default function AnimatedClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPos = 0

    const scroll = () => {
      if (!scrollContainer) return

      scrollPos += 0.5
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }

      scrollContainer.scrollLeft = scrollPos
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollRef} className="flex items-center gap-8 overflow-x-hidden whitespace-nowrap py-4">
        {[...logoAnimations, ...logoAnimations].map((animation, i) => (
          <div key={i} className="flex-shrink-0 px-4 opacity-70 hover:opacity-100 transition-opacity">
            <LottieAnimation animationData={animation} width={120} height={60} className="h-12 w-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}
