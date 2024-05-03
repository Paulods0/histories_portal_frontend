import { Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./pages/home"
import Page from "./pages/Page"
import Store from "./pages/store"
import Search from "./pages/search"
import AboutUs from "./pages/aboutUs"
import Subscribe from "./pages/subscribe"
import UserPosts from "./pages/user-posts"
import WriteForUs from "./pages/write-for-us"
import Unsubscribe from "./pages/unsubscribe"
import PostDetails from "./pages/post-details"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Reviews from "./pages/categories/reviews"
import PageNotFound from "./pages/page-not-found"
import Passeios from "./pages/categories/passeios"
import AgendaAo from "./pages/categories/agenda-ao"
import Historias from "./pages/categories/historias"
import Parceiros from "./pages/categories/parceiros"
import QueroSerVosso from "./pages/want-to-be-yours"
import Classificados from "./pages/categories/classificados"
import ProductDetail from "./pages/store-pages/product-detail"
import CategoriesPage from "./pages/categories/categories-page"
import ClassifiedsFormPage from "./pages/classifieds-form-page"
import OverlandJournal from "./pages/categories/overland-journal"
import CategoriesNavBar from "./components/navbar/categories-nav-bar"

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="z-[20] sticky top-0">
        <CategoriesNavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/sobre" element={<AboutUs />} />
        <Route path="/pages/subscrever" element={<Subscribe />} />
        <Route path="/pages/escreveparanos" element={<WriteForUs />} />
        <Route path="/pages/queroservosso" element={<QueroSerVosso />} />
        <Route path="/pages/parceiros" element={<Parceiros />} />
        <Route path="/pages/loja" element={<Store />} />
        <Route path="/pages/loja/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/unsubscribe/:id" element={<Unsubscribe />} />
        <Route path="/page/:page" element={<Page />} />

        <Route path="/categorias" element={<CategoriesPage />}>
          <Route path="classificados" element={<Classificados />} />
          <Route path="agenda-ao" element={<AgendaAo />} />
          <Route path="histórias" element={<Historias />} />
          <Route path="passeios" element={<Passeios />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="jornal-overland" element={<OverlandJournal />} />
          {/* <Route path="overlandexperience" element={<OverlandExperience />} /> */}
        </Route>

        <Route path="/formulario" element={<ClassifiedsFormPage />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/post/user/:userId" element={<UserPosts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App
