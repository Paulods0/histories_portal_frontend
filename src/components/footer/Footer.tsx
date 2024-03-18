import { Link, useLocation } from "react-router-dom"
import { SOCIAL_MEDIA_LINKS } from "../../utils/constants"
import { RiArrowUpDoubleLine } from "react-icons/ri"

const Footer = () => {
  const path = useLocation()
  const isStore = path.pathname.includes("/pages/loja")
  if (isStore) {
    return
  }

  return (
    <footer className="flex-1 mt-12 bg-black/80 flex flex-col items-center justify-between">
      <div className="my-3 w-full h-[50px] justify-center gap-3 lg:gap-8 flex items-center flex-wrap ">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <Link
            to={link.link}
            key={index}
            className="flex mr-2 lg:mg-8 justify-center group items-center"
          >
            <span className=" p-2 flex group-hover:bg-yellow-600 group-hover:border-yellow-600 duration-200 transition-all items-center justify-center border border-[1px_solid_#FFF]">
              {link.icon}
            </span>

            <span className="hidden lg:block font-semibold uppercase text-[14px] text-white ml-4 group-hover:text-yellow-600 duration-300 transition-all">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="w-full h-[250px] flex flex-col items-center justify-center bg-black/30 ">
        <div className="w-full h-full flex items-center justify-center relative">
          <img
            src="/logotipo-texto.png"
            className="text-white w-[450px] h-[200px] absolute object-cover"
          />
        </div>
        <div className="cursor-pointer uppercase font-semibold text-sm text-yellow-600 flex flex-col items-center justify-center p-4">
          {/* <RiArrowUpDoubleLine size={24} color="##ca8a04" />
          <button onClick={() => window.scrollTo(0, 0)}>back to top</button> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
