import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  index?: number
}

const fadeInAnimationVariant = {
  initial: { opacity: 0, x: -40 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.09 * index, duration: 0.4 },
  }),
}
const FadeInEffect = ({ children, index }: Props) => {
  return (
    <motion.div
      custom={index}
      initial="initial"
      animate="animate"
      className="w-full"
      variants={fadeInAnimationVariant}
    >
      {children}
    </motion.div>
  )
}

export default FadeInEffect
