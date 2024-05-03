import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const SubgroupNav = ({ slug }: { slug: string }) => {
  const handleNavigate = (slug: string) => {
    return `/categorias/${slug}`
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className="absolute top-6 shadow-md bg-white w-[200px] h-auto rounded-sm group-hover:block hidden"
    >
      <ul className="flex flex-col font-Oswald w-full h-full items-center justify-center text-center gap-y-2">
        <li className="w-full flex text-goldenColor  hover:text-white cursor-pointer p-3 hover:bg-goldenColor bg-opacity-15">
          <Link
            to={slug === "classificados" ? handleNavigate(slug) : "#"}
            className="w-full text-[14px] font-bold "
          >
            Quero comprar
          </Link>
        </li>

        <li className="w-full text-goldenColor  hover:text-white cursor-pointer p-3 hover:bg-goldenColor bg-opacity-15">
          <Link to="/formulario" className="w-full text-[14px] font-bold ">
            Quero vender
          </Link>
        </li>
      </ul>
    </motion.div>
  )
}

export default SubgroupNav
