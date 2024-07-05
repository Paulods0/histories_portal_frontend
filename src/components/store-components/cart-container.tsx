import { useCartContext } from "../../context/cart-context"
import CartCard from "./cart-card"
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet"
import BuyProductDialog from "./buy-product-dialog"
import { Product } from "@/api/types"

const CartContainer = () => {
  const { cartItems } = useCartContext()

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-2xl uppercase">Carrinho</SheetTitle>
      </SheetHeader>
      {cartItems.length === 0 ? (
        <SheetHeader>
          <SheetDescription>
            Não há nenhum produto no carrinho.
          </SheetDescription>
        </SheetHeader>
      ) : (
        <>
          <div className="w-full lg:h-[450px] border-b scroll-bar pb-3 overflow-y-auto my-4 flex flex-col items-center ">
            {cartItems?.map((product: Product) => (
              <CartCard key={product._id} product={product} />
            ))}
          </div>
          <SheetFooter>
            <BuyProductDialog />
          </SheetFooter>
        </>
      )}
    </SheetContent>
  )
}

export default CartContainer
