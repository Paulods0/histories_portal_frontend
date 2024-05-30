import { Link, useLocation } from "react-router-dom"
import NavbarTop from "./navbar-top"

const Navbar = () => {
  const { pathname } = useLocation()

  const isStore = pathname.includes("/pages/loja")
  if (isStore) {
    return
  }

  return (
    <header className="w-full">
      <NavbarTop />

      <Link to={"/"} className="w-full h-full relative">
        <div className="w-full flex justify-center absolute top-1/2 -translate-y-1/2">
          <img
            src="/logo/logotipo-tradicional.png"
            alt="logo-tipo"
            className="w-72 object-contain inset-0 rounded-full"
          />
        </div>

        <img
          loading="lazy"
          src={"/banners/banner-1.jpg"}
          className="text-center object-cover text-white w-full h-64 flex items-center justify-center"
        />
      </Link>
    </header>
  )
}

export default Navbar
