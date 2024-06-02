import { motion } from "framer-motion"

const bannerImages = [
  "/banners/banner-1.jpg",
  "/banners/banner-2.jpg",
  "/banners/banner-3.jpg",
  "/banners/banner-4.jpg",
  "/banners/banner-5.jpg",
  "/banners/banner-6.jpg",
]

const StoreSlider = () => {
  return (
    <div className="relative w-[100vw] bg-red-200 overflow-x-clip h-[50vh]">
      <motion.div
        animate={{
          x: "-200%",
          transition: {
            duration: 10,
            repeatDelay: 0.4,
            repeat: Infinity,
          },
        }}
        className="inset-0 w-full h-full flex"
      >
        {bannerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            loading="lazy"
            alt="hero-section-image"
            className="w-full h-full object-cover"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default StoreSlider
