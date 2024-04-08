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
  // const CART_STORAGE_KEY = "cart"

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
  const decreaseCartQuantity = (product: IProductData) => {
    setCart((currItems) => {
      if (currItems.find((item) => item._id === product._id)?.quantity === 1) {
        return currItems.filter((item) => item._id != product._id)
      } else {
        return currItems.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity!! - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  const increaseCartQuantity = (product: IProductData) => {
    setCart((currItems) => {
      if (currItems.find((item) => item._id === product._id) === null) {
        return [...currItems, { ...product, quantity: +1 }]
      } else {
        return currItems.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity!! + 1 }
          } else {
            return item
          }
        })
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
