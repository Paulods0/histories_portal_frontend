import { createContext, useContext, useEffect, useState } from "react"
import { IProductData } from "../api/types"

type CartContextType = {
  cart: IProductData[]
  addToCart: (product: IProductData) => void
  removeFromCart: (id: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [cart, setCart] = useState<IProductData[]>([])
  const CART_STORAGE_KEY = "cart"

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

  const addToCart = (product: IProductData) => {
    setCart((prev) => [...prev, product])
  }
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item._id != id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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
