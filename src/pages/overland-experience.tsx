import PostCard from "@/components/card/post-card"
import SwiperPosts from "@/components/global/SwiperPosts"
import FadeInEffect from "@/components/motion/fade-in"
import PaginationController from "@/components/pagination/pagination-controller"
import { useGetPosts } from "@/lib/react-query"
import { useLocation } from "react-router-dom"
import { ClipLoader } from "react-spinners"

const OverlandExperience = () => {
  const path = useLocation()
  const category = "reviews"
  const currPage = parseInt(path.search.split("=")[1]) || 1

  const { data, isLoading } = useGetPosts(currPage, category)

  if (isLoading) {
    return (
      <div className="col-span-2 flex items-center justify-center">
        <ClipLoader size={80} color="#1A101F" />
      </div>
    )
  }

  const handlePaginate = (newPage: number) => {
    window.location.href = `?page=${newPage}`
  }

  return (
    <div className="w-full min-h-screen gap-10 lg:px-12 flex-col ">
      <FadeInEffect>
        <div className="place-items-center h-full grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
          {data?.posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </FadeInEffect>
      <div className="mt-12">
        <div className="flex flex-col self-start">
          <PaginationController
            paginate={handlePaginate}
            pages={data!!.pages!!}
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

export default OverlandExperience
