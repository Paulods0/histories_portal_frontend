import { Link, useParams } from "react-router-dom"
import { NAV_LINKS } from "../../constants"
import { CiSearch, CiShoppingCart } from "react-icons/ci"
import { FAKE_STORE_PRODUCTS } from "../../fakedata"
import StoreFooter from "../../components/store-components/StoreFooter"
import StoreDetailsCard from "../../components/store-components/StoreDetailsCard"

const ProductDetail = () => {
  const { id } = useParams()
  const post = FAKE_STORE_PRODUCTS.filter(
    (product) => product.id === parseInt(id!!)
  )[0]

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
                className="text-white hover:text-white/20 duration-200 transition-all ease-in-out"
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
      <section className="w-full grid grid-cols-2 gap-12 py-12 px-12 mt-12">
        {/**LEFT SIDE */}
        <div className="flex flex-col w-full h-full">
          <div className="relative h-[700px] p-4 shadow-sm">
            <img
              src={post.image}
              alt=""
              className="absolute inset-0 w-full p-2 h-full object-cover"
            />
          </div>
        </div>
        {/**RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <h1 className="font-semibold text-3xl uppercase">{post.name}</h1>
              <div className="flex items-center text-xl ">
                <span>$</span>
                <h2>{post.price}</h2>
              </div>
            </div>

            <button className="p-2 bg-black text-white uppercase">
              Add to cart
            </button>
          </div>

          <div className="w-full h-full flex flex-col justify-center gap-6">
            <div className="grid grid-cols-3 gap-12">
              {new Array(6).fill("").map(() => (
                <StoreDetailsCard image={post.image} />
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
