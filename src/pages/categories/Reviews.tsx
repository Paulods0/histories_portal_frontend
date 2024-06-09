import { ClipLoader } from "react-spinners"
import { useLocation } from "react-router-dom"
import { useGetPosts } from "@/lib/react-query"
import PostCard from "../../components/card/post-card"
import FadeInEffect from "@/components/motion/fade-in"
import SwiperPosts from "@/components/global/SwiperPosts"
import PaginationController from "@/components/pagination/pagination-controller"
import { memo, useMemo } from "react"

const MemoPostCard = memo(PostCard)

const Reviews = () => {
  const path = useLocation()
  const category = path.pathname.split("/")[2]!!
  const currPage = parseInt(path.search.split("=")[1]) || 1

  const { data: posts, isLoading } = useGetPosts(currPage, category)

  const memoPosts = useMemo(() => {
    return posts?.posts.map((post) => (
      <MemoPostCard post={post} key={post._id} />
    ))
  }, [posts?.posts])

  if (isLoading) {
    return (
      <div className="col-span-2 flex items-center justify-center">
        <ClipLoader size={80} color="#1A101F" />
      </div>
    )
  }

  if (posts?.posts.length === 0) {
    return (
      <div className="col-span-2 flex items-center justify-center">
        <h1>Nenhum post ainda.</h1>
      </div>
    )
  }

  const handlePaginate = (newPage: number) => {
    window.location.href = `?page=${newPage}`
  }

  return (
    <div className="w-full min-h-screen gap-10 lg:px-12 flex-col">
      <FadeInEffect>
        <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
          {memoPosts}
        </div>
      </FadeInEffect>

      <div className="mt-12">
        <div className="flex flex-col self-start">
          <PaginationController
            paginate={handlePaginate}
            pages={posts!!.pages}
          />
          <div className="text-colorGray font-semibold font-Roboto uppercase text-[12px] flex self-start gap-1">
            <h1 className="text-colorGray-zinc-900">Os mais vistos:</h1>
          </div>
        </div>

        <SwiperPosts />
      </div>
    </div>
  )
}

export default Reviews
