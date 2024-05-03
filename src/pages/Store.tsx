import StoreNavigationBar from "../components/store-components/store-navigation-bar"
import StoreCard from "../components/store-components/store-card"
import StoreFooter from "../components/store-components/store-footer"
import GoBackButton from "../components/go-back-button"
import { useGetProduts } from "@/lib/react-query"
import { ClipLoader } from "react-spinners"
import StoreCategoryFilter from "@/components/store-components/store-category-filter"
import StoreSlider from "@/components/store-components/store-slider"

const Store = () => {
  const { data: products, isLoading: isProductsLoading } = useGetProduts()

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
        
        <StoreNavigationBar />
        <StoreSlider />

        <div className="w-full flex items-center justify-center h-24 bg-black p-4">
          <div className="relative size-[90px]">
            <img
              src="/logo/logotipo-tradicional.png"
              className="absolute inset-0 w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>

        <section className="w-full flex py-4 px-8">
          <StoreCategoryFilter />
          <section className="w-full grid grid-cols-1 flex-[5] pl-2 border-l mb-12 md:grid-cols-2 mt-4 place-items-center lg:grid-cols-4 gap-8">
            {products?.length === 0 ? (
              <h1 className="text-center text-xl font-semibold">
                Não há nada ainda.
              </h1>
            ) : (
              products?.map((product) => (
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
