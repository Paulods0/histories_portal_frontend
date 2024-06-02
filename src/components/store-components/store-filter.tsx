import { PRODUCT_CATEGORIES } from "@/constants"

import { SetURLSearchParams } from "react-router-dom"

type Props = {
  setFilter: SetURLSearchParams
  urlQuery: string | null
}

const StoreFilter = ({ urlQuery, setFilter }: Props) => {
  const handleFilter = (category: string = "Todos") => {
    setFilter((prev) => {
      prev.set("category", category)
      return prev
    })
  }

  return (
    <aside className="flex flex-col border-b pb-6 top-14 sticky z-[999] mt-4 lg:mt-0 lg:z-0 lg:h-full bg-white lg:top-16 w-full lg:w-[150px]">
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-lg font-bold uppercase text-center my-6 lg:mb-0">
          Filtros
        </h1>

        <div className="lg:flex flex-col grid grid-cols-2 place-content-center mx-auto gap-4">
          <button
            className={`${
              urlQuery === "" ? "text-orangeColor" : ""
            } px-3 py-2 w-fit border rounded-lg text-center`}
            onClick={() => handleFilter("")}
          >
            Ver todos
          </button>

          {PRODUCT_CATEGORIES.map((category, index) => (
            <li
              key={index}
              className={`lg:border-none flex items-center lg:border-r-2 gap-2 border-r-orangeColor pr-1 ${
                urlQuery === category.slug ? "text-orangeColor" : ""
              } `}
            >
              <button
                onClick={() => handleFilter(category.slug)}
                className="capitalize  cursor-pointer border text-center rounded-lg px-2 py-2"
              >
                {category.label}
              </button>
            </li>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default StoreFilter
