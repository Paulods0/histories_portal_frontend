import Search from "../search/search"
import { useLocation } from "react-router-dom"

import MobileMenuButton from "../mobile/mobile-menu-button"

const MobileMenu = () => {
  const location = useLocation()

  if (location.pathname.includes("/pages/loja")) {
    return
  }

  return (
    <div className="lg:hidden sticky shadow-md  top-0 items-center justify-between flex w-full bg-white p-6 mt-0 h-16">
      <Search />
      <MobileMenuButton />
    </div>
  )
}

export default MobileMenu
{
  /* <Sheet>
        <SheetTrigger asChild>
          <span className="text-4xl text-orangeColor">
            <IoMenu />
          </span>
        </SheetTrigger>

        <SheetContent>
          <div className="flex flex-col gap-1 items-start">
            <ul className="space-y-2">
              {CATEGORIES.map((category, index) => (
                <li key={index} className="flex flex-col">
                  <Link
                    to={category.link ? `/categorias/${category.link}` : "#"}
                    onClick={category.children ? handleToggle : () => {}}
                    className="flex items-center gap-1 text-xl capitalize"
                  >
                    <MdOutlineKeyboardArrowRight />
                    {category.label}
                  </Link>
                  {category.children && (
                    <AnimatePresence mode="wait">
                      {open && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex ml-8 flex-col gap-1"
                        >
                          {category.children.map((child, index) => (
                            <Link key={index} to={child.link}>
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
            <ul></ul>
          </div>
        </SheetContent>
      </Sheet> */
}
