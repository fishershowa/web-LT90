'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CountdownTimer } from './countdown-timer'
import { MarqueeBanner } from './marquee-banner'

export function Hero() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [timerComplete, setTimerComplete] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source
    src="/videos/lt90-hero.mp4"
    type="video/mp4"
/>
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content - Full Screen Grid */}
      <div className="relative z-10 w-full h-full flex flex-col">
       
       {/* Middle Section - Countdown Timer (Core) */}
<div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-12 px-4 pt-20 md:pt-28">
  

  <div className="mt-16 md:mt-20">
  <CountdownTimer onComplete={() => setTimerComplete(true)} />
</div>
          {/* Entry Button - Unlocks when timer completes */}
         <div
 onClick={() => router.push("/drop")}
  className={`group flex flex-col items-center gap-4 select-none transition-all duration-500 ${
  timerComplete
    ? "cursor-pointer opacity-100"
    : "cursor-pointer"
}`}
>
  <div className="w-24 h-px bg-white/10 transition-all duration-500 group-hover:w-40 group-hover:bg-white/80"></div>

  <span className="text-white text-sm md:text-base tracking-[0.45em] uppercase font-light transition-all duration-500 group-hover:tracking-[0.6em] group-hover:scale-105">
    ACUDIR AL LLAMADO
  </span>

  <div className="w-24 h-px bg-white/10 transition-all duration-500 group-hover:w-40 group-hover:bg-white/80"></div>
</div>
<button
  onClick={() => router.push("/convocatoria")}
  className="mt-12 md:mt-16 text-[11px] md:text-xs tracking-[0.28em] uppercase text-white/45 hover:text-white/80 transition-all duration-500 hover:tracking-[0.35em]"
>
  ¿Recibiste una Convocatoria Anticipada?
</button>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <MarqueeBanner />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
