'use client'

import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'
import { useState } from 'react'

export default function AccountPage() {
  const { user, role, login, logout } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await login(email, password)
    } finally {
      setIsLoading(false)
    }
  }

  if (role === 'guest') {
    return (
      <main className="bg-black pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-white mb-2 text-center">Acceso LT90</h1>
          <p className="text-white/60 text-center mb-8">Ingresa a tu cuenta de socio</p>

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

          <p className="text-center text-white/60 text-sm mt-6">
            ¿No tienes cuenta? <span className="text-white">Contacta a admin@lt90.com</span>
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-black pt-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white tracking-tighter mb-12">Mi Cuenta</h1>

        {/* User Info */}
        <div className="bg-white/5 border border-white/10 rounded p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Información de Perfil</h2>
          <div className="space-y-4">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Nombre</p>
              <p className="text-white font-semibold">{user?.name}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Email</p>
              <p className="text-white font-semibold">{user?.email}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Estado</p>
              <p className="text-white font-semibold">{role === 'admin' ? 'Administrador' : 'Socio Activo'}</p>
            </div>
          </div>
        </div>

        {/* Purchase History */}
        <div className="bg-white/5 border border-white/10 rounded p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Historial de Pedidos</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex justify-between items-center p-4 bg-white/5 border border-white/10 rounded">
                <div>
                  <p className="text-white font-semibold">Pedido #{order}</p>
                  <p className="text-white/60 text-sm">Enero 2024</p>
                </div>
                <p className="text-white font-semibold">€90,00</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
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
