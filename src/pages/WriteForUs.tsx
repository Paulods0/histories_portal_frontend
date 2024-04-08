import { FormEvent, useEffect, useState } from "react"
import HomeCategoryControlller from "../components/home_category/HomeCategoryControlller"
import { ICountryData, getCountryDataList } from "countries-list"

{
  /* <HomeCategoryControlller label="Escreve para nós" /> */
}
const WriteForUs = () => {
  const [allCountries, setAllCountries] = useState<ICountryData[]>([])
  const [countryPhoneCode, setCountryPhoneCode] = useState<any>()
  const [country, setCountry] = useState("Angola")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [history, setHistory] = useState("")
  const [content, setContent] = useState("")

  const userInfo = {
    name: name,
    country: country,
    email: email,
    code: countryPhoneCode,
    phone: phone,
    history: history,
    content: content,
    file: "",
  }

  console.log(userInfo)

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
            placeholder="Contextualiza a sua história"
            className="border-none w-full outline-none bg-transparent"
          />
        </div>
        <div className="p-2 border h-[150px]">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Escreve"
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
  )
}

export default WriteForUs
