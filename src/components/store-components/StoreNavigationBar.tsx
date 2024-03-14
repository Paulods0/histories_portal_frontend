import { useState } from "react"
import { NAV_LINKS } from "../../constants"
import { Link } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci"
import { CiSearch } from "react-icons/ci"

const StoreNavigationBar = () => {
  const [canChangeBackgroundColor, setCanChangeBackgroundColor] =
    useState(false)

  const changeBackgroundColor = () => {
    if (window.scrollY >= 60) {
      setCanChangeBackgroundColor(true)
    } else {
      setCanChangeBackgroundColor(false)
    }
  }

  window.addEventListener("scroll", changeBackgroundColor)

  return (
    <header
      className={`fixed inset-0 z-20 flex-1 h-[60px] transition-all duration-75 ease-in ${
        !canChangeBackgroundColor ? "bg-transparent" : "bg-black"
      }`}
    >
      <nav className="w-full flex items-center justify-between px-12 py-4">
        <ul className="flex w-full mr-16 items-center justify-between">
          <Link to={"/"} className="text-white">
            LOGO
          </Link>
          {NAV_LINKS.filter((link) => link.name != "Loja").map(
            (link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-white hover:text-white/20 duration-200 transition-all ease-in-out"
              >
                {link.name}
              </Link>
            )
          )}
        </ul>
        <ul className="gap-4 flex items-center justify-center text-white">
          <div>
            <CiShoppingCart size={25} color="#FFF" />
          </div>
          <div>
            <CiSearch size={25} color="#FFF" />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default StoreNavigationBar
