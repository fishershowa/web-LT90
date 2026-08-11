'use client'

import { usePurchase } from '@/contexts/PurchaseContext'
import { useRouter } from 'next/navigation'

export default function OrderSummary() {

  const {
    cart,
    purchase,
  } = usePurchase()

  const router = useRouter()

  /*
   * Compatibilidad con el sistema anterior.
   */
  const items =
    cart.length > 0
      ? cart
      : purchase
      ? [
          {
            ...purchase,
            cantidad:
              purchase.cantidad ?? 1,
          },
        ]
      : []

  if (items.length === 0) {
    return null
  }

  const total = items.reduce(
    (sum, item) =>
      sum +
      item.precio *
        (item.cantidad ?? 1),
    0
  )

  return (
    <aside
      className="
        sticky
        top-20
        h-[calc(100vh-80px)]
        w-[330px]
        border
        border-white/10
        px-6
        py-6
        flex
        flex-col
      "
    >

      {/* PRODUCTOS */}

      <div
        className="
          flex-1
          overflow-y-auto
          space-y-7
        "
      >

        {items.map((item) => (

          <div
            key={item.nombre}
            className="
              pb-6
              border-b
              border-white/10
            "
          >

            {/* IMAGEN */}

            <div
              className="
                flex
                justify-center
              "
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="
                  w-[125px]
                  h-auto
                  object-contain
                  select-none
                "
              />
            </div>

            {/* PRODUCTO */}

            <div className="mt-5">

              <p
                className="
                  uppercase
                  tracking-[0.45em]
                  text-[9px]
                  text-white/20
                "
              >
                DROP 001
              </p>

              <h3
                className="
                  mt-2
                  uppercase
                  text-[16px]
                  font-extralight
                  tracking-[0.08em]
                "
              >
                {item.nombre}
              </h3>

              <div
                className="
                  mt-3
                  flex
                  justify-between
                  items-center
                "
              >

                <p
                  className="
                    uppercase
                    tracking-[0.30em]
                    text-[10px]
                    text-white/45
                  "
                >
                  {item.tipo === 'wearable'
                    ? `Talla ${item.talla}`
                    : 'Objeto de colección'}
                </p>

                <p
                  className="
                    text-[11px]
                    text-white/60
                  "
                >
                  × {item.cantidad ?? 1}
                </p>

              </div>

              <p
                className="
                  mt-3
                  text-[12px]
                  text-white/45
                "
              >
                {(
                  item.precio *
                  (item.cantidad ?? 1)
                ).toLocaleString('es-CL')}{' '}
                CLP
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* REGISTRO */}

      <div
        className="
          mt-5
          pt-5
          border-t
          border-white/10
        "
      >

        <p
          className="
            uppercase
            tracking-[0.55em]
            text-[9px]
            text-white/20
            mb-4
          "
        >
          REGISTRO
        </p>

        <div className="space-y-2">

          <div className="flex justify-between">

            <span className="text-[12px] text-white/40">
              Pasaporte
            </span>

            <span className="text-[12px] text-white/80">
              Automático
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-[12px] text-white/40">
              Socio
            </span>

            <span className="text-[12px] text-white/80">
              Según incorporación
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-[12px] text-white/40">
              Piezas
            </span>

            <span className="text-[12px] text-white/80">
              {items.reduce(
                (sum, item) =>
                  sum +
                  (item.cantidad ?? 1),
                0
              )}
            </span>

          </div>

        </div>

      </div>

      {/* TOTAL */}

      <div
        className="
          mt-5
          pt-5
          border-t
          border-white/10
        "
      >

        <div
          className="
            flex
            justify-between
            items-center
          "
        >

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-[9px]
              text-white/30
            "
          >
            TOTAL
          </span>

          <div
            className="
              flex
              items-end
              gap-2
            "
          >

            <span
              className="
                text-[18px]
                font-extralight
              "
            >
              {total.toLocaleString(
                'es-CL'
              )}
            </span>

            <span
              className="
                uppercase
                tracking-[0.30em]
                text-[9px]
                text-white/35
              "
            >
              CLP
            </span>

          </div>

        </div>

      </div>

      {/* BOTÓN */}

      <button
        onClick={() =>
          router.push('/confirmation')
        }
        className="
          mt-5
          w-full
          h-[52px]
          bg-white
          text-black
          uppercase
          tracking-[0.55em]
          text-[10px]
          hover:bg-neutral-200
          transition-all
          duration-300
        "
      >
        FINALIZAR INGRESO
      </button>

    </aside>
  )
}