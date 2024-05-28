import { NAV_LINKS } from "../../utils/constants"
import { Link, useLocation } from "react-router-dom"
import Search from "../search/search"
import { useCartContext } from "../../context/cart-context"
import CartContainer from "./cart-container"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { Sheet, SheetTrigger } from "../ui/sheet"
// import StoreMobileNavigation from "./store-mbile-navigation"

const StoreNavigationBar = () => {
  const path = useLocation()
  const { cartQuantity, cartItems } = useCartContext()

  return (
    <header className="fixed inset-0 z-20 flex-1 h-[70px] transition-all duration-75 ease-in">
      <div className="hidden md:hidden lg:flex w-full py-3 px-8 items-center bg-colorGray-medium justify-between">
        <nav className="h-full w-[720px] justify-between flex">
          <ul className="gap-3 flex items-center">
            <Link to={"/"} className="w-24 h-[40px] relative ">
              <img
                loading="lazy"
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
        <div className="flex gap-3 items-center">
          <div className="mr-2">
            <Search />
          </div>
          <div className="relative flex items-center gap-2 transition-all duration-300">
            <div className="cursor-pointer ">
              <Sheet>
                <SheetTrigger>
                  <HiOutlineShoppingBag color="#FFF" size={20} />
                </SheetTrigger>
                <CartContainer />
              </Sheet>
            </div>

            <div className="w-3 h-3 items-center justify-center flex rounded-full bg-zinc-500/40 text-white text-[12px] p-3">
              {cartItems.length}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default StoreNavigationBar
