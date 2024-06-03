import { NewClassifiedPost } from "@/api/types"
import { useCreateClassifiedPost } from "@/lib/react-query"
import { ClassifiedFormType, classifiedFormSchema } from "@/lib/validation"
import { uploadImageToFirebaseStorage } from "@/utils/helpers"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const ClassifiedFormBuyPage = () => {
  const { mutate } = useCreateClassifiedPost()

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ClassifiedFormType>({
    resolver: zodResolver(classifiedFormSchema),
    defaultValues: {
      type: "buy",
    },
  })

  const handleSubmitForm = async (data: ClassifiedFormType) => {
    try {
      let imageURL = await uploadImageToFirebaseStorage(data.image!!)

      const newPostData: NewClassifiedPost = {
        author: {
          firstname: data.author.firstname,
          lastname: data.author.lastname,
          email: data.author.email,
          phone: data.author.phone,
        },
        content: data.content,
        mainImage: imageURL,
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
        Adicione o produto que pretende comprar
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
          placeholder="Nome do produto"
          {...register("content")}
          className="border p-2 w-full resize-none outline-none"
        />
        {errors.content && (
          <span className="text-xs text-red-600">{errors.content.message}</span>
        )}
      </div>

      <div className="flex flex-col items-start">
        <input
          type="file"
          {...register("image")}
          className="w-full file:bg-white file:border-none px-3 py-2 border md:file:text-base file:text-xs outline-none bg-transparent file:font-semibold file:capitalize text-orangeColor cursor-pointer"
        />
        {errors.image && (
          <span className="text-xs text-red-600">{errors.image.message}</span>
        )}
      </div>

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

export default ClassifiedFormBuyPage
