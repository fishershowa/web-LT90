'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export type Purchase = {
  nombre: string
  imagen: string
  precio: number
  talla: string
  tipo: string
}

type PurchaseContextType = {
  purchase: Purchase | null
  setPurchase: (purchase: Purchase) => void
}

const PurchaseContext = createContext<PurchaseContextType | undefined>(undefined)

export function PurchaseProvider({
  children,
}: {
  children: ReactNode
}) {
  const [purchase, setPurchase] = useState<Purchase | null>(null)

useEffect(() => {
  const savedPurchase = localStorage.getItem('lt90_purchase')

  if (savedPurchase) {
    setPurchase(JSON.parse(savedPurchase))
  }
}, [])

useEffect(() => {
  if (purchase) {
    localStorage.setItem(
      'lt90_purchase',
      JSON.stringify(purchase)
    )
  }
}, [purchase])

  return (
    <PurchaseContext.Provider
      value={{
        purchase,
        setPurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}

export function usePurchase() {
  const context = useContext(PurchaseContext)

  if (!context) {
    throw new Error('usePurchase debe utilizarse dentro de PurchaseProvider')
  }

  return context
}