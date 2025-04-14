"use client"

import LottieAnimation from "./lottie-animation"

export function LeadershipAnimation() {
  return (
    <div className="w-full h-full">
      <LottieAnimation 
        src="/animations/2.json"
        className="w-full h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  )
}

export function ElearningAnimation() {
  return (
    <div className="w-full h-full">
      <LottieAnimation 
        src="/animations/e-learning.json"
        className="w-full h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  )
}

export function FutureSkillsAnimation() {
  return (
    <div className="w-full h-full">
      <LottieAnimation 
        src="/animations/3.json"
        className="w-full h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  )
}
