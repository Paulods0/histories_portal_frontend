import { ChangeEvent, useEffect, useState } from "react"
import { ICountryData } from "countries-list"
import { getCountryDataList } from "countries-list"
import FadeInEffect from "@/components/motion/fade-in"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubscribeFormType, subscribeFormSchema } from "@/lib/validation"

const Subscribe = () => {
  const [countries, setCountries] = useState<ICountryData[]>([])

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<SubscribeFormType>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      countryCode: "+244",
      country: "Angola",
    },
  })

  const handleSelectCountry = (value: ChangeEvent<HTMLSelectElement>) => {
    setValue("country", value.target.value)
  }

  const handleSelectCountryCode = (value: ChangeEvent<HTMLSelectElement>) => {
    setValue("countryCode", value.target.value)
  }

  const handleSubmitForm = async (data: SubscribeFormType) => {
    try {
      console.log(data)
      return
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setCountries(getCountryDataList())
  }, [])

  return (
    <FadeInEffect>
      <main className="w-full flex items-start justify-center">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="w-full lg:w-[800px] lg:mx-auto p-4 space-y-4"
        >
          <>
            <div className="p-2 border">
              <input
                {...register("name")}
                type="text"
                placeholder="Nome"
                className="border-none w-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
              />
            </div>
            {errors.name && (
              <span className="text-xs text-red-600">
                {errors.name.message}
              </span>
            )}
          </>

          <div className="p-2 border">
            <select
              defaultValue={"Angola"}
              onChange={handleSelectCountry}
              className="border-none w-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
            >
              <option disabled defaultValue={"Angola"}>
                Angola
              </option>

              {countries?.map((country: ICountryData, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <>
            <div className="p-2 border">
              <input
                {...register("email")}
                type="email"
                placeholder="Endereço de email"
                className="border-none w-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
              />
            </div>
            {errors.email && (
              <span className="text-xs text-red-600">
                {errors.email.message}
              </span>
            )}
          </>

          <div className="flex w-full items-center gap-x-2">
            <select
              defaultValue={"244"}
              onChange={handleSelectCountryCode}
              className="p-3 bg-transparent border h-full w-[150px] md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
            >
              <option value={"244"}>(+244) Angola</option>

              {countries?.map((country, index) => (
                <option
                  value={country.phone[0]!!}
                  key={index}
                  className="w-full flex items-center gap-x-2"
                >
                  <p>(+{country.phone[0]!!})</p>
                  <p>{country.name!!}</p>
                </option>
              ))}
            </select>

            <div className="relative p-2 border w-full">
              <input
                type="number"
                {...register("phone")}
                placeholder="Número de telefone"
                className="border-none w-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
              />

              {errors.phone && (
                <span className="text-xs absolute -bottom-6 right-1 text-start text-red-600">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          <button
            className="p-2 w-32 bg-zinc-900 text-white uppercase md:text-base text-xs"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </main>
    </FadeInEffect>
  )
}

export default Subscribe
