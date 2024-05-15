import PostCard from "../components/card/post-card"
// import SideBar from "../components/sidebar/side-bar"
import PaginationController from "../components/pagination/pagination-controller"

import HighlightedCard from "../components/card/highlighted-card"
import { ClipLoader } from "react-spinners"
import GoBackButton from "../components/global/go-back-button"
import { useGetPosts } from "@/lib/react-query"
import FadeInEffect from "@/components/motion/fade-in"
// import { useGetCountryList } from "@/lib/countries-list"
import SideBarHome from "@/components/sidebar/side-bar-home"

const Home = () => {
  const { data: posts, isLoading } = useGetPosts()

  const pages = 1
  const handleNavigate = (page: number) => {
    if (page === 1) {
      window.location.href = "/"
    } else {
      window.location.href = `page/${page}`
    }
  }
  if (!posts) {
    return (
      <div className="w-full my-12 flex items-center justify-center">
        <div className="self-center">
          <ClipLoader color="#1a101F" size={100} />
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center h-12">
        <ClipLoader color="#111111" size={40} />
      </div>
    )
  }

  return (
    <main className="relative w-full min-h-screen px-8 pb-3 flex-col mt-6">
      <div className="w-full flex gap-10 ">
        <FadeInEffect>
          <div className="flex-[3] min-h-screen">
            <HighlightedCard />
            <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </FadeInEffect>

        <aside className="lg:flex flex-col flex-[1] hidden md:hidden">
          <SideBarHome />
        </aside>
      </div>

      <div className="w-full flex items-center justify-center">
        <PaginationController handleNavigate={handleNavigate} pages={pages} />
      </div>
      <GoBackButton />
    </main>
  )
}

export default Home
