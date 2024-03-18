import { Link, useParams } from "react-router-dom"
import { NAV_LINKS } from "../../utils/constants"
import { CiSearch, CiShoppingCart } from "react-icons/ci"
import StoreFooter from "../../components/store-components/StoreFooter"
import StoreDetailsCard from "../../components/store-components/StoreDetailsCard"
import { useEffect, useState } from "react"
import { getProductById } from "../../api/apiCalls"
import { IProductData } from "../../api/types"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<IProductData>({
    _id: "",
    category: {
      _id: "",
      name: "",
    },
    createdAt: "",
    image: "",
    name: "",
    price: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductById(id!!)
        setProduct(data)
      } catch (error) {}
    }
    fetchData()
  }, [id])

  return (
    <main className="h-screen w-full flex flex-col">
      <header
        className="fixed inset-0 z-20 flex-1 h-[60px] transition-all duration-75 ease-in 
          bg-black"
      >
        <nav className="w-full flex items-center justify-between px-12 py-4">
          <ul className="flex w-full mr-16 items-center justify-between">
            <Link to={"/"} className="text-white">
              LOGO
            </Link>
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-white hidden lg:block hover:text-white/20 duration-200 transition-all ease-in-out"
              >
                {link.name}
              </Link>
            ))}
          </ul>
          <ul className="gap-4 flex items-center justify-center text-white">
            <div>
              <CiShoppingCart size={25} color="#FFF" />
            </div>
            <div>
              <CiSearch size={25} color="#FFF" />
            </div>
          </ul>
        </nav>
      </header>
      <section className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 py-12 px-12 mt-12">
        {/**LEFT SIDE */}
        <div className="flex flex-col w-full h-full">
          <div className="relative h-[300px] md:h-[500px] lg:h-[700px] p-4 shadow-sm">
            <img
              src={product!!.image}
              alt=""
              className="absolute inset-0 w-full p-2 h-full object-cover"
            />
          </div>
        </div>
        {/**RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <h1 className="font-bold text-base lg:text-3xl uppercase">
                {product?.name}
              </h1>
              <div className="flex items-center text-lg lg:text-xl ">
                <span>$</span>
                <h2>{product?.price}</h2>
              </div>
            </div>

            <button className="p-2 bg-black text-white uppercase">
              Add to cart
            </button>
          </div>

          <div className="w-full h-full flex flex-col justify-center gap-6">
            <div className="grid grid-cols-2 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-12">
              {new Array(6).fill("").map(() => (
                <StoreDetailsCard image={product!!.image} />
              ))}
            </div>

            <div className="w-full flex justify-between items-center">
              <button className="bg-black text-white p-2">Anterior</button>
              <button className="bg-black text-white p-2">Seguinte</button>
            </div>
          </div>
        </div>
      </section>
      <StoreFooter />
    </main>
  )
}

export default ProductDetail
