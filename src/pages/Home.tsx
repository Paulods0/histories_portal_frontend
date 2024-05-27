import PostCard from "../components/card/post-card"
import PaginationController from "../components/pagination/pagination-controller"

import HighlightedCard from "../components/card/highlighted-card"
import { ClipLoader } from "react-spinners"
import GoBackButton from "../components/global/go-back-button"
import { useGetPosts } from "@/lib/react-query"
import FadeInEffect from "@/components/motion/fade-in"
import SideBarHome from "@/components/sidebar/side-bar-home"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const { data: posts, isLoading } = useGetPosts(page, "")

  const handlePaginate = (newPage: number) => {
    setPage(newPage)
    navigate(`/page/${newPage}`)
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <ClipLoader color="#111111" size={40} />
      </div>
    )
  }

  if (!posts?.posts) {
    return (
      <div className="w-full my-12 flex items-start h-screen justify-center">
        <div className="self-center">
          <ClipLoader color="#1a101F" size={100} />
        </div>
      </div>
    )
  }

  const filteredPosts = posts?.posts.filter((post) => !post.highlighted)

  return (
    <main className="relative w-full min-h-screen px-8 pb-3 flex-col mt-6">
      <div className="w-full flex gap-10 ">
        <FadeInEffect>
          <div className="flex-[3] min-h-screen">
            <HighlightedCard />
            <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
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
        <PaginationController paginate={handlePaginate} pages={posts.pages} />
      </div>
      <GoBackButton />
    </main>
  )
}

export default Home
