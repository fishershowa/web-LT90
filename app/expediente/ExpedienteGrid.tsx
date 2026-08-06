'use client'

import { useEffect, useState } from 'react'
import ExpedienteCard from './ExpedienteCard'
import { expedientes } from '@/data/expedientes'

export function ExpedienteGrid() {
  const [introFinished, setIntroFinished] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true)
    }, 2300)

    return () => clearTimeout(timer)
  }, [])

  const expedienteItems = [
    {
      id: 1,
      slug: 'drop-001-world',
      titulo: 'WORLD',
      categoria: 'DROP 001',
      año: '2026',
      portada: '/archive/world.png',
    },
    {
      id: 2,
      slug: 'costa-sport',
      titulo: 'COSTA SPORT',
      categoria: 'COLABORACIÓN',
      año: '2026',
      portada: '/archive/costa.png',
    },
    {
      id: 3,
      slug: 'world-division',
      titulo: 'WORLD DIVISION',
      categoria: 'EVENTO',
      año: '2026',
      portada: '/archive/evento.png',
    },
    {
      id: 4,
      slug: 'la-ruta',
      titulo: 'LA RUTA',
      categoria: 'PROYECTO',
      año: '2026',
      portada: '/archive/project.png',
    },
  ]

 const selectedItem = selected
  ? expedienteItems.find(item => item.id === selected)
  : null

const expediente = selectedItem
  ? expedientes[selectedItem.slug as keyof typeof expedientes]
  : undefined

  return (
    <>
      <style jsx global>{`
        @keyframes introPanel {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(0%);
          }
        }

        @keyframes outroPanel {
          0% {
            transform: translateY(0%);
          }

          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>

      {!introFinished && (
        <div className="fixed inset-0 z-[300] flex bg-black">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 bg-neutral-950 border-r border-white/5"
              style={{
                animation: `
                  introPanel .9s ease forwards ${i * 0.15}s,
                  outroPanel .9s ease forwards ${1.35 + i * 0.15}s
                `,
              }}
            />
          ))}
        </div>
      )}

      <section className="bg-black min-h-screen">

        {/* PANEL SUPERIOR */}

       <div
  className={`
    transition-all
    duration-700
    ease-in-out

    ${
      selected === null
        ? 'h-screen'
        : 'h-[100vh]'
    }
  `}
>
          <div className="flex h-full">

            {expedienteItems.map((item) => (
              <ExpedienteCard
                key={item.id}
                item={item}
                expanded={selected === item.id}
                collapsed={
                  selected !== null && selected !== item.id
                }
                onClick={() =>
                  setSelected(
                    selected === item.id ? null : item.id
                  )
                }
              />
            ))}

          </div>
        </div>

        {/* CONTENIDO */}

        {expediente && (
  <section className="bg-black">

 <div className="w-full px-16 pt-16 pb-24">

   <button
  onClick={() => setSelected(null)}
  className="uppercase tracking-[0.4em] text-xs text-white/40 hover:text-white transition"
>
  Volver
</button>

   <div className="mt-8 grid grid-cols-12 gap-10 items-start">

  <div className="col-span-8">

    <h2 className="mt-3 text-[84px] leading-[0.9] font-extralight uppercase tracking-[0.08em]">
      {expediente.titulo}
    </h2>

    <p className="mt-5 whitespace-pre-line text-[22px] leading-[2] text-white/70 font-light max-w-4xl">
      {expediente.manifiesto}
    </p>

  </div>

 <div className="col-span-4 flex justify-start items-start -ml-12">

  <video
  autoPlay
  muted
  loop
  playsInline
  className="w-[360px] h-[500px] object-cover rounded-md"
>
      <source
  src="/archive/archive-videos/world-vertical.mp4"
  type="video/mp4"
/>
    </video>

  </div>

</div>

    <div className="mt-20">

      

      <div className="grid grid-cols-12 gap-6">

  <img
    src={expediente.galeria[0]}
    className="col-span-8 h-[620px] object-cover rounded-md"
  />

  <img
    src={expediente.galeria[1]}
    className="col-span-4 h-[620px] object-cover rounded-md"
  />

  <img
    src={expediente.galeria[2]}
    className="col-span-4 h-[420px] object-cover rounded-md"
  />

  <img
    src={expediente.galeria[3]}
    className="col-span-8 h-[420px] object-cover rounded-md"
  />

  <img
    src={expediente.galeria[4]}
    className="col-span-6 h-[500px] object-cover rounded-md"
  />

  <img
    src={expediente.galeria[5]}
    className="col-span-6 h-[500px] object-cover rounded-md"
  />

</div>

    </div>

  </div>
{/* HISTORIA */}

<section className="w-full px-16 pt-2 pb-6">

  <div className="max-w-[1600px] mx-auto space-y-8">

    <div>

      <div className="flex items-center gap-5">

        <h3 className="text-[26px] uppercase font-extralight tracking-[0.08em]">
          Concepto
        </h3>

        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          Enero 2026
        </span>

      </div>

      <p className="mt-2 text-[15px] leading-7 text-white/60">
  {expediente.concepto}
</p>

    </div>

    <div>

      <div className="flex items-center gap-5">

        <h3 className="text-[26px] uppercase font-extralight tracking-[0.08em]">
          Producción
        </h3>

        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          Marzo 2026
        </span>

      </div>

      <p className="mt-2 text-[15px] leading-7 text-white/60">
  {expediente.produccion}
</p>

    </div>

    <div>

      <div className="flex items-center gap-5">

        <h3 className="text-[26px] uppercase font-extralight tracking-[0.08em]">
          Lanzamiento
        </h3>

        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          Abril 2026
        </span>

      </div>

      <p className="mt-2 text-[15px] leading-7 text-white/60">
  {expediente.lanzamiento}
</p>

    </div>

  </div>
<div className="mt-20">
  <video
    autoPlay
    muted
    loop
    playsInline
    controls
    className="w-full rounded-md"
  >
    <source
      src={expediente.videoHorizontal}
      type="video/mp4"
    />
  </video>
</div>

</section>

  </section>
  
)}

      </section>
      
      
    </>
  )
}