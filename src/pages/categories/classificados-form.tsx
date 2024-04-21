import React, { Dispatch, SetStateAction, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
type FormProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const ClassifiedForm = ({ isOpen, setIsOpen }: FormProps) => {
  const [file, setFile] = useState<File | undefined>(undefined)
  const formSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().min(1, "O email é obrigatorio"),
    phone: z.number().min(1, "O número de telefone é obrigatorio").max(9),
    price: z.string().min(1, "Defina um preço/valor para o artigo"),
    file: z.string(),
  })
  type FormType = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })
  const sendEmail = async (data: any) => {
    console.log(data)
    console.log(errors.email?.message)
  }
  return (
    <>
      {/* <div /> */}
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="relative space-y-3 w-[400px] bg-white p-4"
      >
        <div
          onClick={() => setIsOpen(false)}
          className="absolute cursor-pointer top-2 right-2"
        >
          Fechar
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Nome</label>
          <input
            {...register("name")}
            type="text"
            className="border p-2 w-full"
          />
          {errors.name && (
            <span className="text-red-700 text-[12px] ">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Email</label>
          <input
            {...register("email")}
            type="email"
            className="border p-2 w-full"
          />
          {errors.email && (
            <span className="text-red-700 text-[12px] ">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="">Numero de telefone</label>
          <input
            {...register("phone")}
            type="tel"
            className="border p-2 w-full"
          />
          {errors.phone && (
            <span className="text-red-700 text-[12px] ">
              {errors.phone.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="">Preço do artgigo</label>
          <input
            {...register("price")}
            type="text"
            className="border p-2 w-full"
          />
          {errors.price && (
            <span className="text-red-700 text-[12px] ">
              {errors.price.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start w-full">
          <label htmlFor="">Preço do artgigo</label>
          <input
            // onChange={(e) => setFile(e.target.files[0])}
            {...register("file")}
            type="file"
            className="border p-2 w-full"
          />
        </div>
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
