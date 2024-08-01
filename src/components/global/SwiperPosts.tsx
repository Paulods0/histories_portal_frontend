import { ClipLoader } from "react-spinners"
import SwiperCard from "./SwiperCard"
import { useGetMostViewsPosts } from "@/lib/react-query"
import { memo, useMemo } from "react"

const MemoSwiperCard = memo(SwiperCard)

const SwiperPosts = () => {
  const { data: posts, isLoading } = useGetMostViewsPosts()

  const memoPosts = useMemo(() => {
    return posts?.map((post) => <MemoSwiperCard post={post} key={post._id} />)
  }, [posts])

  if (isLoading) {
    return (
      <main className="w-full flex items-center justify-center">
        <ClipLoader size={40} />
      </main>
    )
  }

  if (!posts) return

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-zinc-900 font-semibold mt-6 font-Roboto uppercase text-[12px] flex self-start gap-1">
        Os mais vistos:
      </h1>

      <div className="lg:w-[65vw] border px-3 rounded-md w-[80vw] flex md:w-full self-start scroll-bar mt-2 mb-4 overflow-x-auto scroll-bar py-3 lg:flex gap-2 ">
        {posts?.map((_, index) => (
          <div key={index}>{memoPosts}</div>
        ))}
      </div>
    </div>
  )
}

export default SwiperPosts
