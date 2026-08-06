'use client'

interface Props {
  item: {
    titulo: string
    categoria: string
    año: string
    portada: string
  }

  onClose: () => void
}

export default function ExpedienteContent({ item, onClose }: Props) {
  return (
    <section className="w-full bg-black text-white">

      {/* HERO */}

      <section className="relative h-[100vh] overflow-hidden">

        <img
          src={item.portada}
          alt={item.titulo}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Botón volver */}

        <button
          onClick={onClose}
          className="
            absolute
            top-10
            left-10
            z-20

            uppercase
            tracking-[0.35em]
            text-xs

            text-white/60
            hover:text-white

            transition
          "
        >
          ← VOLVER
        </button>

        {/* Información */}

       <div className="absolute bottom-28 left-16 z-20">

  <p className="uppercase tracking-[0.45em] text-xs text-white/60">
    {item.categoria}
  </p>

  <h1 className="mt-5 text-7xl uppercase font-extralight tracking-[0.12em]">
    {item.titulo}
  </h1>

  <p className="mt-5 uppercase tracking-[0.35em] text-xs text-white/50">
    {item.año}
  </p>

</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/50 animate-bounce">

  <span className="uppercase tracking-[0.45em] text-[10px]">
    SCROLL
  </span>

  <span className="mt-2 text-xl">
    ↓
  </span>

</div>

</section>

      {/* CONTENIDO */}

      <section className="max-w-7xl mx-auto px-16 py-40">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.45em] text-xs text-white/30">
            Manifiesto
          </p>

          <h2 className="mt-8 text-5xl uppercase font-extralight">
            Aquí comenzará la historia completa del expediente.
          </h2>

          <p className="mt-10 leading-8 text-white/60">
            Aquí irá toda la historia del Drop, fotografías,
            certificados, videos, backstage,
            inspiración, entrevistas y cualquier documento histórico
            relacionado con esta pieza.
          </p>

        </div>

      </section>

      {/* GALERÍA */}

      <section className="max-w-7xl mx-auto px-16 pb-40">

        <p className="uppercase tracking-[0.45em] text-xs text-white/30 mb-10">
          Galería
        </p>

        <div className="grid grid-cols-3 gap-6">

          {[1,2,3,4,5,6].map((i)=>(
            <div
              key={i}
              className="aspect-square bg-neutral-900 rounded-md"
            />
          ))}

        </div>

      </section>

    </section>
  )
}