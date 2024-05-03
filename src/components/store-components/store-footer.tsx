import { Link } from "react-router-dom"
import { NAV_LINKS, SOCIAL_MEDIA_LINKS } from "../../utils/constants"
import { sponsors } from "../../constants"
import NewsletterForm from "../footer/newsletter-form"

const StoreFooter = () => {
  return (
    <footer className="w-full bg-colorGray-medium flex mt-10 flex-col lg:flex-row p-8 lg:px-8 lg:py-2 font-Oswald lg:space-x-2">
      <div className="mx-auto w-full lg:w-[1600px] flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-x-4">
        <div className="text-white p-1 flex flex-col justify-center h-full w-full space-y-6 lg:space-y-1">
          <div className="w-full flex items-start justify-center flex-col">
            <h6 className="text-2xl lg:text-base font-normal uppercase">
              {" "}
              overland angola
            </h6>
          </div>
          <div>
            <p className="line-clamp-4 text-colorGray-light text-2xl lg:text-base leading-[23px]">
              A aventura começa aqui.
            </p>
          </div>

          <div className="relative self-start w-44 h-20 lg:w-20 lg:h-20">
            <img
              src="/logo/logotipo-texto.png"
              alt="logotipo"
              className="absolute w-full h-full object-contain"
            />
          </div>

          <div className="w-full flex flex-col items-start mt-2">
            <h2 className="font-normal text-white text-2xl lg:text-base mb-2 uppercase">
              segue-nos
            </h2>
            <div className="w-full flex justify-start gap-2">
              {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a
                  className="text-2xl lg:p-0 p-4 lg:text-base"
                  key={index}
                  href={link.link}
                  target="_blank"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <NewsletterForm />

        <div className="h-full border-zinc-900 p-3 w-full lg:w-[600px]">
          <div className="w-full flex flex-col gap-y-2 items-start">
            <h1 className="font-normal text-white text-2xl lg:text-base uppercase">
              navegação
            </h1>
            <ul className="text-colorGray-light flex flex-col text-2xl lg:text-base capitalize list-none">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-full p-3 flex flex-col ">
          <h1 className="text-2xl lg:text-base font-normal uppercase text-white mb-4">
            Patrocinadores
          </h1>

          <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 lg:place-items-start">
            {sponsors.map((img, i) => (
              <div
                key={i}
                className="w-[130px] h-[60px] lg:w-[50px] lg:h-[25px] relative"
              >
                <img
                  src={img}
                  className="absolute w-full h-full inset-0 object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-full p-3 w-full flex flex-col lg:ml-6 ">
          <h1 className="text-2xl lg:text-base font-normal uppercase text-white mb-4">
            instagram feed
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:place-items-center gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-[150px] h-[100px] lg:w-[70px] lg:h-[60px] gap-2 relative"
              >
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
