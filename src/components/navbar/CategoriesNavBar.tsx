import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAllCategories } from "../../api"
import { ICategoryData } from "../../api/types"

const CategoriesNavBar = () => {
  const path = useLocation()

  const [categories, setCategories] = useState<ICategoryData[]>()
  const regex = /[\s\u0300-\u036f]/g
  const decodeURL = decodeURIComponent(path.pathname.split("/")[2])

  useEffect(() => {
    const fecthCategories = async () => {
      try {
        const data = await getAllCategories()
        setCategories(data)
      } catch (error) {}
    }
    fecthCategories()
  }, [])

  return (
    <ul className="md:hidden z-[999] hidden mb-0 list-disc sticky top-0 text-colorGray-light/30 w-full shadow-md h-[60px]  bg-white lg:flex gap-12 items-center justify-between py-4">
      <div className="w-[1000px] mx-auto flex items-center justify-between">
        <li className="list-none">
          <Link
            to={"/"}
            className={`text-[15px] font-Oswald ${
              path.pathname === "/"
                ? "text-goldenColor"
                : "text-colorBlack-dark"
            } uppercase`}
          >
            home
          </Link>
        </li>
        {categories?.map((link, index) => (
          <li key={index}>
            <Link
              className={`text-[15px] font-Oswald text-colorBlack-dark uppercase ${
                link.name.normalize("NFD").replace(regex, "").toLowerCase() ===
                decodeURL
                  ? "text-goldenColor"
                  : ""
              } hover:text-goldenColor duration-100 transition-all ease-in`}
              to={`/categorias/${link.name
                .normalize("NFD")
                .replace(regex, "")
                .toLowerCase()}?id=${link._id}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </div>
    </ul>
  )
}

export default CategoriesNavBar
