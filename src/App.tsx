import { Route, Routes } from "react-router-dom"
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

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/sobre" element={<AboutUs />} />
        <Route path="/pages/subscrever" element={<Subscribe />} />
        <Route path="/pages/escreveparanos" element={<WriteForUs />} />
        <Route path="/pages/queroservosso" element={<QueroSerVosso />} />
        <Route path="/pages/parceiros" element={<Parceiros />} />
        <Route path="/pages/loja" element={<Store />} />
        <Route path="/pages/loja/product/:id" element={<ProductDetail />} />

        <Route path="/categoria" element={<CategoriesPage />}>
          <Route path="classificados" element={<Classificados />} />
          <Route path="agenda" element={<AgendaAo />} />
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
