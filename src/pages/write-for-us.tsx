import { ChangeEvent, useEffect, useState } from "react"
import { ICountryData, getCountryDataList } from "countries-list"
import FadeInEffect from "@/components/motion/fade-in"
import { WriteForUsFormType, writeForUsSchemaType } from "@/lib/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const WriteForUs = () => {
  const [countries, setCountries] = useState<ICountryData[]>([])

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<WriteForUsFormType>({
    resolver: zodResolver(writeForUsSchemaType),
    defaultValues: {
      country: "Angola",
      countryCode: "244",
    },
  })

  const handleSelectCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue("country", e.target.value)
  }

  const handleSelectCode = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue("countryCode", e.target.value)
  }

  const handleSubmitForm = (data: WriteForUsFormType) => {
    console.log(data)
    try {
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
          className="w-full p-4 lg:w-[800px] lg:mx-auto space-y-6"
        >
          <>
            <div className="p-2 border">
              <input
                {...register("name")}
                type="text"
                placeholder="Nome"
                className="border-none md:placeholder:text-base placeholder:text-xs md:text-base text-xs w-full outline-none bg-transparent"
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
              className="border-none md:placeholder:text-base placeholder:text-xs md:text-base text-xs w-full outline-none bg-transparent"
            >
              <option defaultValue={"Angola"}>Angola</option>

              {countries.map((currentCountry: any, index) => (
                <option key={index} value={currentCountry.name}>
                  {currentCountry.name}
                </option>
              ))}
            </select>
          </div>
          <>
            <div className="p-2 border">
              <input
                {...register("email")}
                type="text"
                placeholder="Endereço de email"
                className="border-none md:placeholder:text-base placeholder:text-xs md:text-base text-xs w-full outline-none bg-transparent"
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
              defaultValue={"+244"}
              onChange={handleSelectCode}
              className="p-3 bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs border h-full w-[150px]"
            >
              <option defaultValue={"244"}>Angola (+244) </option>

              {countries.map((country, index) => (
                <option
                  value={country.phone[0]}
                  key={index}
                  className="w-full flex items-center gap-x-2"
                >
                  <p>{country.name}</p>
                  <p>(+{country.phone})</p>
                </option>
              ))}
            </select>

            <div className="relative p-2 border w-full">
              <input
                type="number"
                {...register("phone")}
                placeholder="Número de telefone"
                className="border-none md:placeholder:text-base placeholder:text-xs md:text-base text-xs w-full outline-none bg-transparent"
              />
              {errors.phone && (
                <span className="text-xs text-red-600 absolute right-2 -bottom-5">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          <>
            <div className="p-2 border h-[150px]">
              <input
                {...register("contextualize")}
                type="text"
                placeholder="Contextualiza a sua história (limite máximo de caracteres 400)"
                className="border-none md:placeholder:text-base placeholder:text-xs md:text-base text-xs w-full outline-none bg-transparent"
              />
            </div>
            {errors.contextualize && (
              <span className="text-xs text-red-600">
                {errors.contextualize.message}
              </span>
            )}
          </>
          <>
            <div className="p-2 border h-[150px]">
              <input
                {...register("write")}
                type="text"
                placeholder="Escreve (limite máximo de caracteres 400)"
                className="border-none md:placeholder:text-base placeholder:text-xs md:text-base text-xs w-full outline-none bg-transparent"
              />
            </div>
            {errors.write && (
              <span className="text-xs text-red-600">
                {errors.write.message}
              </span>
            )}
          </>

          <div className="p-2 flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <input
                key={i}
                id="file"
                {...register("image")}
                type="file"
                className="w-full file:bg-white file:border-none px-3 py-2 border md:file:text-base file:text-xs outline-none bg-transparent file:font-semibold file:capitalize text-goldenColor cursor-pointer"
              />
            ))}
          </div>

          <button
            className="p-2 w-32 bg-zinc-900 text-white uppercase md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </main>
    </FadeInEffect>
  )
}

export default WriteForUs
