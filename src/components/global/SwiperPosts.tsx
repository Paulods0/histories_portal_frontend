import { ClipLoader } from "react-spinners"
import SwiperCard from "./SwiperCard"
import { useGetMostViewsPosts } from "@/lib/react-query"

const SwiperPosts = () => {
  const { data: posts, isLoading } = useGetMostViewsPosts()

  if (isLoading) {
    return (
      <main className="w-full flex items-center justify-center">
        <ClipLoader size={40} />
      </main>
    )
  }

  return (
    <div className="lg:w-[65vw] shadow-inner py-2 px-3 rounded-md w-[80vw] flex md:w-full self-start scroll-bar mt-2 mb-4 overflow-x-auto scroll-bar py-3 lg:flex gap-2 ">
      {posts?.map((post, index) => (
        <div key={index}>
          <SwiperCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default SwiperPosts
