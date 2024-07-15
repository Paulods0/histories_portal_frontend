import { ChangeEvent, useEffect, useState } from "react"
import { ICountryData, getCountryDataList } from "countries-list"
import FadeInEffect from "@/components/motion/fade-in"
import { WriteForUsFormType, writeForUsSchemaType } from "@/lib/validation"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LuImagePlus } from "react-icons/lu"
import { toast } from "react-toastify"
import axios from "@/config/axios"
import { uploadImageToFirebaseStorage } from "@/utils/helpers"

const WriteForUs = () => {
  const [countries, setCountries] = useState<ICountryData[]>([])

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
    control,
  } = useForm<WriteForUsFormType>({
    resolver: zodResolver(writeForUsSchemaType),
    defaultValues: {
      country: "Angola",
      countryCode: "244",
    },
  })

  const { append, remove, fields } = useFieldArray({
    control,
    name: "images",
  })

  function addImages() {
    if (fields.length < 3) {
      append({
        image: undefined,
      })
    }
  }
  function removeImage(index: number) {
    remove(index)
  }

  const handleSelectCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue("country", e.target.value)
  }

  const handleSelectCode = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue("countryCode", e.target.value)
  }

  const handleSubmitForm = async (data: WriteForUsFormType) => {
    let images: string[] = []
    for (let image of data.images!!) {
      images.push(
        await uploadImageToFirebaseStorage(image.image!!, "write-for-us")
      )
    }
    await axios.post("/mail/write-for-us", {
      ...data,
      phone: `+${data.countryCode} ${data.phone}`,
      images: images,
    })
    toast.success("Enviado com sucesso!")
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
      <main className="flex items-start flex-col justify-center w-full p-4 lg:w-[800px] lg:mx-auto ">
        <h1 className="my-12 font-Oswald md:text-3xl text-2xl text-justify">
          Partilha a tua aventura overland! Conta a tua história e inspira
          outros exploradores! Escreve sobre o teu passeio overland, paisagens e
          momentos inesquecíveis. Adiciona fotos, dicas e detalhes para tornar a
          narrativa envolvente. Daremos os devidos créditos e publicaremos o teu
          conteúdo.
        </h1>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="space-y-6 w-full"
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
            <div className="p-2 border h-[150px] w-full">
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

          <div className="w-full justify-start flex">
            <button
              type="button"
              className="text-colorBlack text-xl hover:text-zinc-400 duration-200 transition-all bg-zinc-300 p-4 rounded-lg"
              onClick={addImages}
            >
              <LuImagePlus />
            </button>
          </div>
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col w-full gap-2 items-end">
              <button
                type="button"
                className="w-fit text-red-600 hover:underline duration-300 transition-all"
                onClick={() => removeImage(index)}
              >
                Remover
              </button>
              <input
                type="file"
                key={field.id}
                {...register(`images.${index}.image`)}
                className="w-full file:bg-white file:border-none px-3 py-2 border md:file:text-base file:text-xs outline-none bg-transparent file:font-semibold file:capitalize text-orangeColor cursor-pointer"
              />
            </div>
          ))}
          {errors.images && (
            <span className="text-xs text-red-600">
              {errors.images.message}
            </span>
          )}

          <button
            disabled={isSubmitting}
            className="p-2 w-32 bg-zinc-900 text-white uppercase md:placeholder:text-base placeholder:text-xs md:text-base text-xs"
            type="submit"
          >
            {isSubmitting ? "Submetendo..." : "Enviar"}
          </button>
        </form>
      </main>
    </FadeInEffect>
  )
}

export default WriteForUs
