import StoreNavigationBar from "../components/store-components/store-navigation-bar"
import StoreCard from "../components/store-components/store-card"
import StoreFooter from "../components/store-components/store-footer"
import GoBackButton from "../components/global/go-back-button"
import { useGetProduts } from "@/lib/react-query"
import { ClipLoader } from "react-spinners"
import StoreFilter from "@/components/store-components/store-filter"
import StoreSlider from "@/components/store-components/store-slider"
import StoreMobileNavigation from "@/components/store-components/store-mbile-navigation"
import { useSearchParams } from "react-router-dom"

const Store = () => {
  const [filter, setFilter] = useSearchParams({
    page: "1",
    category: "",
    limit: "",
    price: "",
  })

  const category = filter.get("category")!!
  const page = filter.get("page")!!
  const limit = filter.get("limit")!!
  const price = filter.get("price")!!

  const { data: products, isLoading: isProductsLoading } = useGetProduts(
    parseInt(page),
    category,
    parseInt(limit)
  )

  if (isProductsLoading) {
    return (
      <section className="w-full h-[300px] flex items-center justify-center">
        <ClipLoader />
      </section>
    )
  }

  return (
    <main className="relative font-Poppins h-screen flex flex-col w-full">
      <div className="relative">
        <>
          <StoreNavigationBar />
          <StoreMobileNavigation />
        </>

        <div className="hidden lg:flex">
          <StoreSlider />
        </div>

        <div className="w-full hidden lg:flex items-center justify-center h-24 bg-black p-4">
          <div className="relative size-[90px]">
            <img
              src="/logo/logotipo-tradicional.png"
              className="absolute inset-0 w-full h-full object-contain"
              alt="imagem-loja"
            />
          </div>
        </div>

        <section className="relative w-full flex gap-10 flex-col lg:flex-row lg:py-4 lg:px-8">
          <StoreFilter
            price={price}
            urlQuery={category}
            setFilter={setFilter}
          />

          <section className="w-full grid grid-cols-1 flex-[5] pl-2 border-l mb-12 md:grid-cols-2 mt-4 place-items-center lg:grid-cols-4 gap-8">
            {products?.products.length === 0 ? (
              <div className="lg:col-span-4 md:col-span-2 col-span-1">
                <h1 className="text-center text-xl font-semibold">
                  Não há nada ainda.
                </h1>
              </div>
            ) : (
              products?.products?.map((product) => (
                <StoreCard key={product._id} product={product} />
              ))
            )}
          </section>
        </section>

        <GoBackButton />
        <StoreFooter />
      </div>
    </main>
  )
}

export default Store
