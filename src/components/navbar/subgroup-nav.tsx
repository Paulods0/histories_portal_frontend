import { motion } from "framer-motion"
import { FC } from "react"
import { Link } from "react-router-dom"

type Props = {
  children?: {
    link: string
    label: string
  }[]
}

const SubgroupNav: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className="absolute top-16 shadow-lg bg-white h-auto rounded-sm group-hover:flex hidden"
    >
      <ul className="flex flex-col font-Oswald w-[200px] h-full items-center justify-center text-center gap-y-2">
        {children?.map((child, index) => (
          <Link
            key={index}
            to={child.link}
            className="w-full text-sm font-bold py-3 capitalize text-orangeColor hover:text-white cursor-pointer hover:bg-orangeColor bg-opacity-15"
          >
            {child.label}
          </Link>
        ))}
      </ul>
    </motion.div>
  )
}

export default SubgroupNav
