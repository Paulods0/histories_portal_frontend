import { createContext, useContext, useEffect, useState } from "react"
import { IProductData } from "../api/types"

type CartContextType = {
  cart: IProductData[]
  getProductQuantity: (id: string) => number
  increaseCartQuantity: (product: IProductData) => void
  decreaseCartQuantity: (product: IProductData) => void
  removeFromCart: (id: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [cart, setCart] = useState<IProductData[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Salva o estado do carrinho no localStorage sempre que ele for atualizado
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const getProductQuantity = (id: string) =>
    cart.find((item) => item._id === id)?.quantity || 0

  const increaseCartQuantity = (product: IProductData) => {
    setCart((curr) => {
      const existingProduct = curr.find((item) => item._id === product._id)

      if (!existingProduct) {
        return [...curr, { ...product, quantity: 1 }]
      } else {
        const newQuantity = existingProduct.quantity!! + 1
        const newPrice = Number(existingProduct.price) * newQuantity

        return curr.map((item) =>
          item._id === product._id
            ? { ...item, quantity: newQuantity, price: newPrice.toString() } // Price remains the same
            : item
        )
      }
    })
  }

  const decreaseCartQuantity = (product: IProductData) => {
    setCart((currItems) => {
      const existingProduct = currItems.find((item) => item._id === product._id)

      if (!existingProduct) return currItems

      const newQuantity = existingProduct.quantity!! - 1
      const newPrice = Number(existingProduct.price) * newQuantity

      if (newQuantity <= 0) {
        return currItems.filter((item) => item._id !== product._id)
      } else {
        return currItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: newQuantity, price: newPrice.toString() } // Price remains the same
            : item
        )
      }
    })
  }
  const removeFromCart = (id: string) => {
    setCart((currItem) => {
      return currItem.filter((item) => item._id != id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        decreaseCartQuantity,
        getProductQuantity,
        increaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider")
  }
  return context
}
