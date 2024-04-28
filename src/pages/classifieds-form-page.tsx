import  { FormEvent, useState } from "react"
import { useCreateClassifiedPost } from "@/lib/react-query"
import { ClassifiedPost } from "@/api/types"
import { toast } from "react-toastify"

const ClassifiedForm = () => {
  const { mutate } = useCreateClassifiedPost()
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState("")
  const [title, setTitle] = useState("")
  const [mainImage, setMainImage] = useState("teste")
  const [content, setContent] = useState("")
  const [price, setPrice] = useState("")

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault()
    if (
      !title ||
      !firstname ||
      !email ||
      !phone ||
      !lastname ||
      !content ||
      !mainImage ||
      !price
    ) {
      toast.error("Por favor preencha todos os campos obrigatórios.", {
        autoClose: 2000,
        hideProgressBar: true,
        position: "bottom-right",
      })
      return
    }
    const data: ClassifiedPost = {
      author: {
        firstname: firstname,
        email: email,
        lastname: lastname,
        phone: phone,
      },
      content: content,
      price: price,
      title: title,
      mainImage: mainImage,
    }
    console.log(data)
    mutate(data)
    toast.success("Enviado", {
      autoClose: 1000,
      hideProgressBar: true,
      position: "bottom-right",
    })
  }

  return (
    <>
      <form
        onSubmit={sendEmail}
        className="relative space-y-3 mx-auto w-[400px] bg-white p-4"
      >
        <div className="flex flex-col items-start">
          <label htmlFor="firstname">Nome</label>
          <input
            id="firstname"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="lastname">Sobrenome</label>
          <input
            id="lastname"
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border p-2 w-full"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="phone">Numero de telefone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            type="number"
            className="border p-2 w-full"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="price">Preço do artigo</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            type="number"
            className="border p-2 w-full"
          />
        </div>

        <div className="flex flex-col items-start w-full">
          <label htmlFor="title">Nome do artigo</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            className="border p-2 w-full"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="content">Descrição</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            id="content"
            className="border p-2 w-full h-[120px] resize-none"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="content">Imagem</label>
          <input
          type="text"
            onChange={(e) => setMainImage(e.target.value)}
            id="content"
            className="border p-2 w-full h-[120px] resize-none"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-colorGray-medium px-3 py-2"
        >
          Submeter formulário
        </button>
      </form>
    </>
  )
}

export default ClassifiedForm
