import { Product } from "@/api/types"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import StoreBuyProductForm from "./store-buy-product-form"

type Props = {
  // product: Product
}

const BuyProductDialog = ({}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-10 self-center p-3 bg-colorBlack-light text-white">
          Efectuar compra
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Efectuar compra</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para enviar-nos um email
          </DialogDescription>
        </DialogHeader>
        <StoreBuyProductForm />
      </DialogContent>
    </Dialog>
  )
}

export default BuyProductDialog
