import { createContext, useContext, useEffect, useState } from "react"
import { Product } from "../api/types"
import { toast } from "react-toastify"

type CartContextType = {
  cart: Product[]
  getProductQuantity: (id: string) => number
  increaseCartQuantity: (product: Product) => void
  decreaseCartQuantity: (product: Product) => void
  removeFromCart: (id: string) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const getProductQuantity = (id: string) =>
    cart.find((item) => item._id === id)?.quantity || 0

  const increaseCartQuantity = (product: Product) => {
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
    toast.success("Produto adicionado ao carrinho")
  }

  const decreaseCartQuantity = (product: Product) => {
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
