'use client'

import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import ProductViewer from '@/components/ProductViewer'
export default function AccountPage() {
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null)
  const { user, role, login, logout } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
const worldDivision = {
  titulo: 'REGISTRO ACTUALIZADO',

  mensaje: `DROP 001 — WORLD ha sido incorporado al Archivo Histórico LT90.

La próxima convocatoria oficial corresponderá a la Temporada WORLD.

Toda participación será registrada dentro del historial oficial de WORLD DIVISION.`,
}
const divisionFeed = [
  'TEMPORADA WORLD',
  'DROP 001 ACTIVO',
  'ARCHIVO HISTÓRICO ACTUALIZADO',
]
  const piezas = [
  {
    nombre: 'WORLD Jersey',
    serie: '090 / 090',
    drop: '001 — WORLD',
    estado: 'Incorporado',
    imagen: '/products/world-jersey.png',
  },
  {
    nombre: 'WORLD Snapback',
    serie: '090 / 090',
    drop: '001 — WORLD',
    estado: 'Registrado',
    imagen: '/products/world-snapback.png',
  },
]
const [selectedSticker, setSelectedSticker] = useState(0)

const stickers = [
  {
    nombre: 'FOUNDING MEMBER',
    imagen: '/stickers/founding-member.png',
    descripcion: 'Otorgado a los primeros 90 miembros del Club LT90.',
    estado: 'Desbloqueado',
  },
  {
    nombre: 'DROP 001 — WORLD',
    imagen: '/stickers/drop-001-world.png',
    descripcion: 'Participación registrada en el primer lanzamiento oficial.',
    estado: 'Completado',
  },
  {
    nombre: 'WORLD JERSEY',
    imagen: '/stickers/world-jersey.png',
    descripcion: 'Prenda oficial registrada en el Pasaporte LT90.',
    estado: 'Registrado',
  },
  {
    nombre: 'WORLD SNAPBACK',
    imagen: '/stickers/world-snapback.png',
    descripcion: 'Accesorio oficial registrado en el Pasaporte LT90.',
    estado: 'Registrado',
  },
]
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await login(email, password)
    } finally {
      setIsLoading(false)
    }
  }
const collectionRef = useRef<HTMLDivElement>(null)
  if (role === 'guest') {
    return (
      <main className="bg-black pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
        <h1 className="text-4xl font-light tracking-[0.35em] uppercase text-white mb-3 text-center">
  CREDENCIAL
</h1>

<p className="text-white/45 uppercase tracking-[0.25em] text-sm text-center mb-10">
  Accede a tu Registro
</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm text-white/60 mb-2 uppercase tracking-widest">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2 uppercase tracking-widest">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-white/90 transition-colors duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Cargando...' : 'Entrar'}
            </button>
          </form>

          <p className="text-center text-white/35 uppercase tracking-[0.22em] text-xs mt-8 leading-7">
  El Pasaporte solo está disponible
  <br />
  para Miembros Convocados.
</p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-black pt-16 min-h-screen">
<video
  autoPlay
  muted
  loop
  playsInline
  className="
    fixed
    inset-0
    w-full
    h-full
    object-cover
    opacity-[0.05]
    pointer-events-none
    select-none
    z-0
  "
>
  <source
    src="/backgrounds/lt90-cloth.mp4"
    type="video/mp4"
  />
</video>
      <div
  className="
    relative
    z-10
    max-w-3xl
    mx-auto
    px-4
    md:px-6
    lg:px-8
    py-12
    bg-black/25
    backdrop-blur-[2px]
  "
>{/* User Info */}
<div className="bg-white/5 border border-white/10 rounded p-8 mb-8">

  <h2 className="text-xl font-light uppercase tracking-[0.30em] text-white mb-10">
    Ficha del Socio
  </h2>

  <div className="relative mb-6 grid grid-cols-[1fr_180px] gap-4 items-start">
    <div>

    <p className="text-[10px] uppercase tracking-[0.45em] text-white/35">
      Número de Socio
    </p>

    <p className="mt-2 text-[60px] font-light tracking-[0.24em] leading-none">
      00001
    </p>

    <div className="mt-4 w-20 h-px bg-white/10"></div>

    <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#C6A86A]">
      Founding Member
    </p>
</div>
<img
  src="/identity/world-division-seal.svg"
  alt=""
  className="
    absolute
    left-[250px]
    top-[-18px]
    w-[170px]
    opacity-[0.05]
    -rotate-[14deg]
    pointer-events-none
    select-none
    z-0
  "
/>
<div className="flex justify-center -mt-8">

<div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden border border-white/15 bg-[#111111] z-10">
    <img
      src="/images/members/official-demo.png"
      alt="Socio LT90"
      className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 brightness-90"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.10] via-transparent to-black/30"></div>

    

  </div>

</div>

  </div>

  <div className="grid grid-cols-2 gap-x-10 gap-y-6">

    <div>

      <p className="text-white/40 text-[10px] uppercase tracking-[0.24em] mb-1">
        Nombre
      </p>

      <p className="text-lg">
        {user?.name}
      </p>

    </div>

    <div>

      <p className="text-white/40 text-xs uppercase tracking-[0.30em] mb-2">
        Correo
      </p>

      <p className="text-sm break-all">
        {user?.email}
      </p>

    </div>

    <div>

      <p className="text-white/40 text-xs uppercase tracking-[0.30em] mb-2">
        Ciudad
      </p>

      <p>Santiago</p>

    </div>

    <div>

      <p className="text-white/40 text-xs uppercase tracking-[0.30em] mb-2">
        País
      </p>

      <p>Chile</p>

    </div>

    <div>

      <p className="text-white/40 text-xs uppercase tracking-[0.30em] mb-2">
        Ingreso
      </p>

      <p>2026</p>

    </div>

    <div>

      <p className="text-white/40 text-xs uppercase tracking-[0.30em] mb-2">
        Estado
      </p>

      <p className="uppercase text-[#C6A86A]">
        Activo
      </p>

    </div>

    <div>

      <p className="text-white/40 text-xs uppercase tracking-[0.30em] mb-2">
        Drops registrados
      </p>

      <p className="text-xl">
        01
      </p>

    </div>

    <div>

      <p className="text-white/40 text-xs uppercase tracking-[0.30em] mb-2">
        Piezas registradas
      </p>

      <p className="text-xl">
        02
      </p>

    </div>

  </div>

</div>
    <div className="mb-12">

  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8">

    <img
      src="/identity/world-division-mark.svg"
      alt="WORLD DIVISION"
      className="w-[150px] h-auto mx-auto mb-10 opacity-90"
    />

   <p className="text-[10px] uppercase tracking-[0.55em] text-white/30 text-center mb-12">
  {worldDivision.titulo}
</p>



<div className="space-y-8">

<div className="group cursor-default">

  <p className="text-[9px] uppercase tracking-[0.50em] text-white/25 mb-2">
    ARCHIVO
  </p>

  <h3 className="uppercase tracking-[0.28em] text-[20px] font-light">
    DROP 001 — WORLD
  </h3>

<div
  className="
    mt-6
    w-[88%]
    h-px
    bg-white/10
    transition-all
    duration-500
    group-hover:w-full
    group-hover:bg-[#C6A86A]
  "
></div></div>

<div className="group cursor-default">

  <p className="text-[9px] uppercase tracking-[0.50em] text-white/25 mb-2">
    CONVOCATORIA
  </p>

  <h3 className="uppercase tracking-[0.28em] text-[20px] font-light">
    TEMPORADA WORLD
  </h3>

<div
  className="
    mt-6
    w-[88%]
    h-px
    bg-white/10
    transition-all
    duration-500
    group-hover:w-full
    group-hover:bg-[#C6A86A]
  "
></div></div>

  <p className="leading-8 text-white/75 max-w-xl">
    Toda actividad del socio será registrada oficialmente por WORLD DIVISION.
  </p>

</div>


  </div>

</div>

       
{/* Distinciones */}
<div className="bg-white/5 border border-white/10 rounded p-8 mb-8">

  <h2 className="text-xl font-light uppercase tracking-[0.30em] text-white mb-10">
    Distinciones
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {stickers.map((sticker, index) => (

      <button
        key={sticker.nombre}
        onClick={() => setSelectedSticker(index)}
        className="
          group
          transition-all
          duration-500
          cursor-pointer
        "
      >

        <img
          src={sticker.imagen}
          alt={sticker.nombre}
          className="
            w-full
            h-auto
            object-contain
            transition-all
            duration-500
            group-hover:scale-105
            group-hover:brightness-110
            group-hover:drop-shadow-[0_0_20px_rgba(198,168,106,0.35)]
          "
        />

      </button>

    ))}

  </div>

 <div className="mt-10 border-t border-white/10 pt-8">

  <p className="text-[10px] uppercase tracking-[0.45em] text-white/35">
    Distinción
  </p>

  <h3 className="mt-3 text-2xl font-light tracking-[0.22em] uppercase text-white">
    {stickers[selectedSticker].nombre}
  </h3>

  <div className="mt-5 w-20 h-px bg-white/10"></div>

  <p className="mt-6 text-white/55 leading-8 max-w-xl">
    {stickers[selectedSticker].descripcion}
  </p>

  <div className="mt-8 flex items-center gap-3">

    <div className="w-2 h-2 rounded-full bg-[#C6A86A]"></div>

    <span className="uppercase tracking-[0.28em] text-[11px] text-[#C6A86A]">
      {stickers[selectedSticker].estado}
    </span>

  </div>

</div>

</div>

<div className="bg-white/5 border border-white/10 rounded p-8 mb-8">

  <h2 className="text-xl font-light uppercase tracking-[0.30em] text-white mb-8">
    Colección
</h2>

  {selectedPiece === null ? (

  <div className="space-y-6">

    {piezas.map((pieza, index) => (

      <div key={pieza.nombre}>

  <ProductCard
    nombre={pieza.nombre}
    drop={pieza.drop}
    serie={pieza.serie}
    estado={pieza.estado}
    imagen={pieza.imagen}
    compact
    onOpen={() => setSelectedPiece(index)}
  />

</div>

    ))}

  </div>

) : (

  <div className="animate-fadeIn">

    <button
      onClick={() => setSelectedPiece(null)}
      className="
        mb-10
        uppercase
        tracking-[0.35em]
        text-xs
        text-white/45
        hover:text-white
        transition-colors
      "
    >
      ← Volver a la colección
    </button>

    <ProductViewer
  nombre={piezas[selectedPiece!].nombre}
  serie={piezas[selectedPiece!].serie}
  drop={piezas[selectedPiece!].drop}
  imagen={piezas[selectedPiece!].imagen}
/>

  </div>

)}

</div>

        <div className="flex gap-4">
          <button
            onClick={logout}
            className="px-6 py-3 border border-white/20 text-white rounded hover:border-white/40 transition-colors duration-300 uppercase tracking-widest text-sm font-semibold"
          >
            Cerrar Sesión
          </button>
          {role === 'admin' && (
            <Link
              href="/admin"
              className="px-6 py-3 bg-white text-black rounded hover:bg-white/90 transition-colors duration-300 uppercase tracking-widest text-sm font-semibold"
            >
              Panel Admin
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
