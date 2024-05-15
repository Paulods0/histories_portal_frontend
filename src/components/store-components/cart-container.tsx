import { useCart } from "../../context/cart-context"
import CartCard from "./cart-card"
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet"
import BuyProductDialog from "./buy-product-dialog"

const CartContainer = () => {
  const { cart } = useCart()

  // const handleSubmitt = async () => {
  //   try {
  //     cart.forEach((product) => {
  //       console.log(
  //         `O usuário comprou: ${product.name}, Quantidade: ${product.quantity}`
  //       )
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-2xl uppercase">Cart</SheetTitle>
      </SheetHeader>
      {cart.length === 0 ? (
        <SheetHeader>
          <SheetDescription>
            Não há nenhum produto no carrinho.
          </SheetDescription>
        </SheetHeader>
      ) : (
        <>
          <div className="w-full lg:h-[450px] border-b scroll-bar pb-3 overflow-y-auto my-4 flex flex-col items-center ">
            {cart.map((product) => (
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
