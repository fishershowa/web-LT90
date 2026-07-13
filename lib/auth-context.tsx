'use client'

import React, { createContext, useContext, useState } from 'react'

export type UserRole = 'guest' | 'socio' | 'admin'

interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  role: UserRole
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setRole: (role: UserRole) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<UserRole>('guest')

  const login = async (email: string, password: string) => {
    // Placeholder for backend integration
    const mockUser: User = {
      id: '1',
      name: 'Socio LT90',
      email: email,
      role: 'socio',
    }
    setUser(mockUser)
    setRole('socio')
  }

  const logout = () => {
    setUser(null)
    setRole('guest')
  }

  return (
    <AuthContext.Provider value={{ user, role, login, logout, setRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
