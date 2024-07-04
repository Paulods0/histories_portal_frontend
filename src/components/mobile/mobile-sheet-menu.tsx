import { CATEGORIES } from "@/constants"
import { NAV_LINKS } from "@/utils/constants"
import { FC, useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import ClassifiedMobileSubmenu from "./classified-mobile-submenu"
import { GoPlus } from "react-icons/go"
import { FiMinus } from "react-icons/fi"

type Props = {
  handleToggle: () => void
}

const MobileSheetMenu: FC<Props> = ({ handleToggle }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  function handleSubmenuOpen() {
    setIsSubmenuOpen((prev) => !prev)
  }

  return (
    <div className="fixed top-0 right-0 flex items-start bg-white h-full w-full z-40 ">
      <button
        onClick={handleToggle}
        className="absolute top-4 right-4 text-4xl text-orangeColor"
      >
        <IoCloseOutline />
      </button>
      <div className="flex flex-col items-start h-full w-full overflow-y-auto">
        <ul className="p-6 space-y-2 font-Oswald font-normal w-full">
          {CATEGORIES.map((category, index) => (
            <li key={index} className={`w-full py-2 ${index !== CATEGORIES.length -1 ? "border-b" : null}`}>
              {category.children ? (
                <div className="flex flex-col gap-2 items-start">
                  <button
                    className="text-2xl capitalize flex items-center gap-1"
                    onClick={handleSubmenuOpen}
                  >
                    {category.label}
                    {isSubmenuOpen ? <FiMinus /> : <GoPlus />}
                  </button>
                  {isSubmenuOpen && (
                    <ClassifiedMobileSubmenu
                      handleToggle={handleToggle}
                      category={category}
                    />
                  )}
                </div>
              ) : (
                <Link
                  onClick={handleToggle}
                  className="text-2xl capitalize"
                  to={category.link}
                >
                  {category.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <hr className="w-full bg-orangeColor h-[1px]" />
        <ul className="p-6 space-y-2 font-Oswald font-normal w-full">
          {NAV_LINKS.map((link, index) => (
            <li
              key={index}
              className={`py-2 ${
                index !== NAV_LINKS.length - 1 ? "w-full border-b" : null
              }`}
            >
              <Link
                to={link.link}
                className="text-2xl capitalize flex items-center gap-1"
                onClick={handleSubmenuOpen}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileSheetMenu
