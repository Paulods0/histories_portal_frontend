import { PRODUCT_CATEGORIES } from "@/constants"
import { SetURLSearchParams } from "react-router-dom"

type Props = {
  setFilter: SetURLSearchParams
  urlQuery: string | null
}

const StoreCategoryFilter = ({ urlQuery, setFilter }: Props) => {
  const handleFilter = (category: string = "Todos") => {
    setFilter((prev) => {
      prev.set("category", category)
      return prev
    })
  }

  return (
    <aside className="flex flex-col sticky z-10 lg:z-0 lg:h-full bg-white lg:top-16 w-full lg:w-[150px]">
      <ul className="flex text-[14px] p-4 lg:p-0 shadow-md lg:shadow-none lg:items-start items-center flex-row lg:flex-col gap-2 w-full lg:w-fit lg:mt-3 justify-center flex-wrap">
        <h1 className="font-bold hidden lg:flex text-[16px]">Categorias:</h1>
        <li>
          <button
            className={`${
              urlQuery === "" ? "text-goldenColor" : ""
            } border-r-2 border-r-goldenColor pr-1 lg:border-none`}
            onClick={() => handleFilter("")}
          >
            Ver todos
          </button>
        </li>
        {PRODUCT_CATEGORIES.map((category, index) => (
          <li
            key={index}
            className={`lg:border-none border-r-2 border-r-goldenColor pr-1 ${
              urlQuery === category.slug ? "text-goldenColor" : ""
            } `}
          >
            <button
              onClick={() => handleFilter(category.slug)}
              className="capitalize"
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default StoreCategoryFilter
