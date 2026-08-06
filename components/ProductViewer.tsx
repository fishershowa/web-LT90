'use client'

import { useState } from 'react'


type ProductViewerProps = {
  nombre: string
  serie: string
  drop: string
  imagen: string
}

export default function ProductViewer({
  nombre,
  serie,
  drop,
  imagen,
}: ProductViewerProps) {

  const [lado, setLado] = useState<'front' | 'back'>('front')

  const backImage =
    nombre === 'WORLD Jersey'
      ? '/products/world-jersey-back.png'
      : '/products/world-snapback-back.png'

  const currentImage =
    lado === 'front'
      ? imagen
      : backImage
return (

 <div>

    <div className="mt-10 border-t border-white/10 pt-10">

      <div className="grid lg:grid-cols-[340px_1fr] gap-16 items-start">

        {/* ---------- COLUMNA IZQUIERDA ---------- */}

        <div className="flex flex-col items-center">

          <p className="text-[10px] uppercase tracking-[0.50em] text-white/35">
  PIEZA
</p>

<h3 className="mt-4 uppercase tracking-[0.30em] text-3xl font-light text-center">
  {nombre}
</h3>

<div className="w-14 h-px bg-white/10 my-6"></div>

<p className="uppercase tracking-[0.40em] text-white/40 text-xs">
  DROP {drop}
</p>

          <div className="relative mt-10 flex justify-center">

  {/* Sombra de la pieza */}

  <div
    className="
      absolute
      bottom-3
      left-1/2
      -translate-x-1/2
      w-40
      h-5
      rounded-full
      bg-black/50
      blur-xl
      opacity-70
    "
  />

  {/* Imagen */}

  <img
  
    src={currentImage}
    alt={nombre}
    className={`
  relative
  z-10
  w-[320px]
  max-w-full
  object-contain
  transition-all
  duration-500
  ease-out
opacity-100 scale-100
`}
  />

</div>
<div className="mt-10 flex justify-center">

  <div
    className="
      w-56
      h-px
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
    "
  />

</div>
          <div className="mt-10 flex items-center justify-center gap-8">

  <div className="h-px w-12 bg-white/10"></div>

           <button
  onClick={(e) => {
    e.stopPropagation()
    setLado('front')
  }}
  className={`uppercase tracking-[0.35em] text-xs transition-colors flex items-center ${
    lado === 'front'
      ? 'text-white'
      : 'text-white/35 hover:text-white'
  }`}
>
  <span className="mr-2">
    {lado === 'front' ? '◉' : '○'}
  </span>

  Frente
</button>

            <button
  onClick={(e) => {
    e.stopPropagation()
    setLado('back')
  }}
  className={`uppercase tracking-[0.35em] text-xs transition-colors flex items-center ${
    lado === 'back'
      ? 'text-white'
      : 'text-white/35 hover:text-white'
  }`}
>
  <span className="mr-2">
    {lado === 'back' ? '◉' : '○'}
  </span>

  Reverso
</button>
<div className="h-px w-12 bg-white/10"></div>
          </div>

        </div>

        {/* ---------- COLUMNA DERECHA ---------- */}

        <div>

          <div>

            <p className="text-[10px] uppercase tracking-[0.45em] text-white/35">
              CONTEXTO
            </p>

            <p className="mt-6 leading-8 text-white/70">

              Primera pieza oficial emitida durante la Temporada WORLD.

              <br /><br />

              Distribuida exclusivamente durante el Drop 001.

              <br /><br />

              Forma parte del Archivo Histórico LT90.

            </p>

          </div>

          <div className="border-t border-white/10 mt-12 pt-10">

            <p className="text-[10px] uppercase tracking-[0.45em] text-white/35">
              ARCHIVO
            </p>

            <button
              className="
                mt-6
                uppercase
                tracking-[0.35em]
                text-sm
                hover:text-[#E6C98A]
                transition-colors
              "
            >
              Ver documento →
            </button>

          </div>

        </div>
      </div>

    </div>

 </div>

  )

}