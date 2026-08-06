'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/contexts/UserContext'

export default function ConfirmationPage() {
  const router = useRouter()
const { user, setUser } = useUser()
  useEffect(() => {

  if (user && user.socio === null) {

    const numeroSocio = Math.floor(Math.random() * 9000) + 1000

    const numeroPasaporte =
      `LT90-${new Date().getFullYear()}-${numeroSocio}`

    setUser({

      ...user,

      socio: numeroSocio,

      pasaporte: numeroPasaporte,

    })

  }

  const timer = setTimeout(() => {

    router.push('/account')

  }, 3000)

  return () => clearTimeout(timer)

}, [router, user, setUser])

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="w-full max-w-[620px]">

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
          VALIDANDO
        </h1>

        <div
          className="
            mt-16
            border-l
            border-white/10
            pl-8
            space-y-8
          "
        >
          <div className="flex justify-between">
            <span className="tracking-[0.20em] uppercase text-[12px] text-white/45">
              Identidad
            </span>

            <span
  className="
    text-[#C9A96B]
    text-[18px]
    font-light
  "
>
  ✓
</span>
          </div>

          <div className="flex justify-between">
            <span className="tracking-[0.20em] uppercase text-[12px] text-white/45">
              Pasaporte
            </span>

            <span
  className="
    text-[#C9A96B]
    text-[18px]
    font-light
  "
>
  ✓
</span>
          </div>

          <div className="flex justify-between">
            <span className="tracking-[0.20em] uppercase text-[12px] text-white/45">
              Disponibilidad
            </span>

            <span
  className="
    text-[#C9A96B]
    text-[18px]
    font-light
  "
>
  ✓
</span>
          </div>

          <div className="flex justify-between">
            <span className="tracking-[0.20em] uppercase text-[12px] text-white/45">
              Pieza
            </span>

            <span className="animate-pulse text-white/70">
              ...
            </span>
          </div>
        </div>

        <p
  className="
    mt-16
    text-[13px]
    leading-8
    text-white/40
  "
>
  Integrando la pieza al Pasaporte y generando su registro oficial.
</p>

      </div>

    </main>
  )
}