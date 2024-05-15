import { useGetProductCategories } from "@/lib/react-query"
import { SetURLSearchParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"

type Props = {
  setFilter: SetURLSearchParams
  urlQuery: string | null
}

const StoreCategoryFilter = ({ urlQuery, setFilter }: Props) => {
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetProductCategories()

  if (isCategoriesLoading) {
    return (
      <section className="w-full h-[300px] flex items-center justify-center">
        <ClipLoader />
      </section>
    )
  }

  const handleFilter = (category: string = "Todos") => {
    setFilter((prev) => {
      prev.set("filter", category)
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
              urlQuery === "Todos" || urlQuery === null
                ? "text-goldenColor"
                : ""
            } border-r-2 border-r-goldenColor pr-1 lg:border-none`}
            onClick={() => handleFilter("Todos")}
          >
            Ver todos
          </button>
        </li>
        {categories?.map((category) => (
          <li
            key={category._id}
            className={`lg:border-none border-r-2 border-r-goldenColor pr-1 ${
              urlQuery === category._id ? "text-goldenColor" : ""
            } `}
          >
            <button onClick={() => handleFilter(category._id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default StoreCategoryFilter
