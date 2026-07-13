'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export function Navigation() {
  const pathname = usePathname()
  const { role, logout } = useAuth()

  const isActive = (path: string) => pathname === path

 const navItems = [
  { label: 'Club', href: '/club', requireAuth: true },
  { label: 'Archivo', href: '/archive' },
  { label: 'Core', href: '/core' },
]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo and Primary Navigation */}
          <div className="flex items-center gap-8 justify-self-start">
             <Link href="/">
    <Image
      src="/logo/lt90.svg"
      alt="LT90"
      width={90}
      height={28}
      priority
      className="opacity-90 hover:opacity-100 transition-opacity duration-300"
    />
  </Link>
            {navItems.map((item) => {
              if (item.requireAuth && role === 'guest') return null

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
<div className="flex justify-center">
  <p className="text-[11px] md:text-xs uppercase tracking-[0.45em] text-white/70 font-light whitespace-nowrap">
    LA PERTENENCIA ES UNA DECISIÓN.
  </p>
</div>
          {/* Right Side Actions */}
          <div className="flex items-center gap-4 justify-self-end">
            {role === 'admin' && (
              <Link
                href="/admin"
                className={`text-sm tracking-widest uppercase transition-colors duration-300 px-3 py-1 border border-white/20 rounded ${
                  isActive('/admin')
                    ? 'border-white text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:border-white'
                }`}
              >
                Panel
              </Link>
            )}

            {role !== 'guest' && (
              <Link
                href="/account"
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  isActive('/account')
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Mi Cuenta
              </Link>
            )}

            {role === 'guest' && (
             <Link
  href="/account"
  className="group flex flex-col items-center cursor-pointer"
>
  <div className="w-16 h-px bg-white/20 transition-all duration-500 group-hover:w-24 group-hover:bg-white/50"></div>

  <span className="py-2 text-[11px] tracking-[0.35em] uppercase text-white font-light transition-all duration-500 group-hover:tracking-[0.5em]">
    Credencial
  </span>

  <div className="w-16 h-px bg-white/20 transition-all duration-500 group-hover:w-24 group-hover:bg-white/50"></div>
</Link>
            )}

            {role !== 'guest' && (
              <button
  onClick={logout}
  className="text-sm tracking-widest uppercase transition-colors duration-300 text-white/60 hover:text-white"
>
  Salir
</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
