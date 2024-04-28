import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
}

const FadeInEffect = ({ children }: Props) => {
  return (
    <motion.div
    className="w-full"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInEffect
