'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/contexts/UserContext'
import { usePurchase } from '@/contexts/PurchaseContext'

export default function ConfirmationPage() {
  const router = useRouter()
  const { user, setUser } = useUser()
  const { cart } = usePurchase()

  useEffect(() => {
    if (!user) {
      return
    }

    /*
     * Si el usuario ya fue incorporado,
     * no volvemos a asignarle otro número.
     */
    if (user.socio !== null) {
      const timer = setTimeout(() => {
        router.push('/account')
      }, 3000)

      return () => clearTimeout(timer)
    }

    /*
     * CONTADOR DROP 001
     *
     * 1  → primer comprador
     * 90 → último Founding Member
     * 91 → primer socio normal
     */
    const contadorKey = 'lt90_drop001_incorporaciones'

    const registroKey =
      `lt90_drop001_registro_${user.correo}`

    /*
     * Comprobamos si este correo ya fue incorporado.
     */
    const registroExistente =
      localStorage.getItem(registroKey)

    if (!registroExistente) {
      const contadorGuardado =
        localStorage.getItem(contadorKey)

      const siguienteNumero =
        contadorGuardado
          ? Number(contadorGuardado) + 1
          : 1

      /*
       * Guardamos inmediatamente el nuevo contador.
       */
      localStorage.setItem(
        contadorKey,
        String(siguienteNumero)
      )

      /*
       * Los primeros 90 reciben Founding Member.
       */
      const esFoundingMember =
        siguienteNumero <= 90

     const rango: 'FOUNDING_MEMBER' | 'SOCIO' =
  esFoundingMember
    ? 'FOUNDING_MEMBER'
    : 'SOCIO'

      /*
       * Número de Pasaporte.
       */
      const numeroPasaporte =
        `LT90-${new Date().getFullYear()}-${String(
          siguienteNumero
        ).padStart(5, '0')}`

      /*
       * Conservamos los stickers que ya pudiera tener
       * el usuario.
       */
      const stickersActuales =
        user.stickers ?? []

      /*
       * Founding Member recibe su sticker automáticamente.
       */
      const stickersActualizados =
        esFoundingMember
          ? Array.from(
              new Set([
                ...stickersActuales,
                'FOUNDING_MEMBER',
              ])
            )
          : stickersActuales

      /*
       * Actualizamos el perfil del socio.
       */
      const usuarioActualizado = {
  ...user,
  socio: siguienteNumero,
  pasaporte: numeroPasaporte,
  rango,
  stickers: stickersActualizados,
  drops: Array.from(
  new Set([
    ...(user.drops ?? []),
    '001 — WORLD',
  ])
),
piezas: Array.from(
  new Set([
    ...(user.piezas ?? []),
    ...cart.map((item) => item.nombre),
  ])
),
}

      setUser(usuarioActualizado)

      /*
       * Registro de seguridad para que el mismo correo
       * no vuelva a consumir un número.
       */
      localStorage.setItem(
        registroKey,
        JSON.stringify({
          socio: siguienteNumero,
          pasaporte: numeroPasaporte,
          rango,
        })
      )
    }

    /*
     * Después de validar, volvemos al Pasaporte digital.
     */
    const timer = setTimeout(() => {
      router.push('/account')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router, user, setUser, cart])

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
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

          {/* IDENTIDAD */}

          <div className="flex justify-between">
            <span
              className="
                tracking-[0.20em]
                uppercase
                text-[12px]
                text-white/45
              "
            >
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

          {/* PASAPORTE */}

          <div className="flex justify-between">
            <span
              className="
                tracking-[0.20em]
                uppercase
                text-[12px]
                text-white/45
              "
            >
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

          {/* INCORPORACIÓN */}

          <div className="flex justify-between">
            <span
              className="
                tracking-[0.20em]
                uppercase
                text-[12px]
                text-white/45
              "
            >
              Incorporación
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

          {/* RANGO */}

          <div className="flex justify-between">
            <span
              className="
                tracking-[0.20em]
                uppercase
                text-[12px]
                text-white/45
              "
            >
              Rango
            </span>

            <span
              className="
                text-white/70
                text-[12px]
                uppercase
                tracking-[0.20em]
              "
            >
              {user?.rango === 'FOUNDING_MEMBER'
                ? 'FOUNDING MEMBER'
                : 'SOCIO'}
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
          Integrando la pieza al Pasaporte y generando
          su registro oficial.
        </p>

      </div>
    </main>
  )
}