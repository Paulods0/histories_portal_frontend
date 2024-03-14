import { Link, Outlet, useLocation } from "react-router-dom"
import SideBar from "../../components/sidebar/SideBar"
import HomeCategoryControlller from "../../components/home_category/HomeCategoryControlller"

const paths = [
  { path: "jornaloverland", label: "Jornal Overland" },
  { path: "classificados", label: "Classificados" },
  { path: "parceiros", label: "Parceiros" },
  { path: "passeios", label: "Passeios" },
  { path: "reviews", label: "Reviews" },
  { path: "historias", label: "História" },
  { path: "agenda", label: "Agenda AO" },
]

const CategoriesPage = () => {
  const { pathname } = useLocation()
  const [{ label }] = paths.filter((cat) => cat.path === pathname.split("/")[2])

  return (
    <main className="w-full min-h-screen gap-10 px-12 flex-col">
      <HomeCategoryControlller text="Arquivos De Categoria:" label={label} />

      <div className="w-full  flex gap-8">
        <div className="flex-[3] flex justify-center">
          <Outlet />
        </div>

        <aside className="lg:flex flex-col flex-[1] hidden md:hidden">
          <SideBar />
        </aside>
      </div>
    </main>
  )
}

export default CategoriesPage
