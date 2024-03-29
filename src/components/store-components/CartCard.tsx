import { IProductData } from "../../api/types"

const CartCard = ({
  product,
  removeProduct,
}: {
  product: IProductData
  removeProduct: (id: string) => void
}) => {
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
            <button className=" w-12">-</button>
            <span>0</span>
            <button className="px-2 w-12">+</button>
          </div>

          <button
            className=" text-red-600 text-[14px] py-2 px-1"
            onClick={() => removeProduct(product._id)}
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
