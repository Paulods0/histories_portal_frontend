import { Link, useLocation } from "react-router-dom"
import { NAV_LINKS, SOCIAL_MEDIA_LINKS } from "../../constants"
import Search from "../search/Search"
import CategoriesNavBar from "./CategoriesNavBar"
import ResponsiveNavigationBar from "./ResponsiveNavigationBar"

const Navbar = () => {
  const path = useLocation()
  const isStore = path.pathname.includes("/pages/loja")
  if (isStore) {
    return
  }

  return (
    <header className="mb-12">
      <div className="hidden md:hidden lg:flex w-full py-3 px-12 items-center bg-[#272626] justify-between">
        <nav className="h-full w-[720px] justify-between flex">
          <ul className="gap-3 flex items-center">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                className={` ${
                  path.pathname === link.link ? "text-yellow-600/90" : ""
                } text-white text-[10px] uppercase font-semibold hover:text-yellow-600/90 duration-100 transition-all ease-in`}
                to={link.link}
              >
                {link.name}
              </Link>
            ))}
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

      <Link
        to={"/"}
        className="text-center text-white w-full h-36 bg-black flex items-center justify-center"
      >
        click me!
      </Link>

      <div className="w-full">
        <CategoriesNavBar />
        <ResponsiveNavigationBar />
      </div>
    </header>
  )
}

export default Navbar
