import FadeInEffect from "@/components/motion/fade-in"
import { ICountryData, getCountryDataList } from "countries-list"
import { FormEvent, useEffect, useState } from "react"

const WantToBeYours = () => {
  const [allCountries, setAllCountries] = useState<ICountryData[]>([])
  const [countryPhoneCode, setCountryPhoneCode] = useState<any>()
  const [country, setCountry] = useState("Angola")
  const [phone, setPhone] = useState<number | string>()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [choice, setChoice] = useState("Particular")
  const [content, setContent] = useState("")

  const userInfo = {
    name,
    email,
    country,
    code: countryPhoneCode,
    phone,
    choice,
    content,
  }
  console.log(userInfo)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (
        !name ||
        !email ||
        phone ||
        !choice ||
        !content ||
        !country ||
        !countryPhoneCode
      ) {
        console.log("Por favor, preencha todos os campos obrigatórios.")
        return
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setAllCountries(getCountryDataList())
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
              <option disabled value="">
                Selecionar país
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
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Endereço de email"
              className="border-none w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex w-full items-center gap-x-2">
            <select
              onChange={(e) => setCountryPhoneCode(e.target.value)}
              className="p-2 bg-transparent border h-full w-[100px]"
            >
              {allCountries.map((currentCountry, index) => (
                <option
                  value={currentCountry.phone[0]}
                  key={index}
                  className="w-full flex items-center"
                >
                  <p>(+{currentCountry.phone})</p> <p>{currentCountry.name}</p>
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
          <div className="p-2 border">
            <select
              onChange={(e) => setChoice(e.target.value)}
              className="border-none w-full outline-none bg-transparent"
            >
              <option selected value={""} disabled>
                Empresa ou particular
              </option>
              <option value="Empresa">Empresa</option>
              <option value="Particular">Particular</option>
            </select>
          </div>
          <div className="p-2 border h-[150px]">
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              maxLength={500}
              placeholder="Descreva que tipo de parceria gostaria de establecer connosco."
              className="border-none resize-none w-full outline-none bg-transparent"
            ></textarea>
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

export default WantToBeYours
