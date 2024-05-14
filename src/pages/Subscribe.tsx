import { useEffect, useState } from "react"
import { ICountryData } from "countries-list"
import { getCountryDataList } from "countries-list"
import FadeInEffect from "@/components/motion/fade-in"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  country: z.string(),
  phone: z.string(),
  name: z.string(),
  email: z.string().email(),
})

type FormSchemaType = z.infer<typeof formSchema>

const Subscribe = () => {
  const [allCountries, setAllCountries] = useState<ICountryData[]>([])

  const { handleSubmit, register } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const [phone, setPhone] = useState<number | string>()
  const [country, setCountry] = useState("")
  const [countryPhoneCode, setCountryPhoneCode] = useState<any>()

  const handleSubmitForm = async (data: FormSchemaType) => {
    try {
      console.log(data)
      return
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setAllCountries(getCountryDataList())
    const defaultCountry = getCountryDataList().find(
      (country) => country.name === "Angola"
    )

    if (defaultCountry) {
      setCountry(defaultCountry.name)
      setCountryPhoneCode(defaultCountry.phone)
    }
  }, [])

  return (
    <FadeInEffect>
      <main className="w-full flex items-start justify-center">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="lg:w-[60%]  w-full p-4 space-y-4"
        >
          <div className="p-2 border">
            <input
              {...register("name")}
              type="text"
              placeholder="Nome"
              className="border-none w-full outline-none bg-transparent"
            />
          </div>

          <div className="p-2 border">
            <select
              onChange={(e) => setCountry(e.target.value)}
              className="border-none w-full outline-none bg-transparent"
            >
              <option selected disabled defaultValue={country}>
                {country}
              </option>

              {allCountries.map((country: any, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className="p-2 border">
            <input
              {...register("email")}
              type="email"
              placeholder="Endereço de email"
              className="border-none w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex w-full items-center gap-x-2">
            <select
              value={countryPhoneCode}
              onChange={(e) => setCountryPhoneCode(e.target.value)}
              className="p-2 bg-transparent border h-full w-[100px]"
            >
              <option defaultValue={countryPhoneCode} disabled selected>
                {`(+${countryPhoneCode}) ${country}`}
              </option>

              {allCountries.map((country, index) => (
                <option
                  value={country.phone[0]}
                  key={index}
                  className="w-full flex items-center gap-x-2"
                >
                  <p>(+{country.phone})</p>
                  <p>{country.name}</p>
                </option>
              ))}
            </select>

            <div className="p-2 border w-full">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Número de telefone"
                className="border-none w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <button
            className="p-2 w-32 bg-zinc-900 text-white uppercase"
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
