import { Link } from "react-router-dom"
import { SECOND_NAV_BAR_LINKS } from "../../constants"
import { useLocation } from "react-router-dom"

const CategoriesNavBar = () => {
  const path = useLocation()
  console.log(path.pathname)

  return (
    <ul className="md:hidden hidden w-full shadow-[0px_2px_8px_1px_#dcdcdc] mt-6 bg-white lg:flex gap-12 items-center justify-center py-6">
      {SECOND_NAV_BAR_LINKS.map((link, index) => (
        <Link
          className={`text-[14px] uppercase ${
            link.link === path.pathname ? "text-yellow-600" : ""
          } font-semibold hover:text-yellow-600 duration-100 transition-all ease-in`}
          key={index}
          to={link.link}
        >
          {link.name}
        </Link>
      ))}
    </ul>
  )
}

export default CategoriesNavBar
