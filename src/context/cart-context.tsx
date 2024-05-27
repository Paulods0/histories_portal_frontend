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

  const getProductQuantity = (id: string) => {
    return cart.find((item) => item._id === id)?.storequantity || 0
  }

  const increaseCartQuantity = (product: Product) => {
    setCart((products) => {
      const existingProduct = cart.find((item) => item._id === product._id)
      if (!existingProduct) {
        const addedProduct = { ...product, storequantity: 1 }
        localStorage.setItem("cart", JSON.stringify([...cart, addedProduct]))
        return [...products, addedProduct]
      } else {
        let newQuantity = existingProduct.storequantity!! + 1
        console.log("newQuantity: ", newQuantity)

        let newPrice = Number(parseInt(existingProduct.price)) * newQuantity
        console.log("newPrice: ", newPrice)

        const priceToString = newPrice.toString()

        let updatedProduct = {
          ...product,
          storequantity: newQuantity,
          price: priceToString,
        }
        console.log("updatedProduct: ", updatedProduct)

        localStorage.setItem("cart", JSON.stringify([...cart, updatedProduct]))
        return products.map((item) =>
          item._id === product._id ? updatedProduct : item
        )
      }
    })
    toast.success("Produto adicionado ao carrinho")
  }

  const decreaseCartQuantity = (product: Product) => {}

  const removeFromCart = (id: string) => {
    setCart((currItem) => {
      return currItem.filter((item) => item._id != id)
    })
    toast.success("Produto removido do carrinho")
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
