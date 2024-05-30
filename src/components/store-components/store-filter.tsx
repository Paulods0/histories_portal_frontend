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
    <aside className="flex flex-col sticky z-10 lg:z-0 lg:h-full bg-white lg:top-16 w-full lg:w-[150px]">
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-lg font-bold uppercase">Filtros</h1>
        <button
          className={`${
            urlQuery === "" ? "text-orangeColor" : ""
          } border-r-2 border-r-orangeColor text-left pr-1 lg:border-none`}
          onClick={() => handleFilter("")}
        >
          Ver todos
        </button>

        {PRODUCT_CATEGORIES.map((category, index) => (
          <li
            key={index}
            className={`lg:border-none flex items-center border-r-2 gap-2 border-r-orangeColor pr-1 ${
              urlQuery === category.slug ? "text-orangeColor" : ""
            } `}
          >
            <input
              type="radio"
              name={"category"}
              checked={urlQuery === category.slug}
              onChange={() => handleFilter(category.slug)}
              className="capitalize"
              id={category.label}
            />
            <label
              className="capitalize  cursor-pointer"
              htmlFor={category.label}
            >
              {category.label}
            </label>
          </li>
        ))}
      </div>
      {/* </div> */}
    </aside>
  )
}

export default StoreFilter
