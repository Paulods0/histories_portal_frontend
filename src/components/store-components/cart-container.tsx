import { useCart } from "../../context/cart-context"
import { TfiClose } from "react-icons/tfi"
import { motion } from "framer-motion"
import CartCard from "./cart-card"

const cartAnimation = {
  initial: {
    width: 0,
    opacity: 0,
  },
  animate: {
    width: 380,
    opacity: 1,
  },
}

const CartContainer = ({
  closeCartContainer,
}: {
  closeCartContainer: () => void
}) => {
  const { cart } = useCart()

  const handleSubmitt = async () => {
    try {
      cart.forEach((product) => {
        console.log(
          `O usuário comprou: ${product.name}, Quantidade: ${product.quantity}`
        )
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <motion.div
      variants={cartAnimation}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
      className="bg-white shadow-md px-8 py-3 h-full w-[380px] overflow-y-auto right-0 top-0 fixed"
    >
      <div className="w-full flex items-center justify-between border-b border-b-zinc-500 py-5">
        <h1 className="font-medium text-2xl uppercase">cart</h1>
        <span onClick={closeCartContainer} className="cursor-pointer">
          <TfiClose size={20} color="#111111" />
        </span>
      </div>
      {cart.length === 0 ? (
        <div className="h-[80px] w-full flex items-center justify-start">
          Não há nenhum produto no carrinho.
        </div>
      ) : (
        <div>
          <div className="w-full h-[400px] border-b pb-3 overflow-y-auto my-4 flex flex-col items-center ">
            {cart.map((product) => (
              <CartCard key={product._id} product={product} />
            ))}
          </div>

          <button
            onClick={handleSubmitt}
            className="mt-10 self-center p-3 bg-colorBlack-light text-white"
          >
            Efectuar compra
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default CartContainer
