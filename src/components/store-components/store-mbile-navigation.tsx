import { RiMenu2Fill } from "react-icons/ri"
import StoreMobileMenu from "./store-mobile-menu"
import { Link } from "react-router-dom"

type Props = {}

const StoreMobileNavigation = ({}: Props) => {
  return (
    <header className="bg-colorGray-medium sticky top-0 z-50 flex lg:hidden w-full items-center justify-between">
      <section className="mx-8 w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src="/logo/logotipo-texto.png"
            alt="logotipo"
            className="h-14 w-20 object-contain"
            loading="lazy"
          />
        </Link>
        <StoreMobileMenu />
      </section>
    </header>
  )
}

export default StoreMobileNavigation
