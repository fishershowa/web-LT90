'use client'

import { useRef, useEffect, useState } from 'react'

interface ArchivedItem {
  id: number
  title: string
  year: string
  color: string
}

const archivedItems: ArchivedItem[] = [
  { id: 1, title: 'Drop 001 - Genesis', year: '2024', color: 'bg-slate-900' },
  { id: 2, title: 'Drop 002 - Revival', year: '2024', color: 'bg-slate-800' },
  { id: 3, title: 'Drop 003 - Legacy', year: '2024', color: 'bg-slate-900' },
  { id: 4, title: 'Drop 004 - Sonic', year: '2024', color: 'bg-slate-800' },
  { id: 5, title: 'Drop 005 - Unity', year: '2024', color: 'bg-slate-900' },
  { id: 6, title: 'Drop 006 - Ascend', year: '2024', color: 'bg-slate-800' },
  { id: 7, title: 'Drop 007 - Eclipse', year: '2024', color: 'bg-slate-900' },
  { id: 8, title: 'Drop 008 - Horizon', year: '2024', color: 'bg-slate-800' },
  { id: 9, title: 'Drop 009 - Nexus', year: '2024', color: 'bg-slate-900' },
  { id: 10, title: 'Drop 010 - Eternal', year: '2024', color: 'bg-slate-800' },
  { id: 11, title: 'Drop 011 - Cipher', year: '2024', color: 'bg-slate-900' },
  { id: 12, title: 'Drop 012 - Vortex', year: '2024', color: 'bg-slate-800' },
]

export function HistoricalArchive() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        // Prevent vertical scroll on this section
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault()
          // Convert vertical wheel movement to horizontal scroll
          const newScroll = containerRef.current.scrollLeft + e.deltaY
          containerRef.current.scrollLeft = newScroll
          setScrollPosition(newScroll)
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      return () => container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <section id="historical-archive" className="relative w-full bg-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
          Archivo Histórico
        </h2>
        <p className="text-white/60 text-sm tracking-widest uppercase mt-2">
          Rueda del ratón para navegar
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{
          scrollBehavior: 'smooth',
          scrollbarWidth: 'thin',
        }}
      >
        <div className="flex gap-6 px-4 md:px-6 lg:px-8 pb-8">
          {/* Duplicate items at the end to create endless effect */}
          {[...archivedItems, ...archivedItems.slice(0, 6)].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-72 md:w-96 group cursor-pointer"
            >
              {/* Item Card */}
              <div className={`${item.color} aspect-square rounded-lg mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-105 flex flex-col items-center justify-center relative`}>
                {/* Placeholder with pattern */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-black" />
                <div className="relative z-10 text-center">
                  <div className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-2">
                    Pieza Archivada
                  </div>
                  <div className="text-white/60 text-xs tracking-widest">
                    {item.year}
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-white font-semibold text-sm tracking-wide mb-1 group-hover:text-white/80 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/60 text-xs tracking-widest uppercase">
                Limitado 90/90
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: containerRef.current
              ? `${Math.min(
                  (scrollPosition / (containerRef.current.scrollWidth - containerRef.current.clientWidth)) * 100,
                  100
                )}%`
              : '0%',
          }}
        />
      </div>

      <style>{`
        div::-webkit-scrollbar {
          height: 6px;
        }

        div::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  )
}
