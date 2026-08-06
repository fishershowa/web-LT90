'use client'
import { usePurchase } from '@/contexts/PurchaseContext'
import { useRouter } from 'next/navigation'

export default function OrderSummary() {

  const { purchase } = usePurchase()
  const router = useRouter()

  if (!purchase) return null

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
      {/* Imagen */}

      <div className="flex justify-center">

        <img
          src={purchase.imagen}
          alt="WORLD JERSEY"
          className="
            w-[145px]
            h-auto
            object-contain
            select-none
          "
        />

      </div>

      {/* Producto */}

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
            text-[17px]
            font-extralight
            tracking-[0.08em]
          "
        >
          {purchase.nombre}
        </h3>

        <p
          className="
            mt-2
            uppercase
            tracking-[0.35em]
            text-[10px]
            text-white/45
          "
        >
          {purchase.tipo === 'wearable'
  ? `Talla ${purchase.talla}`
  : 'Objeto de colección'}
        </p>

      </div>

      {/* Total */}

      <div
        className="
          mt-5
          pt-5
          border-t
          border-white/10
        "
      >

        <div className="flex justify-between items-center">

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

          <div className="flex items-end gap-2">

            <span
              className="
                text-[16px]
                font-extralight
              "
            >
              {purchase.precio.toLocaleString('es-CL')}
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

      {/* Registro */}

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
              Pieza
            </span>

            <span className="text-[12px] text-white/80">
              Nº automático
            </span>

          </div>

        </div>

      </div>

      {/* Esto empuja el botón abajo */}

      <div className="flex-1" />

      {/* Botón */}

      <button
      onClick={() => router.push('/confirmation')}
        className="
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