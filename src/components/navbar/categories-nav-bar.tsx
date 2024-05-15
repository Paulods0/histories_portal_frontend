import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useGetPostCategories } from "@/lib/react-query"
import SubgroupNav from "./subgroup-nav"

const CategoriesNavBar = () => {
  const { pathname } = useLocation()
  const { data: categories } = useGetPostCategories()

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
        {categories?.map((category, index) => (
          <li
            key={index}
            className={`relative list-none ${
              category.slug === "classificados"
                ? "group transition-all duration-200 ease-in-out"
                : ""
            }`}
          >
            <Link
              className={`text-[15px] font-Oswald text-colorBlack-dark uppercase ${
                category.slug === decodeURL ? "text-goldenColor" : ""
              } hover:text-goldenColor duration-100 transition-all ease-in `}
              to={
                category.slug !== "classificados"
                  ? handleNavigate(category.slug)
                  : "#"
              }
            >
              {category.name}
            </Link>

            <SubgroupNav slug={category.slug} />
          </li>
        ))}
      </div>
    </ul>
  )
}

export default CategoriesNavBar
