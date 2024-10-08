import { ClipLoader } from "react-spinners"
import PostCard from "../components/card/post-card"
import SideBar from "../components/sidebar/side-bar"
import { useNavigate, useParams } from "react-router-dom"
import { useGetPosts } from "@/lib/tanstack-query/post/query"
import GoBackButton from "../components/global/go-back-button"
import PaginationController from "../components/pagination/pagination-controller"
import HomeCategoryControlller from "@/components/home_category/home-category-controlller"

const Page = () => {
  const navigate = useNavigate()
  const { page } = useParams()
  const newPage = parseInt(page!!)

  const { data: posts, isLoading } = useGetPosts(newPage)

  if (!posts?.posts) {
    return (
      <div className="w-full my-12 flex items-center justify-center">
        <div className="self-center">
          <ClipLoader color="#1a101F" size={100} />
        </div>
      </div>
    )
  }

  const handlePaginate = (newPage: number) => {
    if (newPage === 1) {
      navigate("/")
    } else {
      navigate(`/page/${newPage}`)
      window.scrollTo(0, 0)
    }
  }

  return (
    <main className="w-full h-full">
      <HomeCategoryControlller text="Arquivos da página:" label={page} />

      <main className="w-full h-full px-8 pb-0 flex-col mt-6">
        <div className="w-full flex gap-10 ">
          <div className="flex-[3]">
            <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
              {isLoading ? (
                <div className="h-full w-full lg:col-span-3 my-12 flex px-12 items-center justify-center">
                  <div>
                    <ClipLoader color="#1a101F" size={100} />
                  </div>
                </div>
              ) : (
                posts.posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))
              )}
            </div>
          </div>

          <aside className="lg:flex flex-col flex-[1] hidden md:hidden">
            <SideBar />
          </aside>
        </div>

        <div className="w-full flex items-center justify-center">
          <PaginationController
            totalPages={posts.pages}
            handlePaginate={handlePaginate}
          />
        </div>
      </main>
      <GoBackButton />
    </main>
  )
}

export default Page
