import axios from "@/config/axios"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { useEffect, useRef, useState } from "react"
import { getCountryDataList } from "countries-list"
import { useCartContext } from "@/context/cart-context"
import { zodResolver } from "@hookform/resolvers/zod"
import { BuyProductType, buyProductFormSchema } from "@/lib/validation"

type CountryCode = { code: number; country: string }

const StoreBuyProductForm = () => {
  const { cartItems, clearCart } = useCartContext()
  const [countryCode, setCountryCode] = useState<CountryCode[]>([])
  const selectRef = useRef<HTMLSelectElement | null>(null)

  useEffect(() => {
    const countries = getCountryDataList()
    let data: CountryCode[] = []
    for (let country of countries) {
      data.push({ code: country.phone[0], country: country.name })
    }
    setCountryCode(data)
  }, [])

  let products: {
    name: string
    image: string
    price: string
    totalPrice: string
    storeQuantity: number
  }[] = []

  for (let product of cartItems) {
    products.push({
      name: product.name,
      image: product.image,
      price: product.price,
      totalPrice: product.totalPrice!!,
      storeQuantity: product.storequantity!!,
    })
  }
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BuyProductType>({
    resolver: zodResolver(buyProductFormSchema),
    defaultValues: {
      code: "+244",
    },
  })

  function handleSelectCode() {
    if (selectRef.current) {
      const value = selectRef.current.value
      setValue("code", value)
    }
  }

  async function handleSubmitForm(data: BuyProductType) {
    try {
      const payload = {
        user: {
          email: data.email,
          name: data.name,
          phone: data.phone,
          code: `+${data.code}`,
        },
        products: products,
      }
      await axios.post("/product/buy-product", payload)
      toast.success("Pedido enviado")
      clearCart()
    } catch (error: any) {
      console.log("handleSubmitForm ~ error", error)
      toast.error(error.response.data.message)
    }
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
      <div className="flex items-center gap-2 w-full">
        <select
          ref={selectRef}
          defaultValue={"+244"}
          onChange={handleSelectCode}
          className="border px-2 py-2 w-[100px] outline-none"
        >
          {countryCode.map((country, index) => (
            <option
              key={index}
              value={country.code}
              className="flex w-full items-center"
            >
              <span className="mr-2">{`(+${country.code})`}</span>
              <span>{country.country}</span>
            </option>
          ))}
        </select>
        <div className="flex flex-col w-full">
          <input
            type="number"
            {...register("phone")}
            placeholder="Número de telefone"
            className="border px-2 py-2 flex-1 outline-none"
          />
          {errors.phone && (
            <span className="text-xs text-red-700">{errors.phone.message}</span>
          )}
        </div>
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full disabled:bg-colorGray-medium px-3 py-2 text-white capitalize bg-colorBlack"
      >
        {isSubmitting ? "enviando..." : "Enviar"}
      </button>
    </form>
  )
}

export default StoreBuyProductForm
