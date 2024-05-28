import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import SubgroupNav from "./subgroup-nav"
import { CATEGORIES } from "@/constants"

const CategoriesNavBar = () => {
  const { pathname } = useLocation()

  if (pathname.includes("/pages/loja")) {
    return
  }

  const decodeURL = decodeURIComponent(pathname.split("/")[2])

  const handleNavigate = (slug: string) => {
    return `/categorias/${slug}`
  }

  return (
    <ul className="md:hidden z-[8888] hidden mb-0 list-disc sticky top-0 text-colorGray-light/30 w-full shadow-md h-[60px] bg-white lg:flex gap-12 items-center justify-between py-4">
      <div className="w-[1000px] mx-auto flex items-center justify-between">
        <li className="list-none">
          <Link
            to={"/"}
            className={`text-[15px] font-Oswald ${
              pathname === "/" ? "text-goldenColor" : "text-colorBlack-dark"
            } uppercase`}
          >
            home
          </Link>
        </li>
        {CATEGORIES?.map((category, index) => (
          <li
            key={index}
            className={`relative list-none py-3 ${
              category.label === "classificados"
                ? "group transition-all duration-200 ease-in-out"
                : ""
            }`}
          >
            <Link
              className={`text-[15px] font-Oswald text-colorBlack-dark uppercase ${
                category.link === decodeURL ? "text-goldenColor" : ""
              } hover:text-goldenColor duration-100 transition-all ease-in `}
              to={
                category.link !== "classificados"
                  ? handleNavigate(category.link)
                  : "/categorias/classificados"
              }
            >
              {category.label}
            </Link>

            <SubgroupNav />
          </li>
        ))}
      </div>
    </ul>
  )
}

export default CategoriesNavBar
