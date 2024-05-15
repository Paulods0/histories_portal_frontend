import { RiMenu2Fill } from "react-icons/ri"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { NAV_LINKS, SOCIAL_MEDIA_LINKS } from "@/utils/constants"
import { Link } from "react-router-dom"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { useCart } from "@/context/cart-context"

// type Props = {}

const StoreMobileMenu = () => {
  const { cart } = useCart()
  return (
    <Sheet>
      <SheetTrigger asChild className="text-white text-3xl cursor-pointer">
        <RiMenu2Fill />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu Overland Angola</SheetTitle>
        </SheetHeader>
        <div className="w-full flex flex-col mt-4">
          <div className="relative uppercase font-bold bg-colorGray-dark/20 rounded-full p-2 w-fit self-end text-2xl">
            <Link to={"cart"}>
              <HiOutlineShoppingBag />
            </Link>
            <span className="absolute -top-3 right-0 text-base">{cart.length}</span>
          </div>
          <ul className="w-full text-xl uppercase space-y-4 mb-4">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="border-b flex items-center gap-1">
                <MdOutlineKeyboardArrowRight />
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center flex-col gap-2 mt-2 mx-auto w-full">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  className="flex font-bold uppercase items-center gap-1 text-black text-lg"
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default StoreMobileMenu
