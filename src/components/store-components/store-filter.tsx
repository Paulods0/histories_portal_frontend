import { PRODUCT_CATEGORIES } from "@/constants"
import { ChangeEvent, useEffect, useState } from "react"
import { SetURLSearchParams } from "react-router-dom"

type Props = {
  setFilter: SetURLSearchParams
  urlQuery: string | null
  price: string
}

const StoreFilter = ({ price, urlQuery, setFilter }: Props) => {
  let formatedPrice = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "AKZ",
  }).format(Number(price))

  const handleFilter = (category: string = "Todos") => {
    setFilter((prev) => {
      prev.set("category", category)
      return prev
    })
  }

  const handleLimit = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setFilter((prev) => {
        prev.set("limit", e.target.value!!)
        return prev
      })
    }, 1000)
  }

  const handleFilterPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => {
      prev.set("price", e.target.value!!)
      return prev
    })
  }

  return (
    <aside className="flex flex-col sticky z-10 lg:z-0 lg:h-full bg-white lg:top-16 w-full lg:w-[150px]">
      <h1 className="text-lg font-bold uppercase">Filtros</h1>
      <div className="flex text-[14px] p-4 lg:p-0 shadow-md lg:shadow-none lg:items-start items-center flex-row lg:flex-col gap-2 w-full lg:w-fit lg:mt-3 justify-center flex-wrap">
        <div className="flex flex-col w-full border-b pb-2 gap-2">
          <h1 className="font-semibold hidden lg:flex text-base">Categoria</h1>
          <button
            className={`${
              urlQuery === "" ? "text-goldenColor" : ""
            } border-r-2 border-r-goldenColor text-left pr-1 lg:border-none`}
            onClick={() => handleFilter("")}
          >
            Ver todos
          </button>

          {PRODUCT_CATEGORIES.map((category, index) => (
            <li
              key={index}
              className={`lg:border-none flex items-center border-r-2 gap-2 border-r-goldenColor pr-1 ${
                urlQuery === category.slug ? "text-goldenColor" : ""
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
              <label className="capitalize" htmlFor={category.label}>
                {category.label}
              </label>
            </li>
          ))}
        </div>

        <div className="flex w-full border-b pb-2 flex-col gap-2">
          <h1 className="font-semibold hidden lg:flex text-base">Preço</h1>
          <div className="flex items-center flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <p className="text-xs">{formatedPrice}</p>
            </div>
            <input
              type="range"
              min={200}
              max={50000}
              onChange={handleFilterPrice}
            />
          </div>
        </div>

        <div className="flex w-fit border-b pb-2 flex-col gap-2">
          <h1 className="font-semibold hidden lg:flex text-base">Limite</h1>
          <input
            className="px-2 py-1 w-fit border outline-none"
            type="number"
            onChange={handleLimit}
            id="limit"
            min={1}
            max={12}
          />
        </div>
      </div>
    </aside>
  )
}

export default StoreFilter
