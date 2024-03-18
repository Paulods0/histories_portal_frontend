import StoreNavigationBar from "../components/store-components/StoreNavigationBar"
import StoreCard from "../components/store-components/StoreCard"
import { Link } from "react-router-dom"
import { FAKE_STORE_PRODUCTS } from "../fakedata"
import StoreFooter from "../components/store-components/StoreFooter"
import PaginationController from "../components/pagination/PaginationController"
import { useEffect, useState } from "react"
import { getAllProducts } from "../api/apiCalls"
import { IProductData } from "../api/types"

const Store = () => {
  const [products, setProducts] = useState<IProductData[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 12

  const indexOfLastProduct = currentPage * postsPerPage
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts()
        setProducts(data)
      } catch (error) {}
    }
    fetchData()
  }, [])

  return (
    <main className="relative h-screen flex flex-col w-full">
      <StoreNavigationBar />
      <section className="relative flex items-center justify-end min-h-screen w-full">
        <img
          src="/store.jpg"
          alt="hero-section-image"
          className="absolute w-full h-full inset-0 object-cover"
        />
        <div className="z-10 mr-20">
          <h1 className="text-3xl mb-2 uppercase font-semibold text-white text-right">
            Bem-vindo à nossa loja!
          </h1>
          <p className="text-white text-lg font-medium text-right lg:w-[650px]">
            É com grande alegria que damos as boas-vindas a você, nosso cliente
            estimado, à nossa loja virtual.
          </p>
        </div>
      </section>
      <div className="w-full flex mt-10 items-center justify-center bg-black p-4 h-24">
        <h1 className="text-white text-3xl text-center">Bem-vindo à loja</h1>
      </div>
      <section className="w-full py-4 px-8">
        <div className="flex-1 flex justify-between px-20 mt-4  text-black rounded-md p-2">
          <ul className="flex items-center gap-4 justify-center">
            <h1 className="font-bold">Filtrar por:</h1>
            <li>Bonés</li>
            <li>T-Shirts</li>
            <li>Calças</li>
            <li>Óculos</li>
          </ul>
          <Link to={""} className=" font-medium underline">
            Ve todos
          </Link>
        </div>
        <section className="w-full grid grid-cols-1 mb-12 md:grid-cols-2 place-items-center mt-12 lg:grid-cols-3 gap-8">
          {currentProduct.map((product) => (
            <StoreCard product={product} />
          ))}
        </section>
        <PaginationController
          paginate={paginate}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          totalPosts={FAKE_STORE_PRODUCTS.length}
        />
      </section>
      <StoreFooter />
    </main>
  )
}

export default Store
