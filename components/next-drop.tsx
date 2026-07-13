'use client'

import { CountdownTimer } from './countdown-timer'

export function NextDrop() {
  return (
    <section
      id="drop"
      className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-black to-black/95 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24 animate-fade-in">
          <div className="mb-4">
            <p className="text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-medium">
              Coming Soon
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tighter">
            Drop 001
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 uppercase tracking-widest font-light">
            World
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16 md:mb-20" />

        {/* Countdown Timer */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs text-white/60 uppercase tracking-[0.2em] font-medium">
              Próximo Drop En
            </p>
          </div>
          <CountdownTimer />
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Description */}
        <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto animate-fade-in-delayed opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 0.4s forwards' }}>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            LT90 Drop 001 represents the beginning of something extraordinary. A fusion of premium streetwear, music culture, and sporting excellence. Limited availability. Global release.
          </p>
        </div>
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
