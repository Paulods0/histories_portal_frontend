import { z } from "zod"
import { ClassifiedFormValidation } from "../lib/validation"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import ErrorMessage from "../components/validation/ErrorMessage"
import { error } from "console"
import { ChangeEvent, useState } from "react"

type FormSchemaType = z.infer<typeof ClassifiedFormValidation>

const ClassifiedsFormPage = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(ClassifiedFormValidation),
  })

  const [image, setImage] = useState<File | undefined>(undefined)
  const [imageToShow, setImageToShow] = useState<any[]>([])
  // console.log(imageToShow)

  const submitForm = async (data: FormSchemaType) => {
    console.log(data)
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: "image",
  })

  const handleAppend = () => {
    append({
      name: {} as File,
    })
  }
  // const handleAppend = () => {
  //   append(Array.from(Array(3), () => ({ name: {} as File }))) // Adicionando 3 arquivos vazios para teste
  // }

  // const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const file = e.target.files[0]
  //     const reader = new FileReader()
  //     reader.onload = (e) => {
  //       setImageToShow(e.target!!.result)
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files) // Convertendo a lista de arquivos para um array
      const promises = files.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = (e) => {
            resolve(e.target?.result as string)
          }
          reader.onerror = reject
          reader.readAsDataURL(file)
        })
      })

      Promise.all(promises).then((imagesDataUrls) => {
        setImageToShow(imagesDataUrls) // Salvando os data URLs das imagens no estado
      })
    }
  }

  return (
    <main className="w-full h-full p-12 flex items-center font-Oswald justify-center">
      <form onSubmit={handleSubmit(submitForm)} className="mx-auto w-[400px]">
        <h1 className="font-bold text-2xl text-center mb-12">
          Preencha os dados para enviar o seu produto aos nossos
          administradores.
        </h1>

        <div className="flex flex-col items-start justify-start w-full">
          <label htmlFor="username">Nome</label>
          <input
            id="username"
            {...register("fisrtname")}
            className="border px-3 py-2 w-full rounded-md"
          />
          <ErrorMessage
            error={errors.fisrtname}
            message={errors.fisrtname?.message}
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <label htmlFor="lastname">Sobrenome</label>
          <input
            id="lastname"
            {...register("lastname")}
            className="border px-3 py-2 w-full rounded-md"
          />
          <ErrorMessage
            error={errors.lastname}
            message={errors.lastname?.message}
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <label htmlFor="phonenumber">Número de telefone</label>
          <input
            id="phonenumber"
            {...register("phonenumber")}
            className="border px-3 py-2 w-full rounded-md"
          />
          <ErrorMessage
            error={errors.phonenumber}
            message={errors.phonenumber?.message}
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register("email")}
            className="border px-3 py-2 w-full rounded-md"
          />
          <ErrorMessage error={errors.email} message={errors.email?.message} />
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <label htmlFor="productname">Nome do artigo</label>
          <input
            id="productname"
            {...register("productname")}
            className="border px-3 py-2 w-full rounded-md"
          />
          <ErrorMessage
            error={errors.productname}
            message={errors.productname?.message}
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <label htmlFor="price">Preço do artigo</label>
          <input
            id="price"
            {...register("price")}
            className="border px-3 py-2 w-full rounded-md"
          />
          <ErrorMessage error={errors.price} message={errors.price?.message} />
        </div>

        {/* <div className="flex border px-3 py-2 w-full rounded-md flex-col items-start justify-start ">
          <label htmlFor="image" className="w-full">
            <div className="border rounded-sm flex items-center justify-center px-4 py-2">
              Adicionar imagem
            </div>
            <input
              id="image"
              type="file"
              accept="image/*"
              // onChange={handleFile}
              {...register("image")}
              className="opacity-0 w-0 h-0"
            />
            {errors.image && (
              <span className="text-[12px] text-red-800">
                {errors.image.message}
              </span>
            )}
          </label>
        </div> */}

        {/* <div className="flex items-center w-full">
          {imageToShow.map((imageDataUrl, index) => (
            <img
              key={index}
              src={imageDataUrl}
              className="w-24 h-24"
              alt={`Imagem ${index}`}
            />
          ))}
        </div> */}
        {fields.map((field, index) => {
          return (
            <div className="w-full my-2" key={field.id}>
              <input
                type="file"
                {...register(`image.${index}.name`)}
                onChange={handleFile}
              />
            </div>
          )
        })}
        <div className="w-full justify-between flex items-center">
          <button
            type="submit"
            className="px-3 py-2 rounded-md text-white uppercase bg-colorGray-medium mt-3"
          >
            enviar
          </button>
          <button
            onClick={handleAppend}
            className="px-3 py-2  rounded-md text-white uppercase bg-colorGray-medium mt-3"
          >
            adicionar imagem
          </button>
        </div>
      </form>
    </main>
  )
}

export default ClassifiedsFormPage

{
  /* <ErrorMessage error={errors.price} message={errors.price?.message} /> */
}
