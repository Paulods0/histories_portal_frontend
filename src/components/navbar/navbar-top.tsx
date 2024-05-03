import { NAV_LINKS } from "@/utils/constants"
import { Link, useLocation } from "react-router-dom"
import Search from "../search/search"

const NavbarTop = () => {
    const { pathname } = useLocation()
  return (
    <div className="hidden md:hidden lg:flex w-full py-3 px-8 items-center bg-colorGray-medium justify-between">
      <nav className="h-full w-[720px] justify-between flex">
        <ul className="gap-3 flex items-center">
          <Link to={"/"} className="w-24 h-[40px] relative ">
            <img
              src="/logo/logotipo-texto.png"
              alt="logotipo"
              className="w-full absolute h-full object-contain"
            />
          </Link>

          <div className="flex gap-3 ml-2">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                className={` ${
                  pathname === link.link ? "text-goldenColor" : "#FFF"
                } text-white text-[12px] font-Oswald uppercase font-normal hover:text-goldenColor duration-100 transition-all ease-in`}
                to={link.link}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </ul>
      </nav>

      <Search />
    </div>
  )
}

export default NavbarTop
