'use client'

import { useState, useEffect } from 'react'

interface Member {
  id: string
  name?: string
  role?: string
}

const PLACEHOLDER_MEMBERS: Member[] = Array.from({ length: 8 }, (_, i) => ({
  id: `member-${i + 1}`,
}))

export function Members() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="members"
      className="w-full py-24 md:py-32 lg:py-40 bg-black border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 lg:mb-24 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tighter">
            LT90 Members
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Exclusive collective of athletes, artists, and visionaries
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-max">
          {PLACEHOLDER_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              className="group cursor-pointer animate-fade-in opacity-0"
              style={{ animation: `fadeIn 0.6s ease-out ${0.1 * (index % 4)}s forwards` }}
            >
              {/* Card Container with Glass Morphism */}
              <div className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300" />
                    <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest">
                      #{String(index + 1).padStart(2, '0')}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
                  <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-white/80 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 md:mt-28 text-center animate-fade-in-delayed opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 0.6s forwards' }}>
          <p className="text-white/60 mb-6 text-sm md:text-base">
            Join the exclusive LT90 collective
          </p>
          <button className="px-8 md:px-12 py-3 md:py-4 border-2 border-white/40 text-white font-semibold text-sm md:text-base tracking-wider uppercase hover:bg-white/10 hover:border-white/80 transition-all duration-300">
            Learn More
          </button>
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
