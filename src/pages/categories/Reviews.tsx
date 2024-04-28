import PostCard from "../../components/card/post-card"
import { useLocation } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { useGetPostByCategory } from "@/lib/react-query"
import FadeInEffect from "@/components/motion/fade-in"

const Reviews = () => {
  const path = useLocation()
  const category_id = path.pathname.split("/")[2]
  const { data: posts, isLoading } = useGetPostByCategory(category_id!!)

  if (isLoading) {
    return (
      <div className="col-span-2 flex items-center justify-center">
        <ClipLoader size={80} color="#1A101F" />
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen gap-10 px-12 flex-col">
      <FadeInEffect>
        <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
          {posts?.length === 0 ? (
            <div className="col-span-2 flex items-center justify-center">
              <h1>Nenhum post ainda.</h1>
            </div>
          ) : (
            posts?.map((post) => <PostCard key={post._id} post={post} />)
          )}
        </div>
      </FadeInEffect>
    </div>
  )
}

export default Reviews
