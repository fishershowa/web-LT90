'use client'

import { useState } from 'react'
import DropCard from './DropCard'
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
  },
]

export default function DropCarousel() {

  const [selectedPiece, setSelectedPiece] = useState<number | null>(null)

  if (selectedPiece !== null) {

    const piece = dropPieces.find((p) => p.id === selectedPiece)!

    return (
      <ProductView
        nombre={piece.nombre}
        imagenes={piece.imagenes}
        precio={piece.precio}
        descripcion={piece.descripcion}
        tipo={piece.tipo}
        tallas={piece.tallas}
        disponible={piece.disponible}
        onBack={() => setSelectedPiece(null)}
      />
    )
  }

  return (

    <section className="h-[72vh] bg-black text-white overflow-hidden">

      <div className="px-16 pt-4">

        <p className="text-[10px] uppercase tracking-[0.60em] text-white/25">
          DROP 001
        </p>

        <h1
          className="
            mt-4
            text-[34px]
            md:text-[46px]
            font-extralight
            uppercase
            tracking-[0.65em]
            leading-none
            text-white
          "
        >
          WORLD
        </h1>

      </div>

      <div
        className="
          mt-2
          flex
          gap-4
          overflow-x-auto
          scrollbar-hide
          px-12
          pb-2
          items-end
        "
      >

        {dropPieces.map((piece) => (

          <DropCard
            key={piece.id}
            nombre={piece.nombre}

            imagen={piece.imagenes[0]}

            onClick={() => setSelectedPiece(piece.id)}
          />

        ))}

      </div>

    </section>

  )

}