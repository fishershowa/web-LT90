'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export type UserRole = 'guest' | 'socio' | 'admin'

export interface AuthUser {
  id: string
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: AuthUser | null
  role: UserRole
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setRole: (role: UserRole) => void
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
)

export function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [role, setRole] = useState<UserRole>('guest')

  /*
   * RECUPERAR SESIÓN
   */
  useEffect(() => {
    const savedUser = localStorage.getItem('lt90_auth_user')

    if (!savedUser) return

    try {
      const parsedUser = JSON.parse(savedUser)

      setUser(parsedUser)
      setRole(parsedUser.role ?? 'socio')
    } catch {
      localStorage.removeItem('lt90_auth_user')
    }
  }, [])

  /*
   * LOGIN
   *
   * Por ahora sigue siendo mock.
   * Más adelante aquí conectaremos el backend real.
   */
  const login = async (
    email: string,
    password: string
  ) => {
    const mockUser: AuthUser = {
      id: `lt90-${email.toLowerCase()}`,
      name: 'Socio LT90',
      email,
      role: 'socio',
    }

    setUser(mockUser)
    setRole('socio')

    localStorage.setItem(
      'lt90_auth_user',
      JSON.stringify(mockUser)
    )
  }

  /*
   * LOGOUT
   */
  const logout = () => {
    setUser(null)
    setRole('guest')

    localStorage.removeItem('lt90_auth_user')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        login,
        logout,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error(
      'useAuth must be used within AuthProvider'
    )
  }

  return context
}