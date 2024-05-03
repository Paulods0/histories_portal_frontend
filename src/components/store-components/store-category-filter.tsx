import { useGetProductCategories } from "@/lib/react-query"
import { Link, useLocation } from "react-router-dom"
import { ClipLoader } from "react-spinners"

const StoreCategoryFilter = () => {
  const location = useLocation()
  const c = new URLSearchParams(location.search).get("categoria")

  const { data: categories, isLoading: isCategoriesLoading } =
    useGetProductCategories()

  if (isCategoriesLoading) {
    return (
      <section className="w-full h-[300px] flex items-center justify-center">
        <ClipLoader />
      </section>
    )
  }

  const handleChangeSearchParams = (category?: string) => {
    console.log("handleChangeSearchParams ~ category", category)
  }

  return (
    <aside className="flex flex-col sticky top-16 h-full w-[150px]">
      <ul className="flex text-[14px] items-start flex-col gap-2 mt-3 justify-center">
        <h1 className="font-bold text-[16px]">Categorias:</h1>
        <li>
          <button className="underline p-2" onClick={() => {}}>
            Ver todos
          </button>
        </li>
        {categories?.map((category) => (
          <li key={category._id}>
            <Link
              to={`?categoria=${category.name}`}
              onClick={() => {}}
              className={`${
                category.name === c
                  ? "bg-colorGray-light text-white rounded-md"
                  : ""
              } px-2 py-1`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default StoreCategoryFilter
