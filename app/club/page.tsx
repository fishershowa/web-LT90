'use client'

import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'

export default function ClubPage() {
  const { role } = useAuth()

  if (role === 'guest') {
    return (
      <main className="bg-black pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Acceso Restringido</h1>
          <p className="text-white/60 mb-8">Solo socios pueden acceder al Club LT90</p>
          <Link
            href="/account"
            className="inline-block px-8 py-3 bg-white text-black font-semibold hover:bg-white/90 transition-colors duration-300"
          >
            Unirse al Club
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-black pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white tracking-tighter mb-6">Club LT90</h1>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Portal exclusivo para socios LT90. Accede a drops, core, archivo y beneficios especiales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Club sections */}
          {[
            { title: 'Drops', description: 'Colecciones limitadas 90/90' },
            { title: 'Core', description: 'Piezas permanentes de la tribu' },
            { title: 'Archivo', description: 'Histórico de colecciones' },
            { title: 'Pasaporte LT90', description: 'Tu identidad en el club' },
            { title: 'Convocatorias', description: 'Llamamientos especiales' },
            { title: 'Beneficios', description: 'Ventajas exclusivas de socio' },
          ].map((section, idx) => (
            <Link
              key={idx}
              href={`/${section.title.toLowerCase().replace(' ', '-')}`}
              className="bg-white/5 border border-white/10 rounded p-6 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                {section.title}
              </h3>
              <p className="text-white/60 text-sm">{section.description}</p>
            </Link>
          ))}
        </div>

        {/* Passport section */}
        <div className="mt-16 p-8 border border-white/20 rounded bg-white/5">
          <h2 className="text-2xl font-bold text-white mb-4">Tu Pasaporte LT90</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-white/60 uppercase tracking-widest text-xs">Fecha Ingreso</p>
              <p className="text-white font-semibold mt-2">Enero 2024</p>
            </div>
            <div>
              <p className="text-white/60 uppercase tracking-widest text-xs">Piezas Adquiridas</p>
              <p className="text-white font-semibold mt-2">12</p>
            </div>
            <div>
              <p className="text-white/60 uppercase tracking-widest text-xs">Estado</p>
              <p className="text-white font-semibold mt-2">Activo</p>
            </div>
            <div>
              <p className="text-white/60 uppercase tracking-widest text-xs">Nivel</p>
              <p className="text-white font-semibold mt-2">Socio</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
