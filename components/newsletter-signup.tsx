"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real app, you would send this to your API
      console.log("Subscribing email:", email)
      setSubmitted(true)
    }
  }

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">Stay Updated with Learning Trends</h3>
      <p className="text-muted-foreground mb-6">
        Subscribe to our newsletter for the latest insights on corporate learning, leadership development, and workplace
        trends.
      </p>

      {submitted ? (
        <div className="flex items-center justify-center gap-2 text-primary">
          <CheckCircle2 className="h-5 w-5" />
          <span>Thank you for subscribing! Check your inbox soon.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      )}

      <p className="text-xs text-muted-foreground mt-4">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  )
}
