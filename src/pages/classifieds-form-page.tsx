import { useCreateClassifiedPost } from "@/lib/tanstack-query"
import { toast } from "react-toastify"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ClassifiedFormType, classifiedFormSchema } from "@/lib/validation"
import { NewClassifiedPost } from "@/api/types"
import { uploadImageToFirebaseStorage } from "@/utils/helpers"
import { LuImagePlus } from "react-icons/lu"

const ClassifiedForm = () => {
  const { mutate } = useCreateClassifiedPost()

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    control,
  } = useForm<ClassifiedFormType>({
    resolver: zodResolver(classifiedFormSchema),
    defaultValues: {
      type: "sell",
    },
  })

  const { append, remove, fields } = useFieldArray({
    control,
    name: "images",
  })

  function addImages() {
    if (fields.length < 3) {
      append({
        image: undefined,
      })
    }
  }
  function removeImage(index: number) {
    remove(index)
  }

  const handleSubmitForm = async (data: ClassifiedFormType) => {
    try {
      let imageURL = await uploadImageToFirebaseStorage(data.image!!)
      let imagesURL: string[] = []
      if (data?.images) {
        for (let image of data.images) {
          const file = await uploadImageToFirebaseStorage(image.image!! as File)
          imagesURL.push(file)
        }
      }

      const newPostData: NewClassifiedPost = {
        author: {
          firstname: data.author.firstname,
          lastname: data.author.lastname,
          email: data.author.email,
          phone: data.author.phone,
        },
        content: data.content,
        mainImage: imageURL,
        images: imagesURL,
        price: data.price,
        title: data.name,
        type: data.type!!,
      }
      mutate(newPostData)
      toast.success("O seu produto será analisado pela equipa Overland Angola")
      console.log(data)
      reset()
    } catch (error) {
      console.log(error)
      toast.error("Erro ao submeter o formulário")
      reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="relative space-y-3 mx-auto w-full lg:w-[800px] bg-white p-4"
    >
      <h1 className="text-3xl font-semibold mb-8 mt-4 font-Oswald text-center">
        Adicione o produto que pretende colocar à venda
      </h1>

      <div className="flex flex-col items-start">
        <input
          type="text"
          placeholder="Nome"
          {...register("author.firstname")}
          className="border p-2 w-full outline-none"
        />
        {errors.author?.firstname && (
          <span className="text-xs text-red-600">
            {errors.author.firstname.message}
          </span>
        )}
      </div>

      <div className="flex flex-col items-start">
        <input
          type="text"
          placeholder="Sobreome"
          {...register("author.lastname")}
          className="border p-2 w-full outline-none"
        />
        {errors.author?.lastname && (
          <span className="text-xs text-red-600">
            {errors.author.lastname.message}
          </span>
        )}
      </div>

      <div className="flex flex-col items-start">
        <input
          type="email"
          placeholder="Email"
          {...register("author.email")}
          className="border p-2 w-full outline-none"
        />
        {errors.author?.email && (
          <span className="text-xs text-red-600">
            {errors.author.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col items-start">
        <input
          type="number"
          placeholder="Número de telefone"
          {...register("author.phone")}
          className="border p-2 w-full outline-none"
        />
        {errors.author?.phone && (
          <span className="text-xs text-red-600">
            {errors.author.phone.message}
          </span>
        )}
      </div>

      <div className="flex flex-col items-start">
        <input
          type="number"
          placeholder="Preço do produto"
          {...register("price")}
          className="border p-2 w-full outline-none"
        />
        {errors.price && (
          <span className="text-xs text-red-600">{errors.price.message}</span>
        )}
      </div>

      <div className="flex flex-col items-start">
        <input
          type="text"
          placeholder="Nome do produto"
          {...register("name")}
          className="border p-2 w-full outline-none"
        />
        {errors.name && (
          <span className="text-xs text-red-600">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col items-start">
        <textarea
          rows={6}
          placeholder="Descrição"
          {...register("content")}
          className="border p-2 w-full resize-none outline-none"
        />
        {errors.content && (
          <span className="text-xs text-red-600">{errors.content.message}</span>
        )}
      </div>

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="mainImage">Imagem principal</label>
        <input
          id="mainImage"
          type="file"
          accept=".jpg, .png, .jpeg"
          {...register("image")}
          className="w-full file:bg-white file:border-none px-3 py-2 border md:file:text-base file:text-xs outline-none bg-transparent file:font-semibold file:capitalize text-orangeColor cursor-pointer "
        />
        {errors.image && (
          <span className="text-xs text-red-600">{errors.image.message}</span>
        )}
      </div>
      <h2>Adicionar mais imagens (opcional)</h2>

      <div className="w-full justify-start flex">
        <button
          type="button"
          className="text-colorBlack text-xl hover:text-zinc-400 duration-200 transition-all bg-zinc-300 p-4 rounded-lg"
          onClick={addImages}
        >
          <LuImagePlus />
        </button>
      </div>
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col w-full gap-2 items-end">
          <button
            type="button"
            className="w-fit text-red-600 hover:underline duration-300 transition-all"
            onClick={() => removeImage(index)}
          >
            Remover
          </button>
          <input
            type="file"
            key={field.id}
            {...register(`images.${index}.image`)}
            className="w-full file:bg-white file:border-none px-3 py-2 border md:file:text-base file:text-xs outline-none bg-transparent file:font-semibold file:capitalize text-orangeColor cursor-pointer"
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-white bg-colorBlack px-3 py-2"
      >
        {isSubmitting ? "Enviando..." : "Submeter formulário"}
      </button>
    </form>
  )
}

export default ClassifiedForm
