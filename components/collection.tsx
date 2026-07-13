'use client'

import { useState } from 'react'
import { ShoppingBag, X } from 'lucide-react'

interface Piece {
  id: number
  name: string
  price: number
  image: string
  badge: 'NEW_IN' | 'BEST_SELLER'
  sizes: string[]
  description: string
  preOrderInfo: string
}

const mockPieces: Piece[] = [
  {
    id: 1,
    name: 'Jersey - No Drug',
    price: 65,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    badge: 'BEST_SELLER',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Jersey deportivo premium con diseño de colección exclusiva.',
    preOrderInfo: 'PRE-ORDEN — Envío a principios de Julio'
  },
  {
    id: 2,
    name: 'T-shirt - Street Ballers 26',
    price: 40,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&h=500&fit=crop',
    badge: 'NEW_IN',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Camiseta de algodón con gráfico retro edición limitada.',
    preOrderInfo: 'PRE-ORDEN — Envío a finales de Julio'
  },
  {
    id: 3,
    name: 'T-shirt - Santa Sfera',
    price: 35,
    image: 'https://images.unsplash.com/photo-1514272519207-2b2e3d7d9d0a?w=500&h=500&fit=crop',
    badge: 'BEST_SELLER',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Camiseta premium con estampado artístico.',
    preOrderInfo: 'PRE-ORDEN — Envío inmediato'
  },
  {
    id: 4,
    name: 'Dad Cap No Football - Off-White',
    price: 25,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e6d9?w=500&h=500&fit=crop',
    badge: 'NEW_IN',
    sizes: ['One Size'],
    description: 'Gorra estructurada con bordado exclusivo del club.',
    preOrderInfo: 'PRE-ORDEN — Envío a mediados de Agosto'
  },
  {
    id: 5,
    name: 'Hoodie Premium Black',
    price: 85,
    image: 'https://images.unsplash.com/photo-1556821552-9f63ba1df60d?w=500&h=500&fit=crop',
    badge: 'BEST_SELLER',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Sudadera premium de algodón con detalles bordados.',
    preOrderInfo: 'PRE-ORDEN — Envío a principios de Septiembre'
  },
  {
    id: 6,
    name: 'Track Pants - LT90',
    price: 55,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop',
    badge: 'NEW_IN',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Pantalones de pista con tejido técnico premium.',
    preOrderInfo: 'PRE-ORDEN — Envío a finales de Agosto'
  },
  {
    id: 7,
    name: 'Tote Bag Canvas',
    price: 35,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    badge: 'BEST_SELLER',
    sizes: ['One Size'],
    description: 'Bolsa de lona con logo grabado de colección limitada.',
    preOrderInfo: 'PRE-ORDEN — Envío inmediato'
  },
  {
    id: 8,
    name: 'Socks Pack - Classic',
    price: 15,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop',
    badge: 'NEW_IN',
    sizes: ['One Size'],
    description: 'Pack de 3 pares de calcetines premium.',
    preOrderInfo: 'PRE-ORDEN — Envío a mediados de Julio'
  },
]

export function Collection() {
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid')
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('')

  const handleSelectPiece = (piece: Piece) => {
    setSelectedPiece(piece)
    setSelectedSize(piece.sizes[0])
    setViewMode('detail')
  }

  const handleBackToGrid = () => {
    setViewMode('grid')
    setSelectedPiece(null)
    setSelectedSize('')
  }

  return (
    <section id="collection" className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <div className="bg-black border-b border-white/10 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold tracking-tighter">LT90</div>
            <div className="text-sm font-semibold tracking-widest uppercase text-white/60">
              {viewMode === 'grid' ? 'World' : 'Detalles de Pieza'}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm tracking-widest uppercase text-white/60">
              {selectedPiece && viewMode === 'detail' && (
                <button
                  onClick={handleBackToGrid}
                  className="flex items-center gap-2 text-white hover:text-white/60 transition-colors duration-300"
                >
                  <X className="w-4 h-4" />
                  Volver
                </button>
              )}
            </div>
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="mb-8 p-4 bg-black text-white text-center">
            <p className="text-sm tracking-widest uppercase font-semibold">Enviamos a todo el mundo</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">WORLD</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockPieces.map((piece) => (
              <button
                key={piece.id}
                onClick={() => handleSelectPiece(piece)}
                className="group cursor-pointer text-left"
              >
                <div className="relative mb-4 bg-white/5 aspect-square overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-10 flex gap-2">
                    <span className={`px-2 py-1 text-xs font-bold tracking-widest uppercase ${
                      piece.badge === 'NEW_IN'
                        ? 'bg-yellow-300 text-black'
                        : 'bg-cyan-300 text-black'
                    }`}>
                      {piece.badge === 'NEW_IN' ? 'Nuevo' : 'Bestseller'}
                    </span>
                    <span className="px-2 py-1 text-xs font-bold tracking-widest uppercase bg-black text-white">
                      90/90
                    </span>
                  </div>

                  {/* Image */}
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <h3 className="font-semibold text-sm tracking-wide mb-1 text-white group-hover:text-white/60 transition-colors duration-300">
                  {piece.name}
                </h3>
                <p className="text-sm text-white/60">{piece.price.toFixed(2)} €</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Detail View */}
      {viewMode === 'detail' && selectedPiece && (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-white/5 border border-white/10 overflow-hidden">
                <img
                  src={selectedPiece.image}
                  alt={selectedPiece.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                {selectedPiece.name}
              </h1>

              {/* Badge */}
              <div className="flex gap-2 mb-6">
                <span className={`px-3 py-1 text-xs font-bold tracking-widest uppercase ${
                  selectedPiece.badge === 'NEW_IN'
                    ? 'bg-yellow-300 text-black'
                    : 'bg-cyan-300 text-black'
                }`}>
                  {selectedPiece.badge === 'NEW_IN' ? 'Nuevo' : 'Bestseller'}
                </span>
                <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase bg-black text-white">
                  90/90
                </span>
              </div>

              {/* Price */}
              <p className="text-3xl font-bold mb-6">{selectedPiece.price.toFixed(2)} €</p>

              {/* Description */}
              <p className="text-white/70 mb-8 leading-relaxed">
                {selectedPiece.description}
              </p>

              {/* Size Selector */}
              <div className="mb-8">
                <p className="text-sm font-semibold tracking-widest uppercase mb-4">Talla</p>
                <div className="flex gap-3">
                  {selectedPiece.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 transition-all duration-300 font-semibold uppercase text-sm tracking-wider ${
                        selectedSize === size
                          ? 'border-white bg-white text-black'
                          : 'border-white/20 text-white hover:border-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="bg-white text-black px-8 py-4 font-bold tracking-widest uppercase mb-8 hover:bg-white/80 transition-colors duration-300 flex items-center justify-between gap-2">
                <span>Adquirir Pieza</span>
                <ShoppingBag className="w-5 h-5" />
              </button>

              {/* Pre-order Info */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-xs tracking-widest uppercase text-white/60 mb-3">Información de Pedido</p>
                <p className="font-semibold text-sm text-white">{selectedPiece.preOrderInfo}</p>
              </div>

              {/* Sizing Guide */}
              <div className="border-t border-white/10 mt-8 pt-6">
                <p className="text-xs tracking-widest uppercase text-white/60 mb-4">Guía de Tallas</p>
                <p className="text-xs text-white/60">
                  Envíamos a toda Europa. Los envíos normalmente tardan de 3-5 días hábiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
