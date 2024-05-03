import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ClipLoader } from "react-spinners"
import { useSubscribeToNewsletter } from "@/lib/react-query"
import { toast } from "react-toastify"

const formSchema = z.object({
  name: z.string().min(2, "*Insira o seu nome."),
  email: z.string().email().min(2, "*Insira um email válido."),
})

type FormSchemaType = z.infer<typeof formSchema>

const NewsletterForm = () => {
  const { mutateAsync, isPending } = useSubscribeToNewsletter()
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmitForm = async (data: FormSchemaType) => {
    try {
      await mutateAsync(data)
      reset()
      toast.success("Subscrição bem sucedida, por favor verifique o seu email.")
    } catch (error) {
      toast.error("Erro ao subscrever, por favor tente novamente")
    }
  }
  return (
    <div className="h-full p-3 w-full space-y-3">
      <h1 className="font-normal uppercase text-white text-2xl lg:text-[16px]">
        subscrever à newsletter
      </h1>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-full flex flex-col pr-8 items-center justify-center"
      >
        <div className="border-b border-l flex flex-col border-b-white w-full p-6 md:p-5 lg:p-2">
          <input
            type="text"
            placeholder="Nome"
            {...register("name")}
            className="border-none placeholder:text-white text-white text-2xl lg:text-sm outline-none bg-transparent w-full h-full"
          />
          {errors.name && (
            <span className="text-[10px] text-red-700">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="border-b border-l flex flex-col border-b-white w-full p-6 md:p-5 lg:p-2">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="border-none placeholder:text-white text-2xl lg:text-sm text-white outline-none bg-transparent w-full h-full"
          />
          {errors.email && (
            <span className="text-[10px] text-red-700">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="text-white flex items-start mt-3 w-full h-full hover:text-white/60 duration-200 transition-all ease-linear">
          <button
            type="submit"
            className="uppercase h-2 border border-white p-8 lg:px-3 lg:py-4 flex items-center justify-center font-normal text-xl lg:text-[16px]"
          >
            {isPending ? <ClipLoader size={20} color="#FFF" /> : "subscrever"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewsletterForm