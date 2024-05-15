import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import { Link } from "react-router-dom"
import Search from "../search/search"
import { useGetPostCategories } from "@/lib/react-query"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const ResponsiveNavigationBar = () => {
  const { data: categories } = useGetPostCategories()
  const [isNavigationModalOpen, setisNavigationModalOpen] = useState(false)
  const regex = /[\s\u0300-\u036f]/g

  const openModal = () => {
    setisNavigationModalOpen(!isNavigationModalOpen)
  }

  return (
    <div className="lg:hidden sticky shadow-md  top-0 items-center justify-between flex w-full bg-white p-6 mt-0 h-16">
      <Sheet>
        <SheetTrigger asChild>
          <span className="text-4xl">
            <IoMenu color="#8c6e3c" />
          </span>
        </SheetTrigger>

        <SheetContent>
          <img
            src="/logo/logotipo-texto.png"
            className="object-contain h-14 w-full"
          />
          <ul className="w-full bg-white gap-4 mt-8 flex flex-col items-start justify-between">
            {categories?.map((link) => (
              <li key={link._id} className="flex items-center gap-1">
                <MdOutlineKeyboardArrowRight />
                <SheetClose asChild>
                  <Link
                    className="font-semibold text-base md:text-lg uppercase"
                    to={`categorias/${link.slug}`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>

      <button className="bg-black/80 size-12 text-2xl p-2 rounded-md">
        <Search />
      </button>
    </div>
  )
}

export default ResponsiveNavigationBar
