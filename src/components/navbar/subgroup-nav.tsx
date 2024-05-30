import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const SubgroupNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className="absolute top-13 shadow-md bg-white h-auto rounded-sm group-hover:flex hidden"
    >
      <ul className="flex flex-col font-Oswald w-[200px] h-full items-center justify-center text-center gap-y-2">
        <Link
          to="/categorias/classificados"
          className="w-full text-sm font-bold py-3  text-orangeColor hover:text-white cursor-pointer hover:bg-orangeColor bg-opacity-15"
        >
          Ver classificados
        </Link>
        <Link
          to="/formulario-compra"
          className="w-full text-sm font-bold py-3  text-orangeColor hover:text-white cursor-pointer hover:bg-orangeColor bg-opacity-15"
        >
          Quero comprar
        </Link>

        <Link
          to="/formulario"
          className="w-full text-sm font-bold py-3 text-orangeColor  hover:text-white cursor-pointer hover:bg-orangeColor bg-opacity-15"
        >
          Quero vender
        </Link>
      </ul>
    </motion.div>
  )
}

export default SubgroupNav
