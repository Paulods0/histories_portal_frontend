import { Link, useLocation } from "react-router-dom"
import { NAV_LINKS, SOCIAL_MEDIA_LINKS } from "../../utils/constants"
import Search from "../search/Search"
import ResponsiveNavigationBar from "./ResponsiveNavigationBar"

const Navbar = () => {
  const path = useLocation()

  // const isStore = path.pathname.includes("/pages/loja")
  // if (isStore) {
  //   return
  // }

  return (
    <header className="w-full">
      <div className="hidden md:hidden lg:flex w-full py-3 px-8 items-center bg-colorGray-medium justify-between">
        <nav className="h-full w-[720px] justify-between flex">
          <ul className="gap-3 flex items-center">
            <Link to={"/"} className="w-24 h-[25px] relative ">
              <img
                src="/logotipo-texto.png"
                alt=""
                className="w-full absolute h-[30px] object-cover"
              />
            </Link>
            <div className="flex gap-3 ml-2">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={index}
                  className={` ${
                    path.pathname === link.link ? "text-goldenColor" : "#FFF"
                  } text-white text-[12px] font-Oswald uppercase font-normal hover:text-goldenColor duration-100 transition-all ease-in`}
                  to={link.link}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </ul>

          <ul className="flex gap-3 items-center">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <Link key={index} to={`https://${link.link}`} target="_blank">
                {link.icon}
              </Link>
            ))}
          </ul>
        </nav>

        <Search />
      </div>
      <Link to={"/"} className="w-full h-full relative">
        <div className="w-full flex justify-center absolute top-4">
          <img
            src="/logotipo-tradicional.png"
            alt=""
            className="w-48 h-48 rounded-full "
          />
        </div>
        <img
          src={"/banner-2.jpg"}
          className="text-center object-cover text-white w-full h-60 flex items-center justify-center"
        />
      </Link>

      <div className="w-full ">
        <ResponsiveNavigationBar />
      </div>
    </header>
  )
}

export default Navbar
