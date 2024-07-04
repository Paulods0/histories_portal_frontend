import { Link, useLocation } from "react-router-dom"
import NavbarTop from "./navbar-top"
import { useEffect, useState } from "react"
import banner1 from "@/assets/banners/banner-1.jpg"
import banner2 from "@/assets/banners/banner-2.jpg"
import banner3 from "@/assets/banners/banner-3.jpg"
import banner4 from "@/assets/banners/banner-4.jpg"
import banner5 from "@/assets/banners/banner-5.jpg"
import banner6 from "@/assets/banners/banner-6.jpg"

const bannerImages = [banner1, banner2, banner3, banner4, banner5, banner6]

const Navbar = () => {
  const { pathname } = useLocation()
  const isStore = pathname.includes("/pages/loja")

  if (isStore) {
    return
  }

  const [bannerImage, setBannerImage] = useState(banner1)

  function changeBannerImage() {
    const bannerIndex = Math.floor(Math.random() * bannerImages.length)

    setBannerImage(bannerImages[bannerIndex])
  }

  useEffect(() => {
    changeBannerImage()
    return () => setBannerImage("/banners/banner-1.jpg")
  }, [pathname])

  return (
    <header className="w-full">
      <NavbarTop />

      <Link
        to="/"
        style={{ backgroundImage: `url(${bannerImage})` }}
        className={`w-full h-64 relative flex items-center justify-center bg-center bg-cover bg-no-repeat`}
      >
        <div className="w-full flex justify-center absolute top-1/2 -translate-y-1/2">
          <img
            loading="lazy"
            src={"/logo/logotipo-tradicional.png"}
            alt="logotipo"
            className="w-56 md:w-72 object-contain inset-0 rounded-full"
          />
        </div>
      </Link>
    </header>
  )
}

export default Navbar
