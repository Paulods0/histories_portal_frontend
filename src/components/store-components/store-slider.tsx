import { motion } from "framer-motion"

const StoreSlider = () => {
  const SPEED = 2
  return (
    <div className="relative mt-14 w-[100vw] overflow-hidden h-[25vh]">
      <motion.div
        animate={{
          left: "-140vw",
          transition: {
            duration: 45 * SPEED,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className="absolute mt-1 w-[5000px] h-full left-0"
      >
        <img
          src="/banners/banner-movel-loja.jpg"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  )
}

export default StoreSlider
