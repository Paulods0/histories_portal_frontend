import BuyProductDialog from "@/components/store-components/buy-product-dialog"
import CartCard from "@/components/store-components/cart-card"
import { BsArrowLeft } from "react-icons/bs"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { Link } from "react-router-dom"

// type Props = {}

const MobileCartPage = () => {
  // const { cart } = useCartContext()
  let cart: any[] = []
  return (
    <main className="w-full flex flex-col">
      <div className="bg-colorBlack-dark px-8 py-4 w-full flex items-center justify-between">
        <Link
          to={"/pages/loja"}
          className="text-colorBlack flex items-center text-xl gap-2"
        >
          <BsArrowLeft />
          Voltar
        </Link>

        <div className="relative flex gap-2 uppercase font-bold bg-white/40 rounded-full p-2 w-fit self-end text-2xl">
          <HiOutlineShoppingBag />

          <span className="text-base">{cart.length}</span>
        </div>
      </div>

      <div className="w-full flex flex-col my-8 items-center justify-center h-full">
        {cart.length === 0 ? (
          <div className="px-6 py-8">
            <h1 className="text-2xl font-semibold">
              Não há nenhum artigo no carrinho.
            </h1>
          </div>
        ) : (
          <>
            <div className="w-full">
              {cart.map((product) => (
                <CartCard key={product._id} product={product} />
              ))}
            </div>

            <BuyProductDialog />
          </>
        )}
      </div>
    </main>
  )
}

export default MobileCartPage
