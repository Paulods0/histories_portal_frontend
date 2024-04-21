import { Link, useLocation } from "react-router-dom"
import { NAV_LINKS } from "../../utils/constants"
import Search from "../search/search"
import ResponsiveNavigationBar from "./responsive-navigation-bar"

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
            <Link to={"/"} className="w-24 h-[28px] relative ">
              <img
                src="/banner-3.png"
                alt=""
                className="w-full absolute h-[38px] object-contain"
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
        </nav>

        <Search />
      </div>
      <Link to={"/"} className="w-full h-full relative">
        {/* <div className="w-full flex justify-center absolute top-4">
          <img
            src="/logotipo-tradicional.png"
            alt=""
            className="w-48 h-48 rounded-full "
          />
        </div> */}
        <img
          src={"/banner-1.png"}
          className="text-center object-cover text-white w-full h-72 flex items-center justify-center"
        />
      </Link>

      <div className="w-full ">
        <ResponsiveNavigationBar />
      </div>
    </header>
  )
}

export default Navbar
