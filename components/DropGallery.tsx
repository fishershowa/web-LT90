'use client'

const piezas = [
  {
    nombre: 'WORLD JERSEY',
    imagen: '/products/world-jersey.png',
  },
  {
    nombre: 'WORLD SNAPBACK',
    imagen: '/products/world-snapback.png',
  },
]

export default function DropCarousel() {
  return (
    <section className="bg-black text-white">

      <div className="px-14 pt-20 pb-12">

        <p className="text-[10px] tracking-[0.55em] uppercase text-white/30">
          DROP 001
        </p>

        <h1
          className="
            mt-5
            text-[96px]
            md:text-[140px]
            font-extralight
            uppercase
            tracking-[0.24em]
            leading-none
          "
        >
          WORLD
        </h1>

      </div>

      <div
        className="
          flex
          overflow-x-auto
          gap-10
          px-14
          pb-20
          scrollbar-hide
        "
      >

        {piezas.map((pieza) => (

          <div
            key={pieza.nombre}
            className="
              flex-shrink-0
              w-[38vw]
              min-w-[520px]
            "
          >

            <img
              src={pieza.imagen}
              alt={pieza.nombre}
              className="w-full object-contain"
            />

            <h2
              className="
                mt-8
                text-center
                uppercase
                tracking-[0.35em]
                text-lg
                font-light
              "
            >
              {pieza.nombre}
            </h2>

          </div>

        ))}

      </div>

    </section>
  )
}