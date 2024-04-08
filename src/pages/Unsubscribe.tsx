import { useNavigate, useParams } from "react-router-dom"
import { url } from "../utils/constants"

const Unsubscribe = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleUnsubscribeRegistation = async () => {
    await fetch(`${url}/newsletter/unregister/${id}`, {
      method: "DELETE",
    })
    navigate("/")
  }
  return (
    <main className="h-screen w-full flex items-start justify-center bg-[#EEEEEE]">
      <section className="flex flex-col mt-20 w-[50%]">
        <h1 className="font-bold text-3xl mb-8">Overland Angola</h1>
        <div className="bg-white p-8 rounded-md flex flex-col text-[14px]">
          <span>Cancelando a inscrição na lista "OVERLAND ANGOLA".</span>
          <span>
            Ao clicar em Cancelar inscrição, você não receberá mais emails de
            marketing da lista "Overland Angola".
          </span>
          <button
            onClick={handleUnsubscribeRegistation}
            className="px-4 py-3 self-start bg-[#5D5D5D] text-white rounded-md mt-6 uppercase"
          >
            cancelar subscrição
          </button>
        </div>
      </section>
    </main>
  )
}

export default Unsubscribe
