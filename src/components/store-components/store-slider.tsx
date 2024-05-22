import { storeSwiperImages } from "@/constants"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const StoreSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      navigation
      loop={true}
      effect="fade"
      pagination={{ clickable: true }}
      autoplay
      slidesPerView={1}
    >
      {storeSwiperImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            loading="lazy"
            src={image}
            alt="hero-section-image"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default StoreSlider
