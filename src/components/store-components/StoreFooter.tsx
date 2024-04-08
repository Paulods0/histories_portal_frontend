import { Link } from "react-router-dom"
import { NAV_LINKS, SOCIAL_MEDIA_LINKS } from "../../utils/constants"
import { sponsors } from "../../constants"
import { GoArrowUpRight } from "react-icons/go"
import { ClipLoader } from "react-spinners"
import { FormEvent, useState } from "react"
import { subscribeToNewsLetter } from "../../api"

const StoreFooter = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
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
    <footer className="w-full bg-colorGray-medium flex flex-col md:flex-col lg:flex-row p-8 lg:p-8 font-Oswald lg:space-x-16">
      <div className=" mx-auto w-[1200px] flex items-start justify-center gap-x-4">
        <div className="text-white p-3 flex flex-col items-self justify-start h-full w-full space-y-3">
          <div className="w-full">
            <h6 className="text-[18px] font-bold uppercase"> trend magazine</h6>
          </div>
          <div>
            <p className="line-clamp-4 text-colorGray-light text-[16px] leading-[23px]">
              Your guide to automotive adventure and outdoor lifestyle.
            </p>
          </div>
          <div className="relative w-24 h-full lg:w-36 lg:h-12">
            <img
              src="/logotipo-texto.png"
              alt="logotipo"
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="h-full p-3 w-full space-y-3">
          <h1 className="font-bold uppercase text-white text-[18px]">
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
                className="uppercase h-2 font-bold text-[16px]"
              >
                {isLoading ? (
                  <ClipLoader size={20} color="#FFF" />
                ) : (
                  <span>subscrever</span>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="h-full border-zinc-900 p-3 w-full">
          <div className="w-full flex flex-col gap-y-2 items-center lg:items-start">
            <h1 className="font-bold text-white text-[18px] uppercase">
              company
            </h1>
            <ul className="text-colorGray-light flex space-x-12 lg:space-x-0 lg:flex-col text-[18px] capitalize list-none">
              <li>contact</li>
              <li>advertise</li>
              <li>newsletter archive</li>
              <li>join our affiliate program</li>
            </ul>
            <div className="w-full flex flex-col items-center lg:items-start mt-2">
              <h2 className="font-bold text-white text-[16px] mb-2 uppercase">
                follow
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
        </div>

        <div className="h-full p-3 w-full flex flex-col ">
          <h1 className="text-[18px] font-bold uppercase text-white mb-4">
            instagram feed
          </h1>
          <div className="grid grid-cols-3 place-items-center gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="w-[70px] h-[70px] relative">
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

export default StoreFooter
