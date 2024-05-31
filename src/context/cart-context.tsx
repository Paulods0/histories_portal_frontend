import { Product } from "@/api/types"
import { FC, createContext, useContext, useState } from "react"
import { toast } from "react-toastify"

type CartContextProviderProps = {
  children: React.ReactNode
}

type TCartContext = {
  getItemQuantity: (id: string) => number
  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
  deleteProductFromCart: (id: string) => void
  cartItems: Product[] | []
  cartQuantity: number
}

const CartContext = createContext({} as TCartContext)

export function useCartContext() {
  return useContext(CartContext)
}

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    const items = localStorage.getItem("cart")
    return items ? JSON.parse(items) : []
  })

  const cartQuantity = cartItems.length

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item._id === id)?.storequantity || 0
  }

  function addProduct(product: Product) {
    setCartItems((products) => {
      const current = products.find((item) => item._id === product._id)
      if (!current) {
        const updatedProducts = [
          ...products,
          {
            ...product,
            storequantity: 1,
          },
        ]
        localStorage.setItem("cart", JSON.stringify(updatedProducts))
        toast.success("Produto adicionado ao carrinho")
        return updatedProducts
      } else {
        const updatedProducts = products.map((item) =>
          item._id === product._id
            ? {
                ...item,
                storequantity: (item.storequantity || 0) + 1,
              }
            : item
        )
        localStorage.setItem("cart", JSON.stringify(updatedProducts))
        return updatedProducts
      }
    })
  }

  function removeProduct(product: Product) {
    setCartItems((products) => {
      const item = products.find((item) => item._id === product._id)
      if (item && (item.storequantity || 0) === 1) {
        const updatedProducts = products.filter(
          (item) => item._id !== product._id
        )
        localStorage.setItem("cart", JSON.stringify(updatedProducts))
        toast.success("Produto removido do carrinho")
        return updatedProducts
      } else {
        const updatedProducts = products.map((item) =>
          item._id === product._id
            ? {
                ...item,
                storequantity: (item.storequantity || 0) - 1,
              }
            : item
        )
        localStorage.setItem("cart", JSON.stringify(updatedProducts))
        return updatedProducts
      }
    })
  }

  function deleteProductFromCart(id: string) {
    setCartItems((products) => {
      const updatedProducts = products.filter((product) => product._id !== id)
      localStorage.removeItem("cart")
      return updatedProducts
    })
    toast.success("Produto removido do carrinho")
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProduct,
        cartQuantity,
        removeProduct,
        getItemQuantity,
        deleteProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
