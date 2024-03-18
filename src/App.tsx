import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import "./index.css"
import WriteForUs from "./pages/WriteForUs"
import Subscribe from "./pages/Subscribe"
import AboutUs from "./pages/AboutUs"
import Store from "./pages/Store"
import PageNotFound from "./pages/PageNotFound"
import CategoriesPage from "./pages/categories/CategoriesPage"
import PostDetails from "./pages/PostDetails"
import Footer from "./components/footer/Footer"
import QueroSerVosso from "./pages/QueroSerVosso"
import Classificados from "./pages/categories/Classificados"
import AgendaAo from "./pages/categories/AgendaAo"
import Historias from "./pages/categories/Historias"
import Passeios from "./pages/categories/Passeios"
import Reviews from "./pages/categories/Reviews"
import OverlandJournal from "./pages/categories/OverlandJournal"
import Parceiros from "./pages/categories/Parceiros"
import ProductDetail from "./pages/store-pages/ProductDetail"
import CategoriesNavBar from "./components/navbar/CategoriesNavBar"
import HomeCategoryControlller from "./components/home_category/HomeCategoryControlller"

function App() {
  const path = useLocation()
  let homeCategoryLabel

  if (path.pathname.includes("/post/")) {
    homeCategoryLabel = decodeURI(path.pathname.split("/")[2].split("_")[0])
  } else {
    homeCategoryLabel = path.pathname.split("/")[2]
  }
  return (
    <main className="min-h-screen">
      {!path.pathname.includes("/pages/loja") && (
        <>
          <Navbar />
          <div className="z-20 sticky top-0">
            <CategoriesNavBar />
          </div>
          <HomeCategoryControlller
            hide={homeCategoryLabel === undefined}
            text="Arquivos de: "
            label={homeCategoryLabel}
          />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/sobre" element={<AboutUs />} />
        <Route path="/pages/subscrever" element={<Subscribe />} />
        <Route path="/pages/escreveparanos" element={<WriteForUs />} />
        <Route path="/pages/queroservosso" element={<QueroSerVosso />} />
        <Route path="/pages/parceiros" element={<Parceiros />} />
        <Route path="/pages/loja" element={<Store />} />
        <Route path="/pages/loja/product/:id" element={<ProductDetail />} />

        <Route path="/categorias" element={<CategoriesPage />}>
          <Route path="classificados" element={<Classificados />} />
          <Route path="agendaao" element={<AgendaAo />} />
          <Route path="historias" element={<Historias />} />
          <Route path="passeios" element={<Passeios />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="jornaloverland" element={<OverlandJournal />} />
        </Route>

        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
