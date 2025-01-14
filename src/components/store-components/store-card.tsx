import LazyImage from "../global/lazy-image"
import { Product } from "@/api/product/product.type"
import { useCartContext } from "@/context/cart-context"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"

interface IStoreProducs {
  product: Product
}

const StoreCard: React.FC<IStoreProducs> = ({ product }) => {
  const { addProduct, removeProduct, getItemQuantity } = useCartContext()

  const formatedPrice = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "AKZ",
  }).format(Number(product.price))

  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer hover:bg-zinc-600/5 duration-200 transition-all ease-in-out border border-colorGray-light/20 rounded-md p-2">
          <div className="relative w-[220px] h-[220px]">
            <LazyImage
              id={product._id}
              image={product.image}
              className="object-cover absolute inset-0 p-4 w-full h-full"
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <h1>{product.name}</h1>
            <h3 className="text-[#9D9D9D]">{formatedPrice}</h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="grid grid-cols-2 gap-4">
        <div className="w-full h-full items-center flex flex-col">
          <img
            src={product.image}
            className="w-[150px] h-52 object-contain"
            alt={product.name}
          />

          <h1 className="text-center font-Poppins">{product.name}</h1>
          <h4 className="text-center text-[16px] font-normal font-Poppins">{`Preço: ${formatedPrice}`}</h4>
          <hr className="w-full h-[1px] my-2 bg-zinc-300" />
          <p className="text-center">{product.description}</p>
        </div>

        <div className="flex-1 grid grid-rows-2">
          <div className="flex flex-col items-center row-span-2 justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-lg font-medium mb-2">Quantidade</h2>
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => removeProduct(product)}
                  className="border border-zinc-300 roudend-md px-2 w-[30px]"
                >
                  -
                </button>
                <span>{getItemQuantity(product._id)}</span>
                <button
                  onClick={() => addProduct(product)}
                  className="border border-zinc-300 roudend-md px-2 w-[30px]"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => addProduct(product)}
            className="md:px-3 py-3 text-xs md:text-sm self-end rounded-md bg-black text-white uppercase"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default StoreCard
