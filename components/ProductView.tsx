'use client'

import { useState, useEffect } from 'react'
import { usePurchase } from '@/contexts/PurchaseContext'
import SizeSelector from './product/SizeSelector'
import SizeGuide from './product/SizeGuide'
import CartDrawer from './product/CartDrawer'
type ProductViewProps = {
  nombre: string
  imagenes: string[]
  precio: number
  descripcion: string
  tipo: string
  tallas: string[]
  disponible: number

  onBack: () => void
}

export default function ProductView({
  nombre,
  imagenes,
  precio,
  descripcion,
  tipo,
  tallas,
  disponible,
  onBack,
}: ProductViewProps) {

  const [showSizeGuide, setShowSizeGuide] = useState(false)
  
 const [selectedSize, setSelectedSize] = useState(
  tallas.length > 0 ? tallas[0] : ''
)
const [selectedImage, setSelectedImage] = useState(
  imagenes.length > 0 ? imagenes[0] : ''
)
const [selectedIndex, setSelectedIndex] = useState(0)
  const [imageVisible, setImageVisible] = useState(true)
  const [showGallery, setShowGallery] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const { setPurchase } = usePurchase()
  const esPassport = nombre === 'LT90 PASSPORT'
 
useEffect(() => {

  if (!showGallery) return

  const timer = setTimeout(() => {

    document
      .getElementById(`gallery-${selectedIndex}`)
      ?.scrollIntoView({
        behavior: 'instant',
        block: 'center',
      })

  }, 50)

  return () => clearTimeout(timer)

}, [showGallery, selectedIndex])
  return (
    <section className="min-h-screen bg-black text-white">

      <div className="max-w-[1600px] mx-auto px-20 py-16">

        <button
          onClick={onBack}
          className="
            uppercase
            tracking-[0.45em]
            text-xs
            text-white/40
            hover:text-white
            transition
          "
        >
          ← VOLVER AL DROP
        </button>

        <div className="grid grid-cols-2 gap-36 mt-12">

         <div className="flex items-center gap-8">

  {/* MINIATURAS */}

<div className="flex flex-col gap-4">

  {imagenes.map((img, index) => (

    <button
  key={index}
 onClick={() => {

  if (img === selectedImage) return

  setSelectedIndex(index)

  setImageVisible(false)

  setTimeout(() => {

    setSelectedImage(img)

    setImageVisible(true)

  }, 180)

}}
  className={`
    group
    relative

    w-20
    h-20

    overflow-hidden

    transition-all
    duration-500

    ${
      selectedImage === img
        ? 'opacity-100'
        : 'opacity-45 hover:opacity-100'
    }
  `}
>

  <img
    src={img}
    alt=""
    className="
      w-full
      h-full
      object-cover

      transition-all
      duration-700

      group-hover:scale-[1.04]

      select-none
    "
  />

  <div
    className={`
      absolute
      bottom-0
      left-0
      h-[2px]
      bg-white
      transition-all
      duration-500

      ${
        selectedImage === img
          ? 'w-full'
          : 'w-0 group-hover:w-full'
      }
    `}
  />

</button>

  ))}

</div>

{/* IMAGEN PRINCIPAL */}

<img
  src={selectedImage}
  alt={nombre}
  onClick={() => {

  setSelectedIndex(imagenes.indexOf(selectedImage))

  setShowGallery(true)

}}
  className={`
    w-[650px]
    object-contain
cursor-zoom-in
    transition-all
    duration-300

    ${
      imageVisible
        ? 'opacity-100'
        : 'opacity-0'
    }
  `}
/>

</div>

          <div className="flex flex-col justify-center pl-10">

            <div className="space-y-3">

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

  <h1
    className="
      uppercase
      text-[34px]
      leading-[1]
      tracking-[0.06em]
      font-extralight
    "
  >
    {nombre}
  </h1>

  <div className="flex items-end gap-3">

    <p
  className="
    text-[22px]
    font-extralight
    tracking-[0.01em]
  "
>
      {precio.toLocaleString('es-CL')}
    </p>

    <span
      className="
        uppercase
        tracking-[0.45em]
        text-[10px]
        text-white/35
        pb-[6px]
      "
    >
      CLP
    </span>

  </div>

</div>
<div className="mt-14">

  <SizeSelector
    tipo={tipo}
    tallas={tallas}
    selectedSize={selectedSize}
    setSelectedSize={setSelectedSize}
    onOpenGuide={() => setShowSizeGuide(true)}
  />

</div>

            {!esPassport && (
  <button
    onClick={() => {
      setPurchase({
        nombre,
        imagen: selectedImage,
        precio,
        talla: selectedSize,
        tipo,
        cantidad: 1,
        maxCantidad: 1,
      })

      setShowCart(true)
    }}
    className="
      mt-14
      h-[56px]
      bg-white
      text-black

      uppercase
      tracking-[0.55em]
      text-[11px]
      font-medium

      hover:bg-neutral-200
      transition-all
      duration-300
    "
  >
    ADQUIRIR PIEZA
  </button>
)}
          </div>

        </div>

      </div>
    
      
      <SizeGuide
  open={showSizeGuide}
  onClose={() => setShowSizeGuide(false)}
/>
<CartDrawer
  open={showCart}
  onClose={() => setShowCart(false)}
  nombre={nombre}
  imagen={selectedImage}
  precio={precio}
  talla={selectedSize}
  tipo={tipo}
  onContinueShopping={onBack}
/>
{showGallery && (

  <div className="fixed inset-0 z-[100] bg-black overflow-y-auto">

    {/* BOTÓN CERRAR */}

    <button
      onClick={() => setShowGallery(false)}
      className="
        fixed
        top-8
        right-10
        z-50

        text-white
        text-5xl
        font-extralight

        hover:opacity-60
        transition
      "
    >
      ×
    </button>

    {/* GALERÍA */}

    <div
  className="
    max-w-[1200px]
    mx-auto

    py-40

    flex
    flex-col

    gap-48
  "
>

  {imagenes.map((img, index) => (

   <div
  key={index}
  id={`gallery-${index}`}
  className="
    flex
    justify-center
  "
>

      <img
        src={img}
        alt=""
        className="
          w-[72%]
          max-h-[88vh]
          object-contain
          select-none
        "
      />

    </div>

  ))}

</div>

  </div>

)}
    </section>
  )
}