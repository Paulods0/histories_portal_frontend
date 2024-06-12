import { motion } from "framer-motion"

const StoreSlider = () => {
  return (
    <div className="relative mt-14 w-[100vw] overflow-hidden h-[25vh]">
      <motion.div
        initial={{ x: "0%" }}
        animate={{
          x: "-100%",
          transition: {
            duration: 140,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        className="absolute mt-1 w-[5000px] h-full"
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
