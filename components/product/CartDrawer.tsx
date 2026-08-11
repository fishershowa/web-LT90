'use client'

import Link from 'next/link'
import { usePurchase } from '@/contexts/PurchaseContext'

type CartDrawerProps = {
  open: boolean
  onClose: () => void

  // Se mantienen para no romper ProductView.
  nombre: string
  imagen: string
  precio: number
  talla: string
  tipo: string

  // Hace que SEGUIR EXPLORANDO vuelva al Drop.
  onContinueShopping?: () => void
}

export default function CartDrawer({
  open,
  onClose,

  nombre,
  imagen,
  precio,
  talla,
  tipo,

  onContinueShopping,
}: CartDrawerProps) {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = usePurchase()

  /*
   * Mientras React actualiza el carrito,
   * usamos la pieza actual como respaldo.
   */
  const items =
    cart.length > 0
      ? cart
      : [
          {
            nombre,
            imagen,
            precio,
            talla,
            tipo,
            cantidad: 1,
            maxCantidad: 1,
          },
        ]

  const total = items.reduce(
    (sum, item) =>
      sum +
      item.precio *
        (item.cantidad ?? 1),
    0
  )

  const handleContinueShopping = () => {
    onClose()

    if (onContinueShopping) {
      onContinueShopping()
    }
  }

  return (
    <>
      {/* FONDO */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[90]
          bg-black/70
          backdrop-blur-sm
          transition-all duration-300

          ${
            open
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }
        `}
      />

      {/* DRAWER */}

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

          ${
            open
              ? 'translate-x-0'
              : 'translate-x-full'
          }
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

          {/* PRODUCTOS */}

          <div
            className="
              mt-8
              flex-1
              overflow-y-auto
              pr-2
              space-y-8
            "
          >

            {items.map((item) => {
              const cantidad =
                item.cantidad ?? 1

              const maxCantidad =
                item.maxCantidad ?? 1

              const puedeSumar =
                cantidad < maxCantidad

              return (
                <div
                  key={item.nombre}
                  className="
                    border-b
                    border-white/10
                    pb-8
                  "
                >

                  <div className="flex gap-6">

                    {/* IMAGEN */}

                    <div
                      className="
                        w-28
                        h-36
                        flex-shrink-0
                        overflow-hidden
                        rounded-md
                        bg-neutral-900
                      "
                    >
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />
                    </div>

                    {/* INFORMACIÓN */}

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
                          text-[24px]
                          font-extralight
                          leading-none
                        "
                      >
                        {item.nombre}
                      </h3>

                      {/* TALLA + CANTIDAD */}

                      <div
                        className="
                          mt-6
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <p
                          className="
                            uppercase
                            tracking-[0.10em]
                            text-[12px]
                            text-white/55
                          "
                        >
                          {item.tipo === 'wearable'
                            ? `Talla ${item.talla}`
                            : 'Objeto de colección'}
                        </p>

                        {/* CONTADOR */}

                        <div
                          className="
                            flex
                            items-center
                            border
                            border-white/10
                          "
                        >

                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(
                                item.nombre
                              )
                            }
                            disabled={
                              cantidad <= 1
                            }
                            className="
                              w-8
                              h-8
                              text-white/50
                              hover:text-white
                              disabled:opacity-20
                              transition
                            "
                          >
                            −
                          </button>

                          <span
                            className="
                              w-8
                              text-center
                              text-[11px]
                              text-white/80
                            "
                          >
                            {cantidad}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(
                                item.nombre
                              )
                            }
                            disabled={
                              !puedeSumar
                            }
                            className="
                              w-8
                              h-8
                              text-white/50
                              hover:text-white
                              disabled:opacity-20
                              transition
                            "
                          >
                            +
                          </button>

                        </div>

                      </div>

                      {/* PRECIO */}

                      <p
                        className="
                          mt-5
                          text-[13px]
                          text-white/55
                        "
                      >
                        {(
                          item.precio *
                          cantidad
                        ).toLocaleString('es-CL')}{' '}
                        CLP
                      </p>

                      {/* ELIMINAR */}

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(
                            item.nombre
                          )
                        }
                        className="
                          mt-4
                          uppercase
                          tracking-[0.35em]
                          text-[8px]
                          text-white/20
                          hover:text-white/60
                          transition
                        "
                      >
                        ELIMINAR
                      </button>

                    </div>

                  </div>

                </div>
              )
            })}

          </div>

          {/* FOOTER */}

          <div className="pt-8">

            {/* TOTAL */}

            <div
              className="
                flex
                items-center
                justify-between
                mb-6
              "
            >

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

              <div
                className="
                  flex
                  items-end
                  gap-2
                "
              >

                <span
                  className="
                    text-[22px]
                    font-extralight
                    tracking-[0.02em]
                    text-white/90
                  "
                >
                  {total.toLocaleString(
                    'es-CL'
                  )}
                </span>

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-white/40
                  "
                >
                  CLP
                </span>

              </div>

            </div>

            {/* CONTINUAR */}

            <Link href="/checkout">
              <button
                type="button"
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

            {/* SEGUIR EXPLORANDO */}

            <button
              type="button"
              onClick={
                handleContinueShopping
              }
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
              Las piezas de este Drop no pueden
              repetirse dentro de la misma selección.
              Cada incorporación queda registrada
              dentro de tu Pasaporte.
            </p>

          </div>

        </div>
      </aside>
    </>
  )
}