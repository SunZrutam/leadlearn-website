"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight } from "lucide-react"

const courses = [
  {
    title: "Adaptive Leadership in the AI Era",
    image: "/AdaptiveLeadership.jpg",
    category: "Leadership",
    rating: 4.9,
    students: 1240,
    duration: "6 weeks",
    featured: true,
  },
  {
    title: "Data-Driven Decision Making",
    image: "/DecisionMaking.jpg",
    category: "Digital Skills",
    rating: 4.8,
    students: 980,
    duration: "4 weeks",
    featured: true,
  },
  {
    title: "Cross-Cultural Team Leadership",
    image: "/Crosscultuiral.jpg",
    category: "Leadership",
    rating: 4.7,
    students: 850,
    duration: "5 weeks",
    featured: false,
  },
  {
    title: "Sustainable Business Strategies",
    image: "/BusinessStrategy.jpg",
    category: "Strategy",
    rating: 4.9,
    students: 720,
    duration: "6 weeks",
    featured: false,
  },
]

export default function FeaturedCourses() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((course, index) => (
        <Card
          key={index}
          className={`overflow-hidden transition-all duration-300 ${
            hoveredIndex === index ? "shadow-lg -translate-y-1" : "shadow-md"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={400}
              height={200}
              className="w-full aspect-video object-cover"
            />
            {course.featured && (
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Featured</Badge>
            )}
          </div>
          <CardHeader className="p-4">
            <div className="flex justify-between items-center mb-2">
              <Badge variant="outline">{course.category}</Badge>
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{course.rating}</span>
              </div>
            </div>
            <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
