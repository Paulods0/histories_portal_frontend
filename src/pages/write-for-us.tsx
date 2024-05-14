import { FormEvent, useEffect, useState } from "react"
import { ICountryData, getCountryDataList } from "countries-list"
import FadeInEffect from "@/components/motion/fade-in"
// import { z } from "zod"

// const formSchema = z.object({
//   country: z.string(),
//   phone: z.string(),
//   name: z.string(),
//   email: z.string().email(),
//   content: z.string().email(),
//   history: z.string().email(),
// })

const WriteForUs = () => {
  const [allCountries, setAllCountries] = useState<ICountryData[]>([])
  const [countryPhoneCode, setCountryPhoneCode] = useState<any>()
  const [country, setCountry] = useState("Angola")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [history, setHistory] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (
        !name ||
        !email ||
        phone ||
        !content ||
        !country ||
        !countryPhoneCode
      ) {
        return
      }
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
        <form onSubmit={handleSubmit} className="w-[60%] p-4 space-y-4">
          <div className="p-2 border">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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

              {allCountries.map((currentCountry: any, index) => (
                <option key={index} value={currentCountry.name}>
                  {currentCountry.name}
                </option>
              ))}
            </select>
          </div>
          <div className="p-2 border">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Endereço de email"
              className="border-none w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex w-full items-center gap-x-2">
            <select
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
                  <p>{country.name}</p>
                  <p>(+{country.phone})</p>
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
          <div className="p-2 border h-[150px]">
            <input
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              type="text"
              placeholder="Contextualiza a sua história (limite máximo de caracteres 400)"
              className="border-none w-full outline-none bg-transparent"
            />
          </div>
          <div className="p-2 border h-[150px]">
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
              placeholder="Escreve (limite máximo de caracteres 400)"
              className="border-none w-full outline-none bg-transparent"
            />
          </div>
          <div className="p-2 border ">
            <input
              id="file"
              type="file"
              className="border-none w-full outline-none bg-transparent"
            />
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

export default WriteForUs
