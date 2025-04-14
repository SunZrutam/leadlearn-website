"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, BookOpen } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    value: 1000,
    label: "Professionals Trained",
    suffix: "+",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    value: 98,
    label: "Client Satisfaction",
    suffix: "%",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    value: 6,
    label: "Countries Served",
    suffix: "",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    value: 25,
    label: "Learning Programs",
    suffix: "+",
  },
]

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const intervals = stats.map((stat, index) => {
      const duration = 2000 // 2 seconds for the animation
      const steps = 20
      const increment = stat.value / steps
      let count = 0

      return setInterval(() => {
        count += 1
        const newValue = Math.min(Math.round(increment * count), stat.value)

        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = newValue
          return newCounts
        })

        if (count >= steps) {
          clearInterval(intervals[index])
        }
      }, duration / steps)
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [isVisible])

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-sm">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold mb-1">
              {counts[index].toLocaleString()}
              {stat.suffix}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
