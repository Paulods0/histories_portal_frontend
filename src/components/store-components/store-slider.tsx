import { storeSwiperImages } from "@/constants"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const StoreSlider = () => {
  return (
    <div className="relative w-full h-[50vh]">
      <img
        loading="lazy"
        src="/banners/banner-1.jpg"
        alt="hero-section-image"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

export default StoreSlider
