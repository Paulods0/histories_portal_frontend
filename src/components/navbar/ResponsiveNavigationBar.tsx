import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import { SECOND_NAV_BAR_LINKS } from "../../constants"
import { Link } from "react-router-dom"
import Search from "../search/Search"

const ResponsiveNavigationBar = () => {
  const [isNavigationModalOpen, setisNavigationModalOpen] = useState(false)
  const openModal = () => {
    setisNavigationModalOpen(!isNavigationModalOpen)
  }
  return (
    <div className="lg:hidden items-center justify-between relative flex w-full bg-white p-6 shadow-[0px_2px_8px_1px_#dcdcdc] mt-0 h-16">
      <button onClick={openModal}>
        <IoMenu size={28} color="#8c6e3c" />
      </button>

      <button className="bg-black/80 p-4 rounded-md">
        <Search />
      </button>

      {isNavigationModalOpen && (
        <div className="w-full z-20 absolute inset-0 top-16 bg-white rounded-b-lg h-[350px] p-2 shadow-lg">
          <ul className="w-full h-full flex flex-col items-center justify-between">
            {SECOND_NAV_BAR_LINKS.map((link, index) => (
              <Link
                className="font-semibold text-[18px]"
                key={index}
                to={link.link}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ResponsiveNavigationBar
