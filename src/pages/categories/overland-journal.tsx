import { memo, useMemo } from "react"
import { ClipLoader } from "react-spinners"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import FadeInEffect from "@/components/motion/fade-in"
import PostCard from "../../components/card/post-card"
import { useGetPosts } from "@/lib/tanstack-query/post/query"
import MoreViewedContainer from "@/components/global/more-viewed/more-viewed-container"

const MemoizedPostCard = memo(PostCard)

const OverlandJournal = () => {
  const path = useLocation()
  const category = path.pathname.split("/")[2]!!
  const currPage = parseInt(path.search.split("=")[1]) || 1

  const { data: posts, isLoading } = useGetPosts(currPage, category)

  const memoizedPosts = useMemo(() => {
    return posts?.posts.map((post) => (
      <MemoizedPostCard post={post} key={post._id} />
    ))
  }, [posts?.posts, currPage])

  if (isLoading) {
    return (
      <div className="col-span-2 flex items-center justify-center">
        <ClipLoader size={80} color="#1A101F" />
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Jornal Overland | Overland Angola</title>
        <meta name="description" content={`Veja jornal overland no Overland`} />
      </Helmet>

      <div className="w-full min-h-screen gap-10 lg:px-12 flex-col ">
        <FadeInEffect>
          {memoizedPosts?.length === 0 ? (
            <div className="w-full flex justify-center items-center mt-6">
              <h1>Não há nenhum post ainda</h1>
            </div>
          ) : (
            <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
              {memoizedPosts}
            </div>
          )}
        </FadeInEffect>

        <div className="mt-12">
          <MoreViewedContainer />
        </div>
      </div>
    </>
  )
}

export default OverlandJournal
