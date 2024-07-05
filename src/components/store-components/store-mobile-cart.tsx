import { HiOutlineShoppingBag } from "react-icons/hi"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { useCartContext } from "@/context/cart-context"
import BuyProductDialog from "./buy-product-dialog"
import CartCard from "./cart-card"

const StoreMobileCart = () => {
  const { cartItems } = useCartContext()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center ">
          <HiOutlineShoppingBag className="text-white text-3xl" />
          {cartItems.length > 0 && (
            <span className="size-6 rounded-full flex items-center justify-center bg-white/40">
              {cartItems.length}
            </span>
          )}
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="relative flex gap-2 uppercase font-bold bg-white/40 rounded-full p-2 w-fit self-end text-2xl">
          <HiOutlineShoppingBag />
          <span className="text-base">{cartItems.length}</span>
        </div>
        {cartItems.length > 0 ? (
          <div className="h-full flex flex-col">
            <ul className="h-[80vh] overflow-y-auto">
              {cartItems.map((item) => (
                <CartCard product={item} key={item._id} />
              ))}
            </ul>
            <BuyProductDialog />
          </div>
        ) : (
          <div className="h-[50vh] w-full flex items-center justify-center">
            <h1 className="text-xl">Não há nenhum artigo ainda.</h1>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default StoreMobileCart
