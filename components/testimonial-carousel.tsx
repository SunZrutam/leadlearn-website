"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Zrutam's leadership program has been instrumental in transforming our approach to talent development at Amazon. The AI-powered personalization and cultural relevance have significantly enhanced our leadership pipeline across APAC. The measurable impact on our team's performance and the seamless integration with our existing learning ecosystem has been remarkable.",
    author: "Shilpa U",
    title: "Global Training and Leadership Development Leader",
    company: "Amazon",
    image: "/Pictures/1.jpeg",
  },
  {
    quote: "Implementing Zrutam's innovative learning platform has revolutionized our employee development strategy at Fintect Solutions. The combination of AI-driven insights and culturally relevant content has resulted in a 45% improvement in leadership effectiveness and a significant boost in employee engagement. The platform's ability to adapt to individual learning styles while maintaining consistency across our diverse workforce has been particularly impressive.",
    author: "Tama Mishra",
    title: "CHRO",
    company: "Fintect Solutions",
    image: "/Pictures/2.jpeg",
  },
  {
    quote: "Zrutam's partnership has been transformative for our talent management strategy at HSBC. Their innovative approach to corporate learning, particularly the integration of AI and cultural context, has set new benchmarks in our industry. The platform's ability to deliver personalized learning experiences at scale while maintaining high engagement levels has been crucial in developing our next generation of leaders across the APAC region.",
    author: "Fouzia Kumar",
    title: "Global Head - Talent Management",
    company: "HSBC",
    image: "/Pictures/3.jpeg",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  return (
    <div 
      className="relative min-h-[300px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Card className="border-none shadow-lg h-full">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center min-h-[200px]">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="rounded-full overflow-hidden border-4 border-primary/20 h-24 w-24">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div className="min-h-[120px] transition-all duration-500 ease-in-out">
                <p className="text-lg italic">{testimonials[currentIndex].quote}</p>
              </div>
              <div className="transition-all duration-500 ease-in-out">
                <p className="font-medium">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex items-center justify-center mt-8 gap-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsPaused(true)
            prevTestimonial()
          }}
          className="hover:bg-transparent transition-colors duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsPaused(true)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-muted hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsPaused(true)
            nextTestimonial()
          }}
          className="hover:bg-transparent transition-colors duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
