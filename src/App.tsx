import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import "./index.css"

import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"

import CategoriesNavBar from "./components/navbar/categories-nav-bar"
import MobileCartPage from "./pages/store-pages/mobile-cart-page"
import ResponsiveNavigationBar from "./components/navbar/responsive-navigation-bar"
import Fallback from "./components/global/fallback"

const Home = lazy(() => import("./pages/home"))
const Page = lazy(() => import("./pages/Page"))
const Store = lazy(() => import("./pages/store"))
const Search = lazy(() => import("./pages/search"))
const AboutUs = lazy(() => import("./pages/aboutUs"))
const Subscribe = lazy(() => import("./pages/subscribe"))
const UserPosts = lazy(() => import("./pages/user-posts"))
const Unsubscribe = lazy(() => import("./pages/unsubscribe"))
const WriteForUs = lazy(() => import("./pages/write-for-us"))
const PostDetails = lazy(() => import("./pages/post-details"))
const Reviews = lazy(() => import("./pages/categories/reviews"))
const PageNotFound = lazy(() => import("./pages/page-not-found"))
const Passeios = lazy(() => import("./pages/categories/passeios"))
const AgendaAo = lazy(() => import("./pages/categories/agenda-ao"))
const QueroSerVosso = lazy(() => import("./pages/want-to-be-yours"))
const Historias = lazy(() => import("./pages/categories/historias"))
const Classificados = lazy(() => import("./pages/categories/classificados"))
const OverlandExperience = lazy(() => import("./pages/overland-experience"))
const ProductDetail = lazy(() => import("./pages/store-pages/product-detail"))
const ClassifiedsFormPage = lazy(() => import("./pages/classifieds-form-page"))
const CategoriesPage = lazy(() => import("./pages/categories/categories-page"))
const OverlandJournal = lazy(
  () => import("./pages/categories/overland-journal")
)

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="z-[20] sticky top-0">
        <CategoriesNavBar />
        <ResponsiveNavigationBar />
      </div>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/page/:page" element={<Page />} />
          <Route path="/pages/loja" element={<Store />} />
          <Route path="/pages/sobre" element={<AboutUs />} />
          <Route path="/pages/subscrever" element={<Subscribe />} />
          <Route path="/unsubscribe/:id" element={<Unsubscribe />} />
          <Route path="/pages/escreveparanos" element={<WriteForUs />} />
          <Route path="/pages/queroservosso" element={<QueroSerVosso />} />
          <Route path="/pages/loja/product/:id" element={<ProductDetail />} />
          <Route path="/pages/loja/cart" element={<MobileCartPage />} />

          <Route path="/categorias" element={<CategoriesPage />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="passeios" element={<Passeios />} />
            <Route path="agenda-ao" element={<AgendaAo />} />
            <Route path="histórias" element={<Historias />} />
            <Route path="classificados" element={<Classificados />} />
            <Route path="jornal-overland" element={<OverlandJournal />} />
            <Route
              path="overland-experience"
              element={<OverlandExperience />}
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/post/user/:userId" element={<UserPosts />} />
          <Route path="/formulario" element={<ClassifiedsFormPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </main>
  )
}

export default App
