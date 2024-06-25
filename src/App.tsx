import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import MobileCartPage from "./pages/store-pages/mobile-cart-page"
import RootLayout from "./components/root-layout"
import Fallback from "./components/global/fallback"

const Home = lazy(() => import("./pages/home"))
const Page = lazy(() => import("./pages/Page"))
const Store = lazy(() => import("./pages/store"))
const Search = lazy(() => import("./pages/search"))
const AboutUs = lazy(() => import("./pages/aboutUs"))
const TipsPage = lazy(() => import("./pages/tips-page"))
const Contactos = lazy(() => import("./pages/contactos"))
const Subscribe = lazy(() => import("./pages/subscribe"))
const UserPosts = lazy(() => import("./pages/user-posts"))
const WriteForUs = lazy(() => import("./pages/write-for-us"))
const Unsubscribe = lazy(() => import("./pages/unsubscribe"))
const PostDetails = lazy(() => import("./pages/post-details"))
const PartnersPage = lazy(() => import("./pages/partners-page"))
const Reviews = lazy(() => import("./pages/categories/reviews"))
const PageNotFound = lazy(() => import("./pages/page-not-found"))
const Passeios = lazy(() => import("./pages/categories/passeios"))
const AgendaAo = lazy(() => import("./pages/categories/agenda-ao"))
const TipDetailPage = lazy(() => import("./pages/tip-detail-page"))
const QueroSerVosso = lazy(() => import("./pages/want-to-be-yours"))
const Historias = lazy(() => import("./pages/categories/historias"))
const PartnerDetailPage = lazy(() => import("./pages/partner-detail-page"))
const OverlandExperience = lazy(() => import("./pages/overland-experience"))
const Classificados = lazy(() => import("./pages/categories/classificados"))
const ClassifiedsFormPage = lazy(() => import("./pages/classifieds-form-page"))
const ClassifiedsFormBuyPage = lazy(
  () => import("./pages/classified-form-buy-page")
)
const CategoriesPage = lazy(() => import("./pages/categories/categories-page"))
const OverlandJournal = lazy(
  () => import("./pages/categories/overland-journal")
)

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "page/:page",
          element: <Page />,
        },
        {
          path: "pages/loja",
          element: <Store />,
        },
        {
          path: "pages/sobre",
          element: <AboutUs />,
        },
        {
          path: "pages/subscrever",
          element: <Subscribe />,
        },
        {
          path: "unsubscribe/",
          element: <Unsubscribe />,
        },
        {
          path: "pages/escreveparanos",
          element: <WriteForUs />,
        },
        {
          path: "pages/queroservosso",
          element: <QueroSerVosso />,
        },
        {
          path: "pages/dicas",
          element: <TipsPage />,
        },
        {
          path: "pages/parceiros",
          element: <PartnersPage />,
        },
        {
          path: "pages/contactos",
          element: <Contactos />,
        },
        {
          path: "pages/loja/cart",
          element: <MobileCartPage />,
        },
        {
          path: "categorias",
          element: <CategoriesPage />,
          children: [
            {
              path: "reviews",
              element: <Reviews />,
            },
            {
              path: "passeios",
              element: <Passeios />,
            },
            {
              path: "agenda-ao",
              element: <AgendaAo />,
            },
            {
              path: "histórias",
              element: <Historias />,
            },
            {
              path: "classificados",
              element: <Classificados />,
            },
            {
              path: "jornal-overland",
              element: <OverlandJournal />,
            },
            {
              path: "overland-experience",
              element: <OverlandExperience />,
            },
          ],
        },
        {
          path: "formulario-venda",
          element: <ClassifiedsFormPage />,
        },
        {
          path: "formulario-compra",
          element: <ClassifiedsFormBuyPage />,
        },
        {
          path: "post/:id",
          element: <PostDetails />,
        },
        {
          path: "parceiro/:id",
          element: <PartnerDetailPage />,
        },
        {
          path: "dica/:id",
          element: <TipDetailPage />,
        },
        {
          path: "post/user/:userId",
          element: <UserPosts />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ])
  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
