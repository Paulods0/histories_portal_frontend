import { Link } from "react-router-dom"
import { IProductData } from "../../api/types"
import { useState } from "react"
import ProductModal from "./product-modal"

interface IStoreProducs {
  product: IProductData
}

const StoreCard: React.FC<IStoreProducs> = ({
  product: { _id, image, name, price, category, quantity },
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div
        onClick={openModal}
        className=" cursor-pointer hover:bg-zinc-600/5 duration-200 transition-all ease-in-out border border-colorGray-light/20 rounded-md p-2"
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
      </div>
      {isOpen && (
        <ProductModal
          _id={_id}
          image={image}
          name={name}
          quantity={quantity}
          price={price}
          category={category}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
    </>
  )
}

export default StoreCard
