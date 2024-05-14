import PostCard from "../../components/card/post-card"
import { useLocation } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { useGetPostByCategory } from "@/lib/react-query"
import FadeInEffect from "@/components/motion/fade-in"
import SwiperPosts from "@/components/global/SwiperPosts"

const OverlandJournal = () => {
  const { pathname } = useLocation()
  const category_slug = pathname.split("/")[2]
  const { data: posts, isLoading } = useGetPostByCategory(category_slug!!)

  if (isLoading) {
    return (
      <main className="w-full flex items-center justify-center h-full">
        <ClipLoader size={40} color="#111111" />
      </main>
    )
  }

  if (posts?.length === 0) {
    return (
      <main className="w-full flex items-center justify-center">
        <h1>Não há posts ainda.</h1>
      </main>
    )
  }

  return (
    <div className="w-full min-h-screen gap-10 px-12 flex-col ">
      <FadeInEffect>
        <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
          {isLoading ? (
            <div className="col-span-2 flex items-center justify-center">
              <ClipLoader size={80} color="#1A101F" />
            </div>
          ) : (
            posts?.map((post) => <PostCard key={post._id} post={post} />)
          )}
        </div>
      </FadeInEffect>
      <div className="mt-12">
        <div className="flex flex-col self-start">
          <div className="text-colorGray font-semibold font-Roboto uppercase text-[12px] flex self-start gap-1">
            <h1 className="text-colorGray-zinc-900">Os mais vistos:</h1>
          </div>
        </div>
        <SwiperPosts />
      </div>
    </div>
  )
}

export default OverlandJournal
