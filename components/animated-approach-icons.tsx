"use client"

import LottieAnimation from "./lottie-animation"

export function AiBrainAnimation() {
  return (
    <div className="flex items-center justify-center w-full aspect-square bg-primary/5 rounded-2xl p-8">
      <LottieAnimation 
        src="/animations/a.json"
        className="w-full h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  )
}

export function GlobeAnimation() {
  return (
    <div className="flex items-center justify-center w-full aspect-square bg-primary/5 rounded-2xl p-8">
      <LottieAnimation 
        src="/animations/b.json"
        className="w-full h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  )
}

export function ChartAnimation() {
  return (
    <div className="flex items-center justify-center w-full aspect-square bg-primary/5 rounded-2xl p-8">
      <LottieAnimation 
        src="/animations/c.json"
        className="w-full h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  )
}

export function LightbulbAnimation() {
  return (
    <div className="flex items-center justify-center w-full aspect-square bg-primary/5 rounded-2xl p-8">
      <LottieAnimation 
        src="/animations/d.json"
        className="w-full h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  )
}
