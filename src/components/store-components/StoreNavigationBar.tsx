import { useState } from "react"
import { NAV_LINKS } from "../../utils/constants"
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
      className={`fixed inset-0 z-20 flex-1 h-[70px] transition-all duration-75 ease-in ${
        !canChangeBackgroundColor ? "bg-transparent" : "bg-black"
      }`}
    >
      <nav className="w-full flex items-center justify-between px-12 py-4">
        <ul className="flex w-full mr-16 items-center justify-between">
          <Link to={"/"} className="relative w-[90px] h-[40px]">
            <img
              src="/new-banner.png"
              className="absolute w-full h-full inset-0 object-contain"
              alt=""
            />
          </Link>
          {NAV_LINKS.filter((link) => link.name != "Loja").map(
            (link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-white font-Poppins hover:border-b hover:border-white font-normal uppercase text-[16px] hover:text-white/20 duration-200 transition-all ease-in-out"
              >
                {link.name}
              </Link>
            )
          )}
        </ul>
        <ul className="gap-4 flex items-center justify-center text-white">
          <div>
            <CiSearch size={25} color="#FFF" />
          </div>
          <div>
            <CiShoppingCart size={25} color="#FFF" />
          </div>
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-colorGray-light/20">
            0
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default StoreNavigationBar
