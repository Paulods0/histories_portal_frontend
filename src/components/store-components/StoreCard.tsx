import { Link } from "react-router-dom"
import { IProductData } from "../../api/types"

interface IStoreProducs {
  product: IProductData
}

const StoreCard: React.FC<IStoreProducs> = ({
  product: { _id, image, name, price },
}) => {
  return (
    <Link
      to={`/pages/loja/product/${_id}`}
      className=" cursor-pointer border border-colorGray-light/20 rounded-md p-2"
    >
      <div className="relative w-[220px] h-[220px]">
        <img
          src={image}
          className="object-cover absolute inset-0 p-4 w-full h-full"
          alt="product image"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1>{name}</h1>
        <h3 className="text-[#9D9D9D]">{price} Kz</h3>
      </div>
    </Link>
  )
}

export default StoreCard
