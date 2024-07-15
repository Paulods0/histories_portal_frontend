import StoreNavigationBar from "../components/store-components/store-navigation-bar"
import StoreCard from "../components/store-components/store-card"
import StoreFooter from "../components/store-components/store-footer"
import GoBackButton from "../components/global/go-back-button"
import { useGetProduts } from "@/lib/react-query"
import { ClipLoader } from "react-spinners"
import StoreFilter from "@/components/store-components/store-filter"
import StoreSlider from "@/components/store-components/store-slider"
import StoreMobileNavigation from "@/components/store-components/store-mobile-navigation"
import { useSearchParams } from "react-router-dom"
import PaginationController from "@/components/pagination/pagination-controller"
import { memo, useMemo } from "react"
import { Helmet } from "react-helmet-async"

const MemoStoreCard = memo(StoreCard)

const Store = () => {
  const [filter, setFilter] = useSearchParams({
    page: "1",
    category: "",
  })

  const category = filter.get("category")!!
  const page = filter.get("page")!!

  const { data: products, isLoading: isProductsLoading } = useGetProduts(
    parseInt(page),
    category
  )

  const memoProducts = useMemo(() => {
    return products?.products.map((product) => (
      <MemoStoreCard product={product} key={product._id} />
    ))
  }, [products?.products])

  const handlePaginate = (newPage: number) => {
    setFilter((prev) => {
      prev.set("page", newPage.toString())
      return prev
    })
  }

  if (isProductsLoading) {
    return (
      <section className="w-full h-[300px] flex items-center justify-center">
        <ClipLoader />
      </section>
    )
  }

  return (
    <>
      <Helmet>
        <title>Loja Overland</title>
        <meta
          name="description"
          content="Encontre artigos de todos os tipo na nossa loja Overland"
        />
      </Helmet>

      <main className="relative font-Poppins h-screen flex flex-col w-full">
        <div className="relative">
          <>
            <StoreNavigationBar />
            <StoreMobileNavigation />
          </>

          <div className="hidden lg:flex">
            <StoreSlider />
          </div>

          <section className="relative w-full flex gap-10 flex-col lg:flex-row lg:py-4 lg:px-8">
            <StoreFilter urlQuery={category} setFilter={setFilter} />

            <section className="w-full grid grid-cols-1 flex-[5] pl-2 sm:grid-cols-3 border-l mb-12 mt-4 place-items-center lg:grid-cols-4 gap-8">
              {memoProducts?.length === 0 ? (
                <div className="lg:col-span-4 md:col-span-2 col-span-1">
                  <h1 className="text-center text-xl font-semibold">
                    Não há nada ainda.
                  </h1>
                </div>
              ) : (
                memoProducts
              )}
            </section>
          </section>
          <PaginationController
            pages={products!!.pages}
            paginate={handlePaginate}
          />

          <GoBackButton />
          <StoreFooter />
        </div>
      </main>
    </>
  )
}

export default Store
