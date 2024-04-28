import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
}

const SlideDownEffect = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export default SlideDownEffect
