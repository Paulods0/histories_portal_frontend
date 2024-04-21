import PostCard from "../../components/card/post-card"
import { useLocation } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { useGetPostByCategory } from "@/lib/react-query"

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
      <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
        {isLoading ? (
          <div className="col-span-2 flex items-center justify-center">
            <ClipLoader size={80} color="#1A101F" />
          </div>
        ) : (
          posts?.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </div>
    </div>
  )
}

export default OverlandJournal
