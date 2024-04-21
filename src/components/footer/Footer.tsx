import { Link, useLocation } from "react-router-dom"
import { NAV_LINKS, SOCIAL_MEDIA_LINKS } from "../../utils/constants"
// import { RiArrowUpDoubleLine } from "react-icons/ri"
// import GoBackButton from "../GoBackButton"
import { GoArrowUpRight } from "react-icons/go"
import { sponsors } from "../../constants"
import { FormEvent, useState } from "react"
import { subscribeToNewsLetter } from "../../api"
import { ClipLoader } from "react-spinners"

const Footer = () => {
  const path = useLocation()
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const isStore =
    path.pathname.includes("/pages/loja") ||
    path.pathname.includes("/unsubscribe/")
  if (isStore) {
    return
  }
  const resetInputs = () => {
    setUserName("")
    setEmail("")
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await subscribeToNewsLetter(email, userName)
    setIsLoading(false)
    resetInputs()
  }

  return (
    <footer className="w-full bg-colorGray-medium flex mt-10 flex-col md:flex-col lg:flex-row p-8 lg:p-8 font-Oswald lg:space-x-2">
      <div className=" mx-auto w-[1600px] flex items-start justify-center gap-x-4">

        <div className="text-white p-1 flex flex-col justify-center h-full w-full space-y-3">
          <div className="w-full flex items-start justify-center flex-col">
            <h6 className="text-[16px] font-normal uppercase">
              {" "}
              overland angola
            </h6>
          </div>
          <div>
            <p className="line-clamp-4 text-colorGray-light text-[16px] leading-[23px]">
              A aventura começa aqui.
            </p>
          </div>

          <div className="relative self-start w-12 h-full lg:w-20 lg:h-20">
            <img
              src="/banner-2.png"
              alt="logotipo"
              className="absolute w-full h-full object-cover"
            />
          </div>

          <div className="w-full flex flex-col items-center lg:items-start mt-2">
            <h2 className="font-normal text-white text-[16px] mb-2 uppercase">
              segue-nos
            </h2>
            <div className="w-full flex justify-center lg:justify-start gap-2">
              {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <Link key={index} to={link.link}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="h-full p-3 w-full space-y-3">
          <h1 className="font-normal uppercase text-white text-[16px]">
            subscrever à newsletter
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col pr-8 items-center justify-center"
          >
            <div className="border-b border-l border-b-white w-full p-2">
              <input
                type="text"
                placeholder="Nome"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="border-none placeholder:text-white text-white outline-none bg-transparent w-full h-full"
              />
            </div>
            <div className="border-b border-l border-b-white w-full p-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border-none placeholder:text-white text-white outline-none bg-transparent w-full h-full"
              />
            </div>

            <div className="text-white flex items-start mt-3 w-full h-full hover:text-white/60 duration-200 transition-all ease-linear">
              <button
                type="submit"
                className="uppercase h-2 border border-white px-3 py-4 flex items-center justify-center font-normal text-[16px]"
              >
                {isLoading ? (
                  <ClipLoader size={20} color="#FFF" />
                ) : (
                  "subscrever"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="h-full border-zinc-900 p-3 w-[600px]">
          <div className="w-full flex flex-col gap-y-2 items-center lg:items-start">
            <h1 className="font-normal text-white text-[16px] uppercase">
              navegação
            </h1>
            <ul className="text-colorGray-light flex space-x-12 lg:space-x-0 lg:flex-col text-[16px] capitalize list-none">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-full p-3 w-full flex flex-col ">
          <h1 className="text-[16px] font-normal uppercase text-white mb-4">
            Patrocinadores
          </h1>
          <div className="grid grid-cols-2 place-items-center gap-4">
            {sponsors.map((img, i) => (
              <div key={i} className="w-[100px] h-[30px] relative">
                <img
                  src={img}
                  className="absolute w-full h-full inset-0 object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-full p-3 w-full flex flex-col ml-6 ">
          <h1 className="text-[16px] font-normal uppercase text-white mb-4">
            instagram feed
          </h1>
          <div className="grid grid-cols-3 place-items-center gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-[70px] h-[60px] gap-2 relative">
                <img
                  src={`/${i + 1}.jpg`}
                  className="absolute w-full h-full inset-0 object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
