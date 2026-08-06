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
  { label: 'Expediente', href: '/expediente' },
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
  width={120}
  height={38}
  priority
  className="opacity-95 hover:opacity-100 transition-all duration-500"
 />
  </Link>
            {navItems.map((item) => {
              

              return (
                <Link
  key={item.href}
  href={item.href}
  className={`
    group
    relative
    text-[13px]
    uppercase
    font-light
    tracking-[0.30em]
    transition-all
    duration-500
    ${
      isActive(item.href)
        ? 'text-white'
        : 'text-white/60 hover:text-white hover:tracking-[0.42em]'
    }
  `}
>
  {item.label}
</Link>
              )
            })}
          </div>
<div className="flex justify-center">
  <p className="text-[11px] md:text-xs uppercase tracking-[0.45em] text-white/70 font-light whitespace-nowrap">
    LA PERTENENCIA ES UNA DECISIÓN
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
                Pasaporte
              </Link>
            )}

            {role === 'guest' && (
  <Link
    href="/account"
    className="
      text-[11px]
      uppercase
      tracking-[0.35em]
      text-white/70
      font-light
      transition-all
      duration-500
      hover:text-white
      hover:tracking-[0.45em]
    "
  >
    Pasaporte
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
