import { Outlet, useLocation } from "react-router-dom"
import SideBar from "../../components/sidebar/side-bar"
import GoBackButton from "../../components/go-back-button"
import HomeCategoryControlller from "@/components/home_category/home-category-controlller"

const CategoriesPage = () => {
  const { pathname } = useLocation()
  const param = pathname.split("/")[2]
  const path = decodeURIComponent(param)

  return (
    <>
      <HomeCategoryControlller text="Arquivos De Categoria:" label={path} />
      <main className="w-full  gap-10 px-12 flex-col">
        {/* <CategoriesNavBar /> */}
        <div className="w-full  flex gap-8">
          <div className="flex-[3] flex justify-center">
            <Outlet />
          </div>

          <aside className="lg:flex flex-col flex-[1] hidden md:hidden">
            <SideBar />
          </aside>
        </div>
        <GoBackButton />
      </main>
    </>
  )
}

export default CategoriesPage
