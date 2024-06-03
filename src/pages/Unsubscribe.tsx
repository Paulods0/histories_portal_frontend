import { useNavigate } from "react-router-dom"
import axios from "@/config/axios"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { unsubscribeNewsletter } from "@/api"

const Unsubscribe = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  const handleUnsubscribe = async (e: FormEvent) => {
    e.preventDefault()
    await unsubscribeNewsletter(email)
    toast.success("Subscrição cancelada com sucesso")
    navigate("/")
  }
  return (
    <main className="h-screen w-full flex items-start justify-center bg-[#EEEEEE]">
      <section className="flex flex-col mt-20 w-[50%]">
        <h1 className="font-bold text-3xl mb-8">Overland Angola</h1>
        <div className="bg-white p-8 rounded-md flex flex-col text-[14px]">
          <span>
            Cancelando a inscrição na newsletter{" "}
            <strong>OVERLAND ANGOLA.</strong>
          </span>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="capitalize mt-4 w-fit">
                cancelar subscrição
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cancelar Subscrição</DialogTitle>
                <DialogDescription>
                  Lembre-se de que ao cancelar sua inscrição, você deixará de
                  receber nossas últimas atualizações, notícias e ofertas
                  especiais.
                  <br />
                  Se mudar de ideia no futuro, você sempre poderá se inscrever
                  novamente em nossa newsletter.
                  <br />
                  Agradecemos por ter estado conosco e desejamos tudo de bom
                  para o futuro.
                  <br />
                  <br />
                  Atenciosamente, Equipe Overland Angola
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleUnsubscribe} className="w-full mb-4">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-2 border bg-transparent p-2 outline-none"
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="self-start bg-[#5D5D5D] text-white text-base rounded-md mt-6 capitalize"
                >
                  continuar
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </main>
  )
}

export default Unsubscribe
