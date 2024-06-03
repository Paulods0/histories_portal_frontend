import Footer from "./footer/footer"
import Navbar from "./navbar/navbar"
import CategoriesNavBar from "./navbar/categories-nav-bar"
import ResponsiveNavigationBar from "./navbar/responsive-navigation-bar"
import { Outlet } from "react-router-dom"
import { useThemeContext } from "@/context/theme-context"

const RootLayout = () => {
  const { theme } = useThemeContext()
  return (
    <main className={`min-h-screen ${theme}`}>
      <Navbar />
      <div className="z-[20] sticky top-0">
        <CategoriesNavBar />
        <ResponsiveNavigationBar />
      </div>
      <Outlet />
      <Footer />
    </main>
  )
}

export default RootLayout
