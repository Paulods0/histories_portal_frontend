import { FormEvent, useEffect, useState } from "react"
import { ICountryData, countries } from "countries-list"
import { getCountryDataList } from "countries-list"

const Subscribe = () => {
  const [allCountries, setAllCountries] = useState<ICountryData[]>([])
  const [country, setCountry] = useState("Angola")
  const [countryPhoneCode, setCountryPhoneCode] = useState<any>()
  const [phone, setPhone] = useState<number | string>()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const userInfo = {
    name: name,
    country: country,
    email: email,
    code: countryPhoneCode,
    phone: phone,
  }

  // console.log(userInfo)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (!name || !email || phone || !country || !countryPhoneCode) {
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
            
            {allCountries.map((country: any, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="p-2 border">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
  )
}

export default Subscribe
