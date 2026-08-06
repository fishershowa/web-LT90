'use client'

import Link from 'next/link'

type CartDrawerProps = {
  open: boolean
  onClose: () => void

  nombre: string
  imagen: string
  precio: number
  talla: string
  tipo: string
}

export default function CartDrawer({
  open,
  onClose,
  nombre,
  imagen,
  precio,
  talla,
  tipo,
}: CartDrawerProps) {
  return (
    <>
      {/* Fondo */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[90]
          bg-black/70
          backdrop-blur-sm
          transition-all duration-300

          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[520px]
          bg-[#0b0b0b]
          border-l border-white/10

          z-[100]

          transition-all
          duration-500

          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="relative flex flex-col h-full px-10 py-10">

          {/* HEADER */}

          <div className="relative">

            <div className="max-w-[340px]">

              <p
                className="
                  uppercase
                  tracking-[0.70em]
                  text-[9px]
                  text-white/20
                "
              >
                DROP 001
              </p>

              <h2
                className="
                  mt-3
                  uppercase
                  text-[30px]
                  font-extralight
                  tracking-[0.10em]
                "
              >
                SELECCIÓN
              </h2>

              <p
                className="
                  mt-5
                  text-[12px]
                  leading-7
                  text-white/45
                  max-w-[320px]
                "
              >
                Confirma tu selección antes de iniciar el registro de la pieza.
              </p>

            </div>

            <button
              onClick={onClose}
              className="
                absolute
                top-0
                right-0

                text-[48px]
                font-extralight

                text-white/60
                hover:text-white

                transition
              "
            >
              ×
            </button>

          </div>

          {/* PRODUCTO */}

          <div className="mt-14">

            <div className="flex gap-6">

              <div
                className="
                  w-28
                  h-36
                  overflow-hidden
                  rounded-md
                  bg-neutral-900
                "
              >
                <img
                  src={imagen}
                  alt={nombre}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              <div className="flex-1">

                <p
                  className="
                    uppercase
                    tracking-[0.45em]
                    text-[10px]
                    text-white/25
                  "
                >
                  DROP 001
                </p>

                <h3
                  className="
                    mt-2
                    uppercase
                    text-[28px]
                    font-extralight
                    leading-none
                  "
                >
                  {nombre}
                </h3>

                <p
                  className="
                    mt-6
                    uppercase
                    tracking-[0.10em]
                    text-[13px]
                    text-white/55
                  "
                >
                  {tipo === 'wearable'
                    ? `Talla ${talla}`
                    : 'Objeto de colección'}
                </p>

              </div>

            </div>

          </div>

          {/* FOOTER */}

          <div className="mt-auto pt-8">

            <div className="flex items-center justify-between">

              <span
                className="
                  uppercase
                  tracking-[0.45em]
                  text-[10px]
                  text-white/30
                "
              >
                Total
              </span>

             <span
  className="
    text-[22px]
    font-extralight
    tracking-[0.02em]
    text-white/90
  "
>
  {precio.toLocaleString('es-CL')}{" "}
  <span
    className="
      text-[10px]
      uppercase
      tracking-[0.35em]
      text-white/40
      ml-1
      align-middle
    "
  >
    CLP
  </span>
</span>

            </div>

            <Link href="/checkout">

  <button
    className="
      w-full
      h-[58px]

      bg-white
      text-black

      uppercase
      tracking-[0.55em]
      text-[11px]

      hover:bg-neutral-200
      transition-all
      duration-300
    "
  >
    CONTINUAR
  </button>

</Link>

            <button
              onClick={onClose}
              className="
                mt-4
                w-full
                h-[50px]

                border
                border-white/10

                uppercase
                tracking-[0.45em]
                text-[10px]
                text-white/55

                hover:text-white
                hover:border-white/25

                transition
              "
            >
              SEGUIR EXPLORANDO
            </button>

            <p
              className="
                mt-6
                text-[11px]
                leading-6
                text-white/30
              "
            >
              Una vez confirmada la adquisición, esta pieza quedará vinculada a tu Pasaporte.
            </p>

          </div>

        </div>

      </aside>

    </>
  )
}