import StoreNavigationBar from "../components/store-components/store-navigation-bar"
import StoreCard from "../components/store-components/store-card"
import { Link, useLocation } from "react-router-dom"
import StoreFooter from "../components/store-components/store-footer"
import PaginationController from "../components/pagination/pagination-controller"
import { useEffect, useState } from "react"
import {
  getAllProducts,
  getAllProductsByCategory,
  getAllProdutCategories,
} from "../api"
import { ICategoryData, IProductData } from "../api/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules"
import { storeSwiperImages } from "../constants"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { useCart } from "../context/cart-context"
import GoBackButton from "../components/go-back-button"

const Store = () => {
  const location = useLocation()
  const cat = new URLSearchParams(location.search).get("cat")

  const [products, setProducts] = useState<IProductData[]>([])
  const [categories, setCategories] = useState<ICategoryData[]>([])
  const [categoryName, setCategoryName] = useState(cat)

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 12

  const { cart } = useCart()

  const indexOfLastProduct = currentPage * postsPerPage
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct)

  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleChangeSearchParams = (name: string) => {
    setCategoryName(name)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProdutCategories()
      setCategories(data)
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data
        if (categoryName) {
          data = await getAllProductsByCategory(categoryName)
          setProducts(data)
        } else {
          data = await getAllProducts()
          setProducts(data)
        }
      } catch (error) {}
    }

    fetchData()
  }, [categoryName])
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
                className="w-full h-screen object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex items-center justify-center h-24 bg-black p-4">
          <div className="relative w-[100px] h-[120px]">
            <img
              src="/overland.png"
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
                  onClick={() => handleChangeSearchParams("")}
                >
                  Ver todos
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category._id}>
                  <Link
                    to={`?cat=${category.name}`}
                    onClick={() => handleChangeSearchParams(category.name)}
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

          {currentProduct.length === 0 ? (
            <section className="w-full h-[300px] flex items-center justify-center">
              <h4>Não há produtos.</h4>
            </section>
          ) : (
            <section className="w-full grid grid-cols-1 flex-[5] pl-2 border-l mb-12 md:grid-cols-2 mt-4 place-items-center lg:grid-cols-4 gap-8">
              {currentProduct.map((product) => (
                <StoreCard key={product._id} product={product} />
              ))}
            </section>
          )}
        </section>

        <StoreFooter />
      </div>
      <GoBackButton />
    </main>
  )
}

export default Store
