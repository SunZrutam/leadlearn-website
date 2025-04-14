"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const logos = [
  "/placeholder.svg?height=60&width=120&text=Vodafone",
  "/placeholder.svg?height=60&width=120&text=IDFC+First+Bank",
  "/placeholder.svg?height=60&width=120&text=Amazon",
  "/placeholder.svg?height=60&width=120&text=IBM",
]

export default function ClientLogos() {
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
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 px-4 opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src={logo || "/placeholder.svg"}
              alt={`Client logo ${i + 1}`}
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
