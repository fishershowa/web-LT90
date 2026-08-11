'use client'

import { useEffect, useRef, useState } from 'react'
import ProductView from './ProductView'

const dropPieces = [
  {
    id: 1,
    nombre: 'WORLD JERSEY',
    imagenes: [
      '/products/world-jersey.png',
      '/products/world-jersey-back.png',
      '/products/world-model-1.png',
      '/products/world-model-2.png',
    ],
    precio: 89990,
    tipo: 'wearable',
    tallas: ['S', 'M', 'L', 'XL', 'XXL'],
    descripcion:
      'Primera pieza oficial de LT90. Limitada a 90 unidades.',
    disponible: 90,
    comprable: true,
  },

  {
    id: 2,
    nombre: 'WORLD SNAPBACK',
    imagenes: [
      '/products/world-snapback.png',
      '/products/world-snapback-side.png',
      '/products/world-snapback-model.png',
    ],
    precio: 49990,
    tipo: 'object',
    tallas: [],
    descripcion:
      'Objeto oficial del DROP 001.',
    disponible: 90,
    comprable: true,
  },

  {
    id: 3,
    nombre: 'LT90 PASSPORT',
    imagenes: [
      '/products/lt90-passport.png',
    ],
    precio: 0,
    tipo: 'object',
    tallas: [],
    descripcion:
      'Pasaporte Fundador reservado para las primeras 90 incorporaciones del DROP 001.',
    disponible: 90,
    incluido: true,
    comprable: false,
  },
]

export default function DropCarousel() {
  const [selectedPiece, setSelectedPiece] =
    useState<number | null>(null)

  const carouselRef =
    useRef<HTMLDivElement | null>(null)

  const isDragging =
    useRef(false)

  const hasDragged =
    useRef(false)

  const startX =
    useRef(0)

  const startScrollLeft =
    useRef(0)

  const autoScrollTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null)

  const autoScrollAnimation =
    useRef<number | null>(null)

  /*
   * =========================================================
   * PRODUCT VIEW
   * =========================================================
   *
   * IMPORTANTE:
   * Esta parte mantiene exactamente la conexión
   * que ya funcionaba con ProductView y checkout.
   *
   * No tocar.
   */

  /*
   * Todos los hooks están arriba de este punto.
   * Por eso este return condicional NO rompe las reglas de React.
   */

  /*
   * =========================================================
   * DETENER AUTO SCROLL
   * =========================================================
   */

  const stopAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearTimeout(autoScrollTimer.current)
      autoScrollTimer.current = null
    }

    if (autoScrollAnimation.current) {
      cancelAnimationFrame(
        autoScrollAnimation.current
      )

      autoScrollAnimation.current = null
    }
  }

  /*
   * =========================================================
   * OBTENER ANCHO DE UN BLOQUE
   * =========================================================
   */

  const getSetWidth = () => {
    const carousel = carouselRef.current

    if (!carousel) return 0

    /*
     * Tenemos tres copias del mismo grupo:
     *
     * JERSEY
     * SNAPBACK
     * PASSPORT
     *
     * JERSEY
     * SNAPBACK
     * PASSPORT
     *
     * JERSEY
     * SNAPBACK
     * PASSPORT
     *
     * El ancho total / 3 nos da exactamente
     * el ancho de una vuelta.
     */

    return carousel.scrollWidth / 3
  }

  /*
   * =========================================================
   * NORMALIZAR POSICIÓN
   * =========================================================
   *
   * Cuando estamos en la primera o tercera copia,
   * volvemos silenciosamente a la copia central.
   *
   * Visualmente no se nota.
   */

  const normalizeCarousel = () => {
    const carousel = carouselRef.current

    if (!carousel) return

    const setWidth = getSetWidth()

    if (!setWidth) return

    const current = carousel.scrollLeft

    if (current < setWidth * 0.5) {
      carousel.scrollLeft =
        current + setWidth
    }

    if (current > setWidth * 1.5) {
      carousel.scrollLeft =
        current - setWidth
    }
  }

  /*
   * =========================================================
   * AUTO SCROLL
   * =========================================================
   *
   * Espera 10 segundos.
   *
   * Después desplaza lentamente UNA pieza.
   *
   * Al terminar vuelve a esperar 10 segundos.
   *
   * Nunca muestra una barra.
   */

  const startAutoScroll = () => {
    stopAutoScroll()

    autoScrollTimer.current =
      setTimeout(() => {
        const carousel =
          carouselRef.current

        if (!carousel) return

        const setWidth =
          getSetWidth()

        if (!setWidth) {
          startAutoScroll()
          return
        }

        const current =
          carousel.scrollLeft

        /*
         * Avanzamos aproximadamente
         * el ancho de una tarjeta + gap.
         */

        const distance =
          carousel.clientWidth * 0.35

        const target =
          Math.min(
            current + distance,
            setWidth * 1.5
          )

        const start =
          carousel.scrollLeft

        const duration = 6000

        const startTime =
          performance.now()

        const animate = (
          currentTime: number
        ) => {
          const elapsed =
            currentTime - startTime

          const progress =
            Math.min(
              elapsed / duration,
              1
            )

          /*
           * Movimiento suave.
           */

          const eased =
            1 -
            Math.pow(
              1 - progress,
              3
            )

          carousel.scrollLeft =
            start +
            (target - start) *
              eased

          if (progress < 1) {
            autoScrollAnimation.current =
              requestAnimationFrame(
                animate
              )
          } else {
            autoScrollAnimation.current =
              null

            normalizeCarousel()

            startAutoScroll()
          }
        }

        autoScrollAnimation.current =
          requestAnimationFrame(
            animate
          )
      }, 10000)
  }

  /*
   * =========================================================
   * INICIALIZAR
   * =========================================================
   *
   * Arrancamos en la copia central.
   */

  useEffect(() => {
    const carousel =
      carouselRef.current

    if (!carousel) return

    const initialize = () => {
      const setWidth =
        getSetWidth()

      if (setWidth > 0) {
        carousel.scrollLeft =
          setWidth
      }

      startAutoScroll()
    }

    const frame =
      requestAnimationFrame(
        initialize
      )

    return () => {
      cancelAnimationFrame(frame)
      stopAutoScroll()
    }
  }, [])

  /*
   * =========================================================
   * DRAG CON CLIC IZQUIERDO
   * =========================================================
   *
   * NO HAY SCROLLBAR VISIBLE.
   *
   * Mantener clic izquierdo + mover mouse
   * = mover carrusel.
   *
   * Clic normal sin desplazamiento
   * = abrir producto.
   */

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.button !== 0) return

    const carousel =
      carouselRef.current

    if (!carousel) return

    stopAutoScroll()

    isDragging.current = true
    hasDragged.current = false

    startX.current =
      e.clientX

    startScrollLeft.current =
      carousel.scrollLeft

    carousel.style.cursor =
      'grabbing'

    carousel.style.userSelect =
      'none'
  }

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isDragging.current) return

    const carousel =
      carouselRef.current

    if (!carousel) return

    const distance =
      e.clientX -
      startX.current

    /*
     * Apenas movemos 5px,
     * ya consideramos que es drag.
     */

    if (
      Math.abs(distance) > 5
    ) {
      hasDragged.current = true
    }

    carousel.scrollLeft =
      startScrollLeft.current -
      distance
  }

  const finishDrag = () => {
    if (!isDragging.current) return

    isDragging.current = false

    const carousel =
      carouselRef.current

    if (carousel) {
      carousel.style.cursor =
        'grab'

      carousel.style.userSelect =
        'auto'

      normalizeCarousel()
    }

    /*
     * Volvemos a activar
     * el auto movimiento.
     */

    startAutoScroll()

    /*
     * Si hubo desplazamiento,
     * impedimos que el click posterior
     * abra accidentalmente una pieza.
     */

    if (hasDragged.current) {
      setTimeout(() => {
        hasDragged.current = false
      }, 100)
    }
  }

  const handleMouseLeave = () => {
    if (!isDragging.current) return

    finishDrag()
  }

  /*
   * =========================================================
   * PRODUCT VIEW
   * =========================================================
   */

  if (selectedPiece !== null) {
    const piece =
      dropPieces.find(
        (p) => p.id === selectedPiece
      )

    if (!piece) return null

    return (
      <ProductView
        nombre={piece.nombre}
        imagenes={piece.imagenes}
        precio={piece.precio}
        descripcion={piece.descripcion}
        tipo={piece.tipo}
        tallas={piece.tallas}
        disponible={piece.disponible}
        onBack={() =>
          setSelectedPiece(null)
        }
      />
    )
  }

  /*
   * =========================================================
   * TRES COPIAS VISUALES
   * =========================================================
   *
   * Esto permite:
   *
   * JERSEY
   * SNAPBACK
   * PASSPORT
   * JERSEY
   * SNAPBACK
   * PASSPORT
   * JERSEY
   * SNAPBACK
   * PASSPORT
   *
   * No son productos nuevos.
   * Son solamente copias visuales para
   * que el carrusel pueda girar infinitamente.
   */

  const carouselPieces = [
    ...dropPieces,
    ...dropPieces,
    ...dropPieces,
  ]

  return (
    <section className="w-full bg-black text-white">

      {/* =====================================================
          CABECERA
          ===================================================== */}

      <div
        className="
          px-8
          md:px-12
          pt-6
          pb-5
        "
      >
        <div
          className="
            flex
            items-baseline
            gap-4
            md:gap-6
          "
        >

          <h1
            className="
              text-[28px]
              md:text-[40px]
              font-extralight
              uppercase
              tracking-[0.12em]
              leading-none
            "
          >
            WORLD
          </h1>

          <p
            className="
              text-[8px]
              md:text-[9px]
              uppercase
              tracking-[0.4em]
              text-white/30
              whitespace-nowrap
            "
          >
            DROP 001
          </p>

        </div>
      </div>


      {/* =====================================================
          CARRUSEL
          ===================================================== */}

      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={finishDrag}
        onMouseLeave={handleMouseLeave}
        className="
          w-full
          overflow-x-auto
          overflow-y-hidden
          scrollbar-hide
          cursor-grab
        "
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >

        <div
          className="
            flex
            gap-4
            px-8
            md:px-12
            pb-8
            w-max
          "
        >

          {carouselPieces.map(
            (piece, index) => {

              const originalIndex =
                index % dropPieces.length

              return (
                <button
                  key={`${index}-${piece.id}`}
                  type="button"

                  /*
                   * =================================================
                   * CLICK DEL PRODUCTO
                   * =================================================
                   *
                   * ESTA PARTE ES LA QUE NO DEBEMOS ROMPER.
                   *
                   * Click normal -> ProductView.
                   *
                   * Drag -> NO abre ProductView.
                   */

                  onClick={(e) => {
                    if (
                      hasDragged.current
                    ) {
                      e.preventDefault()
                      return
                    }

                    setSelectedPiece(
                      piece.id
                    )
                  }}

                  className="
                    group
                    relative
                    flex-shrink-0

                    /*
                     * 35vw:
                     *
                     * Dos piezas completas
                     * y parte de la tercera.
                     */

                    w-[88vw]
                    md:w-[35vw]

                    aspect-square

                    overflow-hidden
                    border
                    border-white/10
                    bg-neutral-950
                    text-left
                    cursor-pointer
                  "
                >

                  {/* IMAGEN */}

                  <img
                    src={
                      piece.imagenes[0]
                    }
                    alt={piece.nombre}
                    draggable={false}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-contain
                      p-8
                      pointer-events-none
                      select-none

                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-[1.035]
                    "
                  />


                  {/* DEGRADADO */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/5
                      to-transparent
                      pointer-events-none
                    "
                  />


                  {/* INFORMACIÓN */}

                  <div
                    className="
                      absolute
                      left-6
                      md:left-8
                      bottom-6
                      md:bottom-8
                      pointer-events-none
                    "
                  >

                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.45em]
                        text-white/40
                      "
                    >
                      {originalIndex === 0
                        ? '01 / PRENDA'
                        : originalIndex === 1
                        ? '02 / OBJETO'
                        : '03 / EDICIÓN ESPECIAL'}
                    </p>


                    <h2
                      className="
                        mt-3
                        text-[14px]
                        md:text-[17px]
                        uppercase
                        tracking-[0.22em]
                        font-light
                        text-white
                      "
                    >
                      {piece.nombre}
                    </h2>


                    <p
                      className="
                        mt-2
                        text-[9px]
                        md:text-[10px]
                        uppercase
                        tracking-[0.22em]
                        text-white/40
                      "
                    >
                      {originalIndex < 2
                        ? 'EDICIÓN LIMITADA · 90 UNIDADES'
                        : 'INCLUIDO · PRIMERAS 90 UNIDADES'}
                    </p>

                  </div>

                </button>
              )
            }
          )}

        </div>

      </div>


      {/* =====================================================
          VIDEO
          ===================================================== */}

      <div
        className="
          px-8
          md:px-12
          pt-12
          md:pt-16
          pb-20
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            mb-5
          "
        >

          <p
            className="
              text-[8px]
              md:text-[9px]
              uppercase
              tracking-[0.5em]
              text-white/30
            "
          >
            DROP 001 / VIDEO OFICIAL
          </p>

        </div>


        <div
          className="
            relative
            w-full
            overflow-hidden
            bg-neutral-950
            border
            border-white/10
          "
        >

          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="
              w-full
              aspect-video
              object-cover
            "
          >

            <source
              src="/archive/archive-videos/world-film.mp4"
              type="video/mp4"
            />

          </video>

        </div>

      </div>

    </section>
  )
}