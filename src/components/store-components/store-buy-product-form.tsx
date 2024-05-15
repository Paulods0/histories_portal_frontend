import { BuyProductType, buyProductFormSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
// import { resolve } from "path"
import { useForm } from "react-hook-form"

// type Props = {}

const StoreBuyProductForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<BuyProductType>({
    resolver: zodResolver(buyProductFormSchema),
  })

  const handleSubmitForm = (data: BuyProductType) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-4"
    >
      <>
        <input
          type="text"
          {...register("name")}
          placeholder="Nome"
          className="border px-2 py-2 w-full outline-none"
        />
        {errors.name && (
          <span className="text-xs text-red-700">{errors.name.message}</span>
        )}
      </>
      <>
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className="border px-2 py-2 w-full outline-none"
        />
        {errors.email && (
          <span className="text-xs text-red-700">{errors.email.message}</span>
        )}
      </>
      <>
        <input
          type="number"
          {...register("phone")}
          placeholder="Número de telefone"
          className="border px-2 py-2 w-full outline-none"
        />
        {errors.phone && (
          <span className="text-xs text-red-700">{errors.phone.message}</span>
        )}
      </>
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full disabled:bg-colorGray-medium px-3 py-2 text-white capitalize bg-colorBlack-light"
      >
        {isSubmitting ? "enviando..." : "Enviar"}
      </button>
    </form>
  )
}

export default StoreBuyProductForm
