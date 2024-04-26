import React, { Dispatch, SetStateAction, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateClassifiedPost } from "@/lib/react-query"
import { ClassifiedPost } from "@/api/types"
import { toast } from "react-toastify"
type FormProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const ClassifiedForm = ({ isOpen, setIsOpen }: FormProps) => {
  const { mutate } = useCreateClassifiedPost()
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState("")
  const [title, setTitle] = useState("")
  const [mainImage, setMainImage] = useState("teste")
  const [content, setContent] = useState("")
  const [price, setPrice] = useState("")

  // const [file, setFile] = useState<File | undefined>(undefined)
  // const formSchema = z.object({
  //   name: z.string().min(1, "O nome é obrigatório"),
  //   email: z.string().min(1, "O email é obrigatorio"),
  //   phone: z.number().min(1, "O número de telefone é obrigatorio").max(9),
  //   price: z.string().min(1, "Defina um preço/valor para o artigo"),
  //   file: z.string(),
  // })
  // type FormType = z.infer<typeof formSchema>

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormType>({
  //   resolver: zodResolver(formSchema),
  // })

  const sendEmail = async () => {
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
    // mutate(data)
    toast.success("Enviado", {
      autoClose: 1000,
      hideProgressBar: true,
      position: "bottom-right",
    })
  }

  return (
    <>
      {/* <div /> */}
      <form
        onSubmit={sendEmail}
        className="relative space-y-3 w-[400px] bg-white p-4"
      >
        <div
          onClick={() => setIsOpen(false)}
          className="absolute cursor-pointer top-2 right-2"
        >
          Fechar
        </div>
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
            type="tel"
            className="border p-2 w-full"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="price">Preço do artigo</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            type="text"
            className="border p-2 w-full"
          />
        </div>
        {/* <div className="flex flex-col items-start w-full">
          <label htmlFor="">Preço do artgigo</label>
          <input type="file" className="border p-2 w-full" />
        </div> */}
        <button
          type="submit"
          className="text-white bg-colorBlack-dark px-3 py-2"
        >
          Enviar
        </button>
      </form>
    </>
  )
}

export default ClassifiedForm
