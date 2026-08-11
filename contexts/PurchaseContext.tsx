'use client'

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'

export type Purchase = {
  nombre: string
  imagen: string
  precio: number
  talla: string
  tipo: string

  // Cantidad seleccionada
  cantidad: number

  // Máximo permitido para este producto.
  //
  // DROP 001:
  // 1 unidad por elemento.
  //
  // CORE:
  // podrá ser mayor a 1.
  maxCantidad: number
}

type PurchaseContextType = {
  // Se mantiene para no romper ProductView ni código existente.
  purchase: Purchase | null

  // Mantiene la API anterior.
  setPurchase: (purchase: Purchase) => void

  // Carrito completo.
  cart: Purchase[]

  // Carrito.
  increaseQuantity: (nombre: string) => void
  decreaseQuantity: (nombre: string) => void
  removeFromCart: (nombre: string) => void
  clearCart: () => void

  // Información útil para DROP 001.
  totalItems: number
}

const PurchaseContext =
  createContext<PurchaseContextType | undefined>(undefined)

export function PurchaseProvider({
  children,
}: {
  children: ReactNode
}) {
  const [purchase, setPurchaseState] =
    useState<Purchase | null>(null)

  const [cart, setCart] =
    useState<Purchase[]>([])

  /*
   * RECUPERAR CARRITO
   *
   * Primero intentamos recuperar el carrito nuevo.
   *
   * Si no existe, intentamos recuperar la compra
   * antigua para no romper las sesiones anteriores.
   */
  useEffect(() => {
    let recoveredCart: Purchase[] = []

    const savedCart =
      localStorage.getItem('lt90_cart')

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)

        if (Array.isArray(parsedCart)) {
          recoveredCart = parsedCart.map(
            (item: Partial<Purchase>) => ({
              nombre: item.nombre ?? '',
              imagen: item.imagen ?? '',
              precio: item.precio ?? 0,
              talla: item.talla ?? '',
              tipo: item.tipo ?? 'object',

              cantidad:
                typeof item.cantidad === 'number' &&
                item.cantidad > 0
                  ? item.cantidad
                  : 1,

              maxCantidad:
                typeof item.maxCantidad === 'number' &&
                item.maxCantidad > 0
                  ? item.maxCantidad
                  : 1,
            })
          )
        }
      } catch {
        localStorage.removeItem('lt90_cart')
      }
    }

    /*
     * COMPATIBILIDAD CON LA COMPRA ANTIGUA
     */
    if (recoveredCart.length === 0) {
      const savedPurchase =
        localStorage.getItem('lt90_purchase')

      if (savedPurchase) {
        try {
          const parsed =
            JSON.parse(savedPurchase)

          const oldPurchase: Purchase = {
            nombre: parsed.nombre ?? '',
            imagen: parsed.imagen ?? '',
            precio: parsed.precio ?? 0,
            talla: parsed.talla ?? '',
            tipo: parsed.tipo ?? 'object',
            cantidad: 1,
            maxCantidad: 1,
          }

          recoveredCart = [oldPurchase]
        } catch {
          localStorage.removeItem(
            'lt90_purchase'
          )
        }
      }
    }

    if (recoveredCart.length > 0) {
      setCart(recoveredCart)

      /*
       * Mantiene purchase funcionando para
       * ProductView y Checkout antiguos.
       */
      setPurchaseState(
        recoveredCart[recoveredCart.length - 1]
      )
    }
  }, [])

  /*
   * GUARDAR CARRITO
   */
  useEffect(() => {
    localStorage.setItem(
      'lt90_cart',
      JSON.stringify(cart)
    )
  }, [cart])

  /*
   * GUARDAR COMPRA ACTUAL
   *
   * Se mantiene únicamente por compatibilidad.
   */
  useEffect(() => {
    if (purchase) {
      localStorage.setItem(
        'lt90_purchase',
        JSON.stringify(purchase)
      )
    }
  }, [purchase])

  /*
   * AGREGAR PRODUCTO
   *
   * Esta función conserva el nombre setPurchase
   * porque ProductView ya lo utiliza.
   *
   * Regla:
   *
   * DROP 001
   * ─────────
   * Jersey x1
   * Snapback x1
   *
   * No permite:
   * Jersey x2
   *
   * CORE
   * ────
   * Si maxCantidad es mayor a 1,
   * permite aumentar la cantidad.
   */
  const setPurchase = (
    newPurchase: Purchase
  ) => {
    const maxCantidad =
      newPurchase.maxCantidad > 0
        ? newPurchase.maxCantidad
        : 1

    const existingIndex =
      cart.findIndex(
        (item) =>
          item.nombre === newPurchase.nombre
      )

    /*
     * PRODUCTO NUEVO
     */
    if (existingIndex === -1) {
      const newItem: Purchase = {
        ...newPurchase,
        cantidad: 1,
        maxCantidad,
      }

      setCart((currentCart) => [
        ...currentCart,
        newItem,
      ])

      setPurchaseState(newItem)

      return
    }

    /*
     * PRODUCTO YA EXISTENTE
     */
    const existing =
      cart[existingIndex]

    const currentQuantity =
      existing.cantidad ?? 1

    const allowedMax =
      existing.maxCantidad ??
      maxCantidad

    /*
     * DROP 001:
     * si ya existe y maxCantidad = 1,
     * simplemente no hacemos nada.
     */
    if (
      currentQuantity >= allowedMax
    ) {
      setPurchaseState(existing)

      return
    }

    /*
     * CORE:
     * si todavía queda stock permitido,
     * agregamos una unidad.
     */
    const updatedCart =
      [...cart]

    const updatedItem: Purchase = {
      ...existing,
      cantidad:
        currentQuantity + 1,
      maxCantidad: allowedMax,
    }

    updatedCart[existingIndex] =
      updatedItem

    setCart(updatedCart)
    setPurchaseState(updatedItem)
  }

  /*
   * +
   *
   * Aumenta solamente hasta maxCantidad.
   */
  const increaseQuantity = (
    nombre: string
  ) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (
          item.nombre !== nombre
        ) {
          return item
        }

        const cantidad =
          item.cantidad ?? 1

        const maxCantidad =
          item.maxCantidad ?? 1

        if (
          cantidad >= maxCantidad
        ) {
          return item
        }

        return {
          ...item,
          cantidad:
            cantidad + 1,
        }
      })
    )
  }

  /*
   * -
   *
   * Si llega a cero,
   * eliminamos la pieza.
   */
  const decreaseQuantity = (
    nombre: string
  ) => {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (
            item.nombre !== nombre
          ) {
            return item
          }

          const cantidad =
            item.cantidad ?? 1

          if (cantidad <= 1) {
            return null
          }

          return {
            ...item,
            cantidad:
              cantidad - 1,
          }
        })
        .filter(
          (
            item
          ): item is Purchase =>
            item !== null
        )
    )
  }

  /*
   * ELIMINAR PRODUCTO COMPLETO
   */
  const removeFromCart = (
    nombre: string
  ) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          item.nombre !== nombre
      )
    )
  }

  /*
   * VACIAR CARRITO
   */
  const clearCart = () => {
    setCart([])
    setPurchaseState(null)

    localStorage.removeItem(
      'lt90_purchase'
    )

    localStorage.removeItem(
      'lt90_cart'
    )
  }

  /*
   * TOTAL DE PIEZAS
   *
   * Ejemplo:
   *
   * Jersey x1
   * Snapback x1
   *
   * totalItems = 2
   *
   * Esto será importante para el sistema
   * de los primeros 90 compradores.
   */
  const totalItems =
    cart.reduce(
      (total, item) =>
        total +
        (item.cantidad ?? 1),
      0
    )

  return (
    <PurchaseContext.Provider
      value={{
        purchase,
        setPurchase,
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}

export function usePurchase() {
  const context =
    useContext(PurchaseContext)

  if (!context) {
    throw new Error(
      'usePurchase debe utilizarse dentro de PurchaseProvider'
    )
  }

  return context
}