'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

export type UserData = {
  nombre: string
  apellido: string
  correo: string
  pais: string
  ciudad: string

  socio: number | null
  pasaporte: string | null

  rango: 'FOUNDING_MEMBER' | 'SOCIO'
stickers: string[]
drops: string[]
piezas: string[]
}

type UserContextType = {
  user: UserData | null
  setUser: (user: UserData) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({
  children,
}: {
  children: ReactNode
}) {

  const [user, setUser] = useState<UserData | null>(null)

  useEffect(() => {

    const saved = localStorage.getItem('lt90_user')

    if (saved) {
      setUser(JSON.parse(saved))
    }

  }, [])

  useEffect(() => {

    if (user) {
      localStorage.setItem(
        'lt90_user',
        JSON.stringify(user)
      )
    }

  }, [user])

  return (

    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >

      {children}

    </UserContext.Provider>

  )

}

export function useUser() {

  const context = useContext(UserContext)

  if (!context) {
    throw new Error(
      'useUser debe utilizarse dentro de UserProvider'
    )
  }

  return context

}