'use client'

import { useRouter } from 'next/navigation'

export default function PassportPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="max-w-[700px] text-center">

        <p
          className="
            uppercase
            tracking-[0.70em]
            text-[9px]
            text-white/20
          "
        >
          LT90
        </p>

        <h1
          className="
            mt-6
            uppercase
            text-[48px]
            font-extralight
            tracking-[0.12em]
          "
        >
          INGRESO CONFIRMADO
        </h1>

        <p
          className="
            mt-12
            text-[15px]
            leading-9
            text-white/45
          "
        >
          Tu incorporación ha sido registrada correctamente.
        </p>

        <div
          className="
            mt-16
            border
            border-white/10
            p-10
          "
        >
          <p className="uppercase tracking-[0.40em] text-[10px] text-white/30">
            PASAPORTE LT90
          </p>

          <p className="mt-8 text-[18px] font-extralight">
            Socio #001
          </p>

          <p className="mt-3 text-white/50">
            WORLD JERSEY
          </p>

          <p className="mt-8 text-[24px] font-extralight">
            Pieza #090
          </p>
        </div>

        <button
          onClick={() => router.push('/account')}
          className="
            mt-16
            h-[56px]
            px-12

            bg-white
            text-black

            uppercase
            tracking-[0.55em]
            text-[11px]

            hover:bg-neutral-200
            transition
          "
        >
          IR A MI PASAPORTE
        </button>

      </div>

    </main>
  )
}