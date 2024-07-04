import Search from "../search/search"
import { useLocation } from "react-router-dom"

import MobileMenuButton from "../mobile/mobile-menu-button"

const MobileMenu = () => {
  const location = useLocation()

  if (location.pathname.includes("/pages/loja")) {
    return
  }

  return (
    <div className="lg:hidden sticky shadow-md top-0 items-center justify-between flex w-full bg-white p-6 mt-0 h-16">
      <Search />
      <MobileMenuButton />
    </div>
  )
}

export default MobileMenu
