'use client'

import { useState } from 'react'

export default function ConvocatoriaPage() {

  const [codigo, setCodigo] = useState('')
  const [mensaje, setMensaje] = useState('')

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md flex flex-col items-center">

        <p className="text-[11px] tracking-[0.45em] uppercase text-white/40 mb-6">
          LT90
        </p>

        <h1 className="text-3xl md:text-4xl font-light tracking-[0.35em] uppercase text-center">
          Convocatoria
        </h1>

        <p className="text-white/45 text-sm mt-6 text-center leading-7">
          Ingresa el código recibido para acceder antes del llamado público.
        </p>
<input
  type="text"
  value={codigo}
  onChange={(e) => setCodigo(e.target.value.toUpperCase())}
  placeholder="LT90-XXXX-XXXX"
          className="
            mt-10
            w-full
            bg-transparent
            border-b
            border-white/20
            py-4
            text-center
            tracking-[0.30em]
            uppercase
            outline-none
            focus:border-white
            transition-all
          "
        />

        <button
  onClick={() => {
    if (!codigo.trim()) {
  setMensaje('Ingresa tu convocatoria.')
  return
}

setMensaje("Validando convocatoria...")

setTimeout(() => {
  setMensaje(
    "El Centro de Convocatorias será activado junto al primer Drop."
  )
}, 1800)
  }}
  className="
            mt-10
            uppercase
            tracking-[0.40em]
            text-sm
            text-white
            border
            border-white/20
            px-8
            py-4
            hover:border-white
            hover:bg-white/5
            transition-all
          "
        >
          Validar
        </button>
{mensaje && (
  <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/50 text-center">
    {mensaje}
  </p>
)}
        <p className="mt-14 text-center text-xs tracking-[0.25em] uppercase text-white/25 leading-6">
          Solo Fundadores y Veteranos
          <br />
          reciben Convocatorias Anticipadas.
        </p>
<p className="mt-10 text-[10px] tracking-[0.40em] uppercase text-white/10 text-center">
  LT90 · CENTRO DE CONVOCATORIAS
</p>
      </div>

    </main>
  )
}