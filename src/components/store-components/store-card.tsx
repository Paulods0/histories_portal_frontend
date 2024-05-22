import { Product } from "../../api/types"

import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { useCart } from "@/context/cart-context"

interface IStoreProducs {
  product: Product
}

const StoreCard: React.FC<IStoreProducs> = ({ product }) => {
  const { decreaseCartQuantity, increaseCartQuantity, getProductQuantity } =
    useCart()
  const productQuantity = getProductQuantity(product._id)
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" cursor-pointer hover:bg-zinc-600/5 duration-200 transition-all ease-in-out border border-colorGray-light/20 rounded-md p-2">
          <div className="relative w-[220px] h-[220px]">
            <img
              loading="lazy"
              src={product.image}
              className="object-cover absolute inset-0 p-4 w-full h-full"
              alt="product image"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <h1>{product.name}</h1>
            <h3 className="text-[#9D9D9D]">{product.price} Kz</h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="grid grid-cols-2">
        <div className="w-full h-full items-center flex flex-col">
          <img
            src={product.image}
            className="w-[150px] h-52 object-contain"
            alt={product.name}
          />

          <h1 className="text-center font-Poppins">{product.name}</h1>
          <h4 className="text-center text-[16px] font-normal font-Poppins">{`Preço: ${product.price}`}</h4>
        </div>

        <div className="flex-1 grid grid-rows-2">
          <div className="flex flex-col items-center row-span-2 justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
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
          </div>

          <button
            onClick={() => increaseCartQuantity(product)}
            className="md:px-3 py-2 lg:py-1 text-xs md:text-sm self-end rounded-md bg-black text-white uppercase"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default StoreCard
