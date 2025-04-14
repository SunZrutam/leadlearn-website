"use client"

import LottieAnimation from "./lottie-animation"

export default function HeroAnimation() {
  return (
    <div className="w-full h-full">
      <LottieAnimation 
        src="/animations/1.json"
        className="w-full h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  )
}
