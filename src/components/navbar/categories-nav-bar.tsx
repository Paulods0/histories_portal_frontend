import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import SubgroupNav from "./subgroup-nav"
import { CATEGORIES } from "@/constants"

const CategoriesNavBar = () => {
  const { pathname } = useLocation()

  if (pathname.includes("/pages/loja")) {
    return
  }

  const decodeURL = decodeURIComponent(pathname)

  return (
    <ul className="md:hidden bg-white z-[8888] hidden mb-0 list-disc sticky top-0 w-full shadow-md h-[60px]  lg:flex gap-12 items-center justify-between py-4">
      <div className="w-[1000px] mx-auto flex items-center justify-between">
        <li className="list-none">
          <Link
            to={"/"}
            className={`text-[15px] font-Oswald ${
              pathname === "/" ? "text-orangeColor" : "text-colorBlack-dark"
            } uppercase`}
          >
            home
          </Link>
        </li>
        {CATEGORIES?.map((category, index) => (
          <li
            key={index}
            className={`relative list-none py-6 ${
              category.label === "classificados"
                ? "group transition-all duration-200 ease-in-out"
                : ""
            }`}
          >
            {category.children ? (
              <button
                className={`text-[15px] font-Oswald uppercase ${
                  category.link === decodeURL ? "text-orangeColor" : ""
                } hover:text-orangeColor duration-100 transition-all ease-in `}
              >
                {category.label}
              </button>
            ) : (
              <Link
                to={category.link}
                className={`text-[15px] font-Oswald uppercase ${
                  category.link === decodeURL ? "text-orangeColor" : ""
                } hover:text-orangeColor duration-100 transition-all ease-in `}
              >
                {category.label}
              </Link>
            )}

            <SubgroupNav children={category.children} />
          </li>
        ))}
      </div>
    </ul>
  )
}

export default CategoriesNavBar
