import { useState } from "react"
import { ClipLoader } from "react-spinners"
import { useParams } from "react-router-dom"
import PaginationController from "../components/pagination/pagination-controller"
import SideBar from "../components/sidebar/side-bar"
import PostCard from "../components/card/post-card"
import GoBackButton from "../components/global/go-back-button"
import { useGetUserPosts } from "@/lib/react-query"
import HomeCategoryControlller from "@/components/home_category/home-category-controlller"

const UserPosts = () => {
  const { userId } = useParams()
  const { data: posts, isLoading } = useGetUserPosts(userId!!)
  const author = posts?.map((post) => post.author)[0]

  const [pages, setPages] = useState(1)

  const handleNavigate = (page: number) => {
    if (page === 1) {
      window.location.href = "/"
    } else {
      window.location.href = `/page/${page}`
    }
  }
  const h = () => setPages(2)
  if (isLoading) {
    return (
      <div className="w-full my-12 flex items-center justify-center">
        <div className="self-center">
          <ClipLoader color="#1a101F" size={100} />
        </div>
      </div>
    )
  }

  if (posts?.length === 0) {
    return (
      <div className="w-full my-12 flex items-center justify-center">
        <div className="self-center" onClick={() => h}>
          <h1>Não há posts ainda.</h1>
        </div>
      </div>
    )
  }

  return (
    <main className="w-full">
      <HomeCategoryControlller
        text="arquivos de:"
        label={`${author?.firstname} ${author?.lastname} `}
      />
      <main className="w-full px-8 pb-3 flex-col mt-6">
        <div className="w-full flex gap-10 ">
          <div className="flex-[3] ">
            <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
              {posts?.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>

          <aside className="lg:flex flex-col flex-[1] hidden md:hidden">
            <SideBar />
          </aside>
        </div>

        <div className="w-full flex items-center justify-center">
          <PaginationController handleNavigate={handleNavigate} pages={pages} />
        </div>
      </main>
      <GoBackButton />
    </main>
  )
}

export default UserPosts
