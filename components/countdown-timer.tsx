'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate?: Date
  onComplete?: () => void
}

interface TimeUnits {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
  const [time, setTime] = useState<TimeUnits>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Use provided targetDate or default to 3 days from now
    const target = targetDate || new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)

    // Calculate initial time
    const now = new Date().getTime()
    const targetTime = target.getTime()
    const difference = targetTime - now

    if (difference > 0) {
      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const targetTime = target.getTime()
      const difference = targetTime - now

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsComplete(true)
        if (onComplete) {
          onComplete()
        }
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate, onComplete])

  if (!mounted) return null

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
<div
  className="
    text-4xl
    md:text-5xl
    lg:text-6xl
    font-bold
    tracking-tighter
    min-w-[80px]
    md:min-w-[100px]
    lg:min-w-[120px]
    text-center
    bg-gradient-to-b
    from-white
    via-gray-200
    to-gray-400
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_10px_rgba(255,255,255,0.06)]
  "
>        {String(value).padStart(2, '0')}
      </div>
      <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.45em] font-light">
        {label}
      </div>
    </div>
  )

  return (
  <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 animate-fade-in">
    <TimeUnit value={time.days} label="DÍAS" />

    <div className="text-5xl text-white/15 font-thin">:</div>

    <TimeUnit value={time.hours} label="HORAS" />

    <div className="text-5xl text-white/15 font-thin">:</div>

    <TimeUnit value={time.minutes} label="MINUTOS" />

    <div className="text-5xl text-white/15 font-thin">:</div>

    <TimeUnit value={time.seconds} label="SEGUNDOS" />
  </div>
)
}
