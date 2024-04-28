import StoreNavigationBar from "../components/store-components/store-navigation-bar"
import StoreCard from "../components/store-components/store-card"
import { Link, useLocation } from "react-router-dom"
import StoreFooter from "../components/store-components/store-footer"
// import PaginationController from "../components/pagination/pagination-controller"
// import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules"
import { storeSwiperImages } from "../constants"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import GoBackButton from "../components/go-back-button"
import { useGetProductCategories, useGetProduts } from "@/lib/react-query"
import { ClipLoader } from "react-spinners"

const Store = () => {
  const location = useLocation()
  const cat = new URLSearchParams(location.search).get("cat")
  // const [s, setS] = useSearchParams()
  const { data: products, isLoading: isProductsLoading } = useGetProduts()

  const { data: categories, isLoading: isCategoriesLoading } =
    useGetProductCategories()

  if (products?.length === 0) {
    return (
      <section className="w-full h-[300px] flex items-center justify-center">
        <h4>Não há produtos.</h4>
      </section>
    )
  }

  if (isProductsLoading || isCategoriesLoading) {
    return (
      <section className="w-full h-[300px] flex items-center justify-center">
        <ClipLoader />
      </section>
    )
  }

  // const [categoryName, setCategoryName] = useState(cat)

  // const [currentPage, setCurrentPage] = useState(1)
  // const postsPerPage = 12

  // const indexOfLastProduct = currentPage * postsPerPage
  // const indexOfFirstProduct = indexOfLastProduct - postsPerPage
  // const currentProduct = products?.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // )

  // const handleChangeSearchParams = (name: string) => {
  //   setCategoryName(name)
  // }

  return (
    <main className="relative font-Poppins h-screen flex flex-col w-full">
      <div className="relative">
        <StoreNavigationBar />
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          navigation
          loop={true}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay
          slidesPerView={1}
        >
          {storeSwiperImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt="hero-section-image"
                className="w-full h-screen object-cover scale-150 hover:scale-100 transition-all duration-200 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex items-center justify-center h-24 bg-black p-4">
          <div className="relative w-[100px] h-[120px]">
            <img
              src="/banner-3.png"
              className="absolute inset-0 w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>

        <section className="w-full flex py-4 px-8">
          <aside className="flex flex-col sticky top-16 h-full w-[150px]">
            <ul className="flex text-[14px] items-start flex-col gap-2 mt-3 justify-center">
              <h1 className="font-bold text-[16px]">Categorias:</h1>
              <li>
                <Link
                  className="underline p-2"
                  to=""
                  // onClick={() => handleChangeSearchParams("")}
                >
                  Ver todos
                </Link>
              </li>
              {categories?.map((category) => (
                <li key={category._id}>
                  <Link
                    to={`?cat=${category.name}`}
                    // onClick={() => handleChangeSearchParams(category.name)}
                    className={`${
                      category.name === cat
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

          <section className="w-full grid grid-cols-1 flex-[5] pl-2 border-l mb-12 md:grid-cols-2 mt-4 place-items-center lg:grid-cols-4 gap-8">
            {products?.map((product) => (
              <StoreCard key={product._id} product={product} />
            ))}
          </section>
          {/* <button onClick={() => setS("category=olá")}>CLICK ME</button> */}
        </section>

        <StoreFooter />
      </div>
      <GoBackButton />
    </main>
  )
}

export default Store
