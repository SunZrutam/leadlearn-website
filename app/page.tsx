"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowRight, CheckCircle2, Play } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import StatsCounter from "@/components/stats-counter"
import FeaturedCourses from "@/components/featured-courses"
import NewsletterSignup from "@/components/newsletter-signup"
import HeroAnimation from "@/components/hero-animation"
import { LeadershipAnimation, ElearningAnimation, FutureSkillsAnimation } from "@/components/solution-animations"
import AnimatedClientLogos from "@/components/animated-client-logos"
import {
  AiBrainAnimation,
  GlobeAnimation,
  ChartAnimation,
  LightbulbAnimation,
} from "@/components/animated-approach-icons"
import VideoModal from "@/components/video-modal"

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Safe navigation function that only runs on client
  const scrollToSection = (id: string) => {
    if (isMounted && typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Safe scroll to top function
  const scrollToTop = () => {
    if (isMounted && typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="dQw4w9WgXcQ" // Replace with your actual YouTube video ID
      />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault()
              scrollToTop()
            }}
            aria-label="Go to homepage"
          >
            <Image 
              src="/zRUTAMlOGO.png" 
              alt="Zrutam Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">Zrutam</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#solutions"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("solutions")
              }}
            >
              Solutions
            </Link>
            <Link
              href="#approach"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("approach")
              }}
            >
              Our Approach
            </Link>
            <Link
              href="#clients"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("clients")
              }}
            >
              Clients
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => scrollToSection("contact")} className="hidden md:inline-flex">
              Request Demo
            </Button>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-4">
                <Badge className="mb-2" variant="outline">
                  Future of Learning • 2025
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Transform Leadership with AI-Powered Learning
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Elevate corporate performance with personalized learning experiences designed for the APAC workforce
                  of tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="gap-2" onClick={() => scrollToSection("solutions")}>
                    Explore Solutions <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="gap-2" 
                    onClick={() => window.open('https://thisisatrial.my.canva.site/dagklx0rx10', '_blank')}
                  >
                    <Play className="h-4 w-4" /> Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-6">
                  <div className="flex -space-x-2">
                    {[
                      { src: "/logos/amazon-logo.png", alt: "Amazon" },
                      { src: "/logos/vodafone-logo.png", alt: "Vodafone" },
                      { src: "/logos/hsbc-logo.png", alt: "HSBC" },
                      { src: "/logos/pepsi-logo.png", alt: "Pepsi" }
                    ].map((company, i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-background overflow-hidden bg-white">
                        <Image
                          src={company.src}
                          alt={company.alt}
                          width={32}
                          height={32}
                          className="h-full w-full object-contain p-1"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by <span className="font-medium text-foreground">4</span> leading companies across APAC
                  </p>
                </div>
              </div>
              <div className="relative lg:ml-0">
                <div className="relative rounded-lg overflow-hidden shadow-xl lg:scale-110 transform">
                  <HeroAnimation />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-4 shadow-lg border">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="/zRUTAMlOGO.png" 
                      alt="Zrutam Logo"
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                    />
                    <div>
                      <p className="text-sm font-medium">AI-Powered Learning</p>
                      <p className="text-xs text-muted-foreground">Personalized to each learner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <StatsCounter />
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <Badge className="mb-2">Our Solutions</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Future-Ready Learning Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Comprehensive learning experiences designed for the evolving corporate landscape of 2025.
              </p>
            </div>

            <Tabs defaultValue="leadership" className="w-full max-w-[1200px] mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="leadership">Leadership Development</TabsTrigger>
                <TabsTrigger value="digital">E-Learning</TabsTrigger>
                <TabsTrigger value="future">Future Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="leadership">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-background to-muted">
                    <LeadershipAnimation />
                  </div>
                  <div className="space-y-6 flex flex-col justify-center lg:pl-6">
                    <h3 className="text-2xl font-bold">Adaptive Leadership Programs</h3>
                    <p className="text-muted-foreground text-lg">
                      Our AI-driven leadership development programs adapt to each participant's strengths, challenges,
                      and learning style, creating a truly personalized growth journey.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Personalized learning paths",
                        "Real-time feedback",
                        "Scenario-based simulations",
                        "Executive coaching integration",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button size="lg" className="text-lg px-8">Learn More</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="digital">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-background to-muted">
                    <ElearningAnimation />
                  </div>
                  <div className="space-y-6 flex flex-col justify-center lg:pl-6">
                    <h3 className="text-2xl font-bold">E-Learning Solutions</h3>
                    <p className="text-muted-foreground text-lg">
                      Equip your workforce with the digital mindset and technical capabilities needed to thrive in an
                      increasingly digital business environment.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "AI and automation literacy",
                        "Data-driven decision making",
                        "Digital collaboration tools",
                        "Change management frameworks",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button size="lg" className="text-lg px-8">Learn More</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="future">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-background to-muted">
                    <FutureSkillsAnimation />
                  </div>
                  <div className="space-y-6 flex flex-col justify-center lg:pl-6">
                    <h3 className="text-2xl font-bold">Future-Ready Workforce</h3>
                    <p className="text-muted-foreground text-lg">
                      Prepare your teams for the skills that will define success in 2025 and beyond, with a focus on
                      human capabilities that complement advancing technology.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Adaptive thinking",
                        "Cross-cultural collaboration",
                        "Ethical AI management",
                        "Sustainable business practices",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button size="lg" className="text-lg px-8">Learn More</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Our Approach Section */}
        <section id="approach" className="py-20 md:py-28 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <Badge className="mb-2">Our Approach</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How We're Different in 2025</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Our innovative methodology sets us apart in the rapidly evolving corporate learning landscape.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                {
                  icon: <AiBrainAnimation />,
                  title: "AI-Powered Personalization",
                  description:
                    "Our proprietary AI engine creates truly personalized learning journeys that adapt in real-time to each learner's progress.",
                },
                {
                  icon: <GlobeAnimation />,
                  title: "APAC-Centric Content",
                  description:
                    "Content specifically designed for Asian business contexts, with cultural nuances and regional case studies.",
                },
                {
                  icon: <ChartAnimation />,
                  title: "Measurable Impact",
                  description:
                    "Advanced analytics that demonstrate clear ROI and behavioral change through our learning interventions.",
                },
                {
                  icon: <LightbulbAnimation />,
                  title: "Immersive Experiences",
                  description:
                    "Cutting-edge mixed reality simulations that create memorable, high-impact learning moments.",
                },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-background/50 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    {item.icon}
                    <CardTitle className="text-xl mt-6">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-center">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
              <div className="space-y-4">
                <Badge className="mb-2">Featured Programs</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Trending in 2025</h2>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Our most popular programs addressing the critical skills needed in today's evolving workplace.
                </p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                View All Programs <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <FeaturedCourses />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="clients" className="py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <Badge className="mb-2">Success Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Trusted by Leading Organizations</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                See how we've helped transform leadership capabilities across APAC.
              </p>
            </div>

            <TestimonialCarousel />

            <div className="mt-16">
              <h3 className="text-center text-lg font-medium mb-8">Companies we've worked with</h3>
              <AnimatedClientLogos />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Ready to transform your organization's learning approach?
                </h2>
                <p className="text-xl opacity-90 max-w-[600px]">
                  Schedule a consultation with our learning strategists to design a custom solution for your
                  organization's needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" variant="secondary" className="gap-2" onClick={() => scrollToSection("contact")}>
                    Book a Consultation <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 gap-2"
                    onClick={() => window.open('https://thisisatrial.my.canva.site/dagklx0rx10', '_blank')}
                  >
                    <Play className="h-4 w-4" /> Watch Demo
                  </Button>
                </div>
              </div>
              <div className="lg:ml-auto">
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <CardTitle>Request a Demo</CardTitle>
                    <CardDescription>See our platform in action with a personalized walkthrough.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form 
                      name="contact" 
                      method="POST" 
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      className="space-y-4"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="hidden">
                        <label>
                          Don't fill this out if you're human: <input name="bot-field" />
                        </label>
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium">
                            First Name
                          </label>
                          <input
                            id="first-name"
                            name="first-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium">
                            Last Name
                          </label>
                          <input
                            id="last-name"
                            name="last-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="john.doe@company.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Acme Inc."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Tell us about your learning needs..."
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}

        {/* Newsletter Section */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <NewsletterSignup />
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2">
              <Link
                href="#"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToTop()
                }}
                aria-label="Go to homepage"
              >
                <Image 
                  src="/zRUTAMlOGO.png" 
                  alt="Zrutam Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold">Zrutam</span>
              </Link>
              <p className="text-muted-foreground mb-4 max-w-[300px]">
                Transforming corporate learning across APAC with AI-powered, culturally relevant solutions.
              </p>
              <div className="flex gap-4">
                {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                  <Link key={social} href={`#${social}`} className="text-muted-foreground hover:text-primary">
                    <span className="sr-only">{social}</span>
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <Image
                        src={`/placeholder.svg?height=20&width=20&text=${social.charAt(0).toUpperCase()}`}
                        alt={social}
                        width={20}
                        height={20}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Solutions</h3>
              <ul className="space-y-2">
                {[
                  "Leadership Development",
                  "Digital Transformation",
                  "Future Skills",
                  "Custom Programs",
                  "Executive Coaching",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Our Team", "Careers", "Partners", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Blog", "Whitepapers", "Case Studies", "Webinars", "Learning Hub"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Zrutam. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
