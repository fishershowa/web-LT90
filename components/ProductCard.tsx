import { useState } from 'react'
import ProductViewer from './ProductViewer'
type ProductCardProps = {
  nombre: string
  drop: string
  serie: string
  estado: string
  imagen: string
  compact?: boolean
  onOpen?: () => void
}

export default function ProductCard({
  nombre,
  drop,
  serie,
  estado,
  imagen,
  compact = false,
  onOpen,
}: ProductCardProps) {
  const [open, setOpen] = useState(false)
  return (
  <div
  className="border-b border-white/10 py-6 last:border-0"
>

      <div className="flex items-center justify-between gap-8">

        {/* Información */}

        <div className="flex-1">

         <div>

  <p className="text-[10px] uppercase tracking-[0.40em] text-white/35">
    PIEZA
  </p>

  <h3
    className="
      mt-3
      uppercase
      tracking-[0.28em]
      text-xl
      font-light
      transition-all
      duration-500
      hover:text-[#E6C98A]
    "
  >
    {nombre}
  </h3>

</div>

          <div className="mt-5">

            <p className="text-white/35 uppercase tracking-[0.24em] text-[11px]">
              {drop}
            </p>

           <div className="mt-6 inline-flex flex-col items-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] px-8 py-6">

  <p className="text-[8px] uppercase tracking-[0.55em] text-white/30">
    SERIE OFICIAL
  </p>

  <div className="w-12 h-px bg-white/10 my-4"></div>

  <p className="text-[30px] font-light tracking-[0.35em] leading-none">
    {serie}
  </p>

</div>

      <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">

  <div className="flex justify-between text-xs uppercase tracking-[0.22em]">

    <span className="text-white/35">
      Estado
    </span>

    <span className="text-[#C6A86A]">
      {estado}
    </span>

  </div>

  <div className="mt-3 flex justify-between text-xs uppercase tracking-[0.22em]">

    <span className="text-white/35">
      Serie
    </span>

    <span>
      {serie}
    </span>

  </div>

  <div className="mt-3 flex justify-between text-xs uppercase tracking-[0.22em]">

    <span className="text-white/35">
      Drop
    </span>

    <span>
      {drop}
    </span>

  </div>

</div>

          </div>

        </div>

        {/* Imagen */}

        <div className="flex items-center justify-center">

  <div
  onClick={(e) => {
    e.stopPropagation()
    setOpen(!open)
    onOpen?.()
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-2xl
    border
    border-white/10
    bg-gradient-to-b
    from-white/[0.04]
    to-white/[0.01]
    p-6
    transition-all
    duration-500
    hover:border-white/20
    hover:bg-white/[0.04]
    cursor-pointer
  "
>
<div
  className="
    absolute
    inset-0
    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]
    opacity-0
    transition-all
    duration-700
    group-hover:opacity-100
  "
/>

<div
  className="
    absolute
    bottom-3
    left-1/2
    -translate-x-1/2
    w-24
    h-5
    rounded-full
    bg-black/50
    blur-xl
    transition-all
    duration-500
    group-hover:w-32
    group-hover:opacity-80
  "
/>
 <img
  src={imagen}
  alt={nombre}
  className={`
    object-contain
    origin-center
    transition-transform
    duration-500
    ease-out
    group-hover:scale-[1.12]
    ${
      compact
        ? 'w-32 h-32'
        : 'w-48 h-48'
    }
  `}
/>
  

</div>
</div>

      </div>
{open && (

  <ProductViewer
    nombre={nombre}
    serie={serie}
    drop={drop}
    imagen={imagen}
  />

)}
    </div>
  )
}