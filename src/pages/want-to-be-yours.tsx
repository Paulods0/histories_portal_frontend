import {
  WantToBeYoursFormType,
  wantToBeYoursFormSchema,
} from "@/lib/validation"
import axios from "@/config/axios"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async"
import { zodResolver } from "@hookform/resolvers/zod"
  import FadeInEffect from "@/components/motion/fade-in"
import { ChangeEvent, useEffect, useState } from "react"
import { ICountryData, getCountryDataList } from "countries-list"

const WantToBeYours = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [countries, setCountries] = useState<ICountryData[]>([])

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm<WantToBeYoursFormType>({
    resolver: zodResolver(wantToBeYoursFormSchema),
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
  const handleSelectChoice = (value: ChangeEvent<HTMLSelectElement>) => {
    setValue("type", value.target.value)
  }

  const handleSubmitForm = async (data: WantToBeYoursFormType) => {
    try {
      setIsSubmitting(true)
      await axios.post("/mail/want-to-be-yours", {
        ...data,
        phone: `${data.countryCode} ${data.phone}`,
      })
      toast.success("Email enviado com sucesso")
      reset()
    } catch (error: any) {
      console.error(error)
      toast.error("Erro ao enviar o email")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setCountries(getCountryDataList())
  }, [])

  return (
    <>
      <Helmet>
        <title>Quero Ser Vosso | Overland</title>
        <meta
          name="description"
          content="Queres ser nosso parceiro, fornecedor ou cliente? Boa! Este é o
            ponto de partida. Preenche os campos abaixo e nós entraremos em
            contacto contigo."
        />
      </Helmet>
      <FadeInEffect>
        <main className="flex items-start flex-col justify-center w-full p-4 lg:w-[800px] lg:mx-auto ">
          <h1 className="my-12 font-Oswald md:text-3xl text-2xl">
            Queres ser nosso parceiro, fornecedor ou cliente? Boa! Este é o
            ponto de partida. Preenche os campos abaixo e nós entraremos em
            contacto contigo!
          </h1>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="w-full space-y-6"
          >
            <>
              <div className="p-2 border">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Nome"
                  className="border-none w-full md:text-base text-xs md:placeholder:text-base placeholder:text-xs outline-none bg-transparent"
                />
              </div>
              {errors.name && (
                <span className="text-xs text-red-600">
                  {errors.name?.message}
                </span>
              )}
            </>

            <div className="p-2 border">
              <select
                onChange={handleSelectCountry}
                className="border-none w-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
              >
                <option selected defaultValue={"Angola"}>
                  Angola
                </option>

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
                  type="text"
                  {...register("email")}
                  placeholder="Endereço de email"
                  className="border-none w-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
                />
              </div>
              {errors.email && (
                <span className="text-xs text-red-600">
                  {errors.email?.message}
                </span>
              )}
            </>

            <div className="flex w-full items-center gap-x-2">
              <select
                onChange={handleSelectCountryCode}
                className="p-3 bg-transparent border h-full w-[150px] md:text-base text-xs"
              >
                <option defaultValue={"+244"}>Angola (+244)</option>

                {countries.map((currentCountry, index) => (
                  <option
                    value={currentCountry.phone[0]}
                    key={index}
                    className="w-full flex items-center"
                  >
                    <p>(+{currentCountry.phone})</p>{" "}
                    <p>{currentCountry.name}</p>
                  </option>
                ))}
              </select>

              <div className="relative p-2 border w-full">
                <input
                  {...register("phone")}
                  placeholder="Número de telefone"
                  className="border-none w-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
                />
                {errors.phone && (
                  <span className="absolute right-2 -bottom-5 text-xs text-red-600">
                    {errors.phone?.message}
                  </span>
                )}
              </div>
            </div>
            <>
              <div className="p-2 border">
                <select
                  onChange={handleSelectChoice}
                  className="border-none w-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
                >
                  <option
                    disabled
                    selected
                    defaultValue={"Empresa ou particular"}
                  >
                    Empresa ou particular
                  </option>

                  <option value="empresa">Empresa</option>
                  <option value="particular">Particular</option>
                </select>
              </div>
              {errors.type && (
                <span className="text-xs text-red-600">
                  {errors.type?.message}
                </span>
              )}
            </>
            <div className="flex flex-col">
              <div className="p-2 border h-[180px]">
                <textarea
                  {...register("description")}
                  placeholder="Descreva que tipo de parceria gostaria de establecer connosco."
                  className="border-none resize-none w-full h-full outline-none bg-transparent md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
                />
              </div>
              {errors.description && (
                <span className="text-xs text-red-600">
                  {errors.description?.message}
                </span>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className="p-2 w-32 disabled:bg-zinc-400 bg-zinc-900 text-white uppercase md:text-base text-xs"
              type="submit"
            >
              {isSubmitting ? "Enviando..." : "Enviar "}
            </button>
          </form>
        </main>
      </FadeInEffect>
    </>
  )
}

export default WantToBeYours
