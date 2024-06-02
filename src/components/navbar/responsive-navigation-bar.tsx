import Search from "../search/search"
import { IoMenu } from "react-icons/io5"
import { CATEGORIES } from "@/constants"
import { NAV_LINKS } from "@/utils/constants"
import { Link, useLocation } from "react-router-dom"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const ResponsiveNavigationBar = () => {
  const location = useLocation()

  if (location.pathname.includes("/pages/loja")) {
    return
  }

  return (
    <div className="lg:hidden sticky shadow-md  top-0 items-center justify-between flex w-full bg-white p-6 mt-0 h-16">
      <Search />
      
      <Sheet>
        <SheetTrigger asChild>
          <span className="text-4xl text-orangeColor">
            <IoMenu />
          </span>
        </SheetTrigger>

        <SheetContent>
          <ul className="w-full bg-white gap-4 mt-2 flex flex-col items-start justify-between">
            {CATEGORIES.map((link, index) => (
              <li key={index} className="flex items-center gap-1">
                <MdOutlineKeyboardArrowRight />
                <SheetClose asChild>
                  <Link
                    className="font-semibold text-xs md:text-lg uppercase"
                    to={`categorias/${link.link}`}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
          <hr className="w-full h-[1px] my-2 bg-orangeColor" />
          <ul className="w-full bg-white gap-4 flex flex-col items-start justify-between">
            {NAV_LINKS?.map((link, index) => (
              <li key={index} className="flex items-center gap-1">
                <MdOutlineKeyboardArrowRight />
                <SheetClose asChild>
                  <Link
                    className="font-semibold text-xs md:text-lg uppercase"
                    to={`${link.link}`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
          <img
            src="/logo/logotipo-tradicional.png"
            className="object-contain h-32 w-full mt-12"
          />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default ResponsiveNavigationBar
