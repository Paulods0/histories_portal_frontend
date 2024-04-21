import { useState } from "react"
import { TfiClose } from "react-icons/tfi"
import { useCart } from "../../context/cart-context"
import { IProductData } from "../../api/types"

interface IProductModal extends IProductData {
  isOpen: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductModal = ({
  _id,
  isOpen,
  image,
  name,
  price,
  category,
  quantity,
  setIsOpen,
}: IProductModal) => {
  const closeModal = () => setIsOpen!!(false)
  const {
    decreaseCartQuantity,
    increaseCartQuantity,
    cart,
    removeFromCart,
    getProductQuantity,
  } = useCart()

  const productQuantity = getProductQuantity(_id)

  const product = {
    image,
    _id,
    price,
    name,
    category,
  }

  return (
    <div className="w-full z-40 flex items-center  justify-center h-full fixed top-0 left-0 bg-black/70">
      <div className="bg-white w-[70vw] flex p-6 h-[400px] rounded-sm gap-4">
        <div className="relative h-full w-full">
          <img
            src={image}
            className="absolute w-full h-full object-contain inset-0"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col items-start">
            <div className="flex justify-between items-center w-full">
              <h1 className="font-normal font-Roboto text-[30px]">{name}</h1>
              <TfiClose
                onClick={closeModal}
                className="cursor-pointer"
                size={25}
                color="#111111"
              />
            </div>
            <h3 className="font-Roboto font-light text-[20px]">{price} kz</h3>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex w-full items-center justify-center mb-8 gap-4">
              <div className="w-6 h-6 rounded-full bg-red-600"></div>
              <div className="w-6 h-6 rounded-full bg-blue-600"></div>
              <div className="w-6 h-6 rounded-full bg-green-600"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            </div>

            <h2 className="text-lg font-medium mb-2">Quantidade</h2>
            <div className="flex gap-3 items-center">
              <button
                onClick={() => decreaseCartQuantity(product)}
                className="border border-zinc-300 roudend-md px-2 w-[30px]"
              >
                -
              </button>
              <span>{productQuantity}</span>
              <button
                onClick={() => increaseCartQuantity(product)}
                className="border border-zinc-300 roudend-md px-2 w-[30px]"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => increaseCartQuantity(product)}
            className="p-2 w-full rounded-md bg-black text-white uppercase"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
