'use client'

export default function ShippingSection() {
  return (
    <section className="mt-24">

      <p
        className="
          uppercase
          tracking-[0.60em]
          text-[10px]
          text-white/25
        "
      >
        ENVÍO
      </p>

      <p
        className="
          mt-8
          max-w-[560px]
          text-[13px]
          leading-8
          text-white/45
        "
      >
        Las piezas físicas son enviadas desde Chile.
        Esta dirección quedará asociada únicamente a esta incorporación.
      </p>

      <div className="mt-14 space-y-10">

        <input
          placeholder="Dirección"
          className="
            w-full
            bg-transparent
            border-b
            border-white/10
            pb-4

            outline-none

            text-[15px]

            placeholder:text-white/25

            focus:border-white/40
            transition
          "
        />

        <div className="grid grid-cols-2 gap-12">

          <input
            placeholder="Ciudad"
            className="
              bg-transparent
              border-b
              border-white/10
              pb-4

              outline-none

              text-[15px]

              placeholder:text-white/25

              focus:border-white/40
              transition
            "
          />

          <input
            placeholder="Región / Estado"
            className="
              bg-transparent
              border-b
              border-white/10
              pb-4

              outline-none

              text-[15px]

              placeholder:text-white/25

              focus:border-white/40
              transition
            "
          />

        </div>

        <div className="grid grid-cols-2 gap-12">

          <input
            placeholder="Código postal"
            className="
              bg-transparent
              border-b
              border-white/10
              pb-4

              outline-none

              text-[15px]

              placeholder:text-white/25

              focus:border-white/40
              transition
            "
          />

          <input
            placeholder="País"
            className="
              bg-transparent
              border-b
              border-white/10
              pb-4

              outline-none

              text-[15px]

              placeholder:text-white/25

              focus:border-white/40
              transition
            "
          />

        </div>

      </div>

      <div
        className="
          mt-18
          border-l
          border-white/10
          pl-6
        "
      >

        <p
          className="
            uppercase
            tracking-[0.30em]
            text-[11px]
            text-white/80
          "
        >
          Método de despacho
        </p>

        <p
          className="
            mt-4
            text-[13px]
            leading-8
            text-white/45
          "
        >
          El método disponible será calculado automáticamente
          según el país y la ciudad de destino.
        </p>

      </div>

    </section>
  )
}