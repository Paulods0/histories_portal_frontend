import MobileMenuButton from "../mobile/mobile-menu-button"
import StoreMobileCart from "./store-mobile-cart"
import { Link } from "react-router-dom"

const StoreMobileNavigation = () => {
  return (
    <header className="bg-blueColor sticky top-0 z-50 flex lg:hidden w-full items-center justify-between">
      <section className="mx-8 w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src="/logo/logotipo-texto.png"
            alt="logotipo"
            className="h-20 w-28 object-contain"
            loading="lazy"
          />
        </Link>
        <div className="flex items-center gap-4">
          <StoreMobileCart />
          <MobileMenuButton />
        </div>
      </section>
    </header>
  )
}

export default StoreMobileNavigation
