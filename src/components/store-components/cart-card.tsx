import { Product } from "../../api/types"
import { useCart } from "../../context/cart-context"

type CartCardProps = {
  product: Product
}

const CartCard = ({ product }: CartCardProps) => {
  const {
    getProductQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart()
  // const quantity = getProductQuantity(product._id)
  return (
    <div className="flex w-full border-b-zinc-400 border-b  items-center justify-between gap-3">
      <div className="relative w-[120px] h-[120px]">
        <img
          src={product.image}
          className="absolute inset-0 w-full h-full object-contain"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-between gap-4 w-full">
        <div className="w-full flex items-center justify-between">
          <span className="text-[12px]">{product.name}</span>
          <span className="text-[12px]">{product.price} kz</span>
        </div>

        <div className="w-full items-center justify-between flex">
          <div className="px-2 py-3 flex justify-between items-center rounded-md border border-zinc-400">
            <button
              onClick={() => decreaseCartQuantity(product)}
              className=" w-12"
            >
              -
            </button>
            <span>{getProductQuantity(product._id)}</span>
            <button
              onClick={() => increaseCartQuantity(product)}
              className="px-2 w-12"
            >
              +
            </button>
          </div>

          <button
            className=" text-red-600 text-[14px] py-2 px-1"
            onClick={() => removeFromCart(product._id)}
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
