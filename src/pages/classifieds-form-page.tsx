import { useCreateClassifiedPost } from "@/lib/react-query"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ClassifiedFormType, classifiedFormSchema } from "@/lib/validation"
import { NewClassifiedPost } from "@/api/types"
import { uploadImageToFirebaseStorage } from "@/utils/helpers"

const ClassifiedForm = () => {
  const { mutate } = useCreateClassifiedPost()

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ClassifiedFormType>({
    resolver: zodResolver(classifiedFormSchema),
    defaultValues: {
      type: "sell",
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
      <div className="flex flex-col items-start">
        <input
          type="text"
          placeholder="Nome"
          {...register("author.firstname")}
          className="border p-2 w-full"
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
          className="border p-2 w-full"
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
          className="border p-2 w-full"
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
          className="border p-2 w-full"
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
          className="border p-2 w-full"
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
          className="border p-2 w-full"
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
          className="border p-2 w-full resize-none"
        />
        {errors.content && (
          <span className="text-xs text-red-600">{errors.content.message}</span>
        )}
      </div>

      <div className="flex flex-col items-start">
        <input
          type="file"
          accept=".jpg, .png, .jpeg"
          {...register("image")}
          className="border p-2 file:text-colorGray-medium w-full"
        />
        {errors.image && (
          <span className="text-xs text-red-600">{errors.image.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-white bg-colorGray-medium px-3 py-2"
      >
        {isSubmitting ? "Enviando..." : "Submeter formulário"}
      </button>
    </form>
  )
}

export default ClassifiedForm
