import { Link, useLocation } from "react-router-dom"
import NavbarTop from "./navbar-top"
import { useEffect, useState } from "react"

const bannerImages = [
  "/banners/banner-1.jpg",
  "/banners/banner-2.jpg",
  "/banners/banner-3.jpg",
  "/banners/banner-4.jpg",
  "/banners/banner-5.jpg",
  "/banners/banner-6.jpg",
]

const Navbar = () => {
  const { pathname } = useLocation()
  const isStore = pathname.includes("/pages/loja")

  if (isStore) {
    return
  }

  const [bannerImage, setBannerImage] = useState("/banner/banner-1.jpg")

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

      <Link to={"/"} className="w-full h-full relative">
        <div className="w-full flex justify-center absolute top-1/2 -translate-y-1/2">
          <img
            src="/logo/logotipo-tradicional.png"
            alt="logo-tipo"
            className="w-72 object-contain inset-0 rounded-full"
          />
        </div>

        <img
          loading="lazy"
          src={bannerImage}
          className="text-center object-cover text-white w-full h-64 flex items-center justify-center"
        />
      </Link>
    </header>
  )
}

export default Navbar
