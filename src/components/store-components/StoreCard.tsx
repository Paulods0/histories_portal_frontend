import { Link } from "react-router-dom"

interface IStoreProducs {
  product: {
    id: number
    price: number
    name: string
    image: string
  }
}

const StoreCard: React.FC<IStoreProducs> = ({
  product: { id, image, name, price },
}) => {
  return (
    <Link
      to={`/pages/loja/product/${id}`}
      className="w-[200px] h-[300px] shadow-md p-2 hover:scale-95 duration-300 transition-all ease-in-out cursor-pointer"
    >
      <div className="w-full h-[240px] bg-black">
        <img
          src={image}
          className="object-cover inset-0 w-full h-full"
          alt="product image"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1>{name}</h1>
        <h3 className="text-[#9D9D9D]">${price}</h3>
      </div>
    </Link>
  )
}

export default StoreCard
