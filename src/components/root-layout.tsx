import Footer from "./footer/Footer";
import CategoriesNavBar from "./navbar/categories-nav-bar";
import MobileMenu from "./navbar/mobile-menu";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const RootLayout = () => {
  return (
    <main className={`min-h-screen `}>
      <Navbar />
      <div className="z-[20] sticky top-0">
        <CategoriesNavBar />
        <MobileMenu />
      </div>
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
