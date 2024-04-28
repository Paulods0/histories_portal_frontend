import { Product } from "../../api/types"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
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
      <DialogContent className="flex items-center justify-center">
        <DialogHeader>
          <img
            src={product.image}
            className="w-[250px] h-full object-contain"
            alt={product.name}
          />
          <DialogTitle className="text-center font-Poppins">
            {product.name}
          </DialogTitle>
          <DialogTitle className="text-center text-[16px] font-normal font-Poppins">{`Preço: ${product.price} kz`}</DialogTitle>
        </DialogHeader>

        <DialogDescription className="h-[250px] pb-3">
          <div className="flex flex-col items-center h-full justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              {/* <div className="flex w-full items-center justify-center mb-8 gap-4">
                <div className="w-6 h-6 rounded-full bg-red-600"></div>
                <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                <div className="w-6 h-6 rounded-full bg-green-600"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
              </div> */}

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
            className="px-3 py-1 text-sm self-end rounded-md bg-black text-white uppercase"
          >
            Adicionar ao carrinho
          </button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default StoreCard
