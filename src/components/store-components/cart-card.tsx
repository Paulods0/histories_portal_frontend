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
    <div className="flex flex-col lg:flex-row w-full border-b-zinc-400 lg:pb-0 pb-4 border-b items-center justify-between gap-3">
      <div className="relative size-24 lg:size-[120px]">
        <img
          src={product.image}
          className="absolute inset-0 w-full h-full object-contain"
          alt="product-image"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between gap-4 w-full">
        <div className="w-full flex items-center justify-around lg:justify-between">
          <span className="text-base lg:text-sm">{product.name}</span>
          <span className="text-base lg:text-sm">{product.price} kz</span>
        </div>

        <div className="w-full items-center justify-around lg:justify-between flex">
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
