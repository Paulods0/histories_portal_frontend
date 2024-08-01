import { memo, useMemo } from "react"
import { ClipLoader } from "react-spinners"
import { useNavigate } from "react-router-dom"
import { useGetPosts } from "@/lib/react-query"
import PostCard from "../components/card/post-card"
import FadeInEffect from "@/components/motion/fade-in"
import SideBarHome from "@/components/sidebar/side-bar-home"
import GoBackButton from "../components/global/go-back-button"
import HighlightedCard from "../components/card/highlighted-card"
import PaginationController from "../components/pagination/pagination-controller"
import { Helmet } from "react-helmet-async"

const MemoizedPostCard = memo(PostCard)

const Home = () => {
  const currPage = 1
  const navigate = useNavigate()
  const { data: posts, isLoading } = useGetPosts(currPage, "")

  const handlePaginate = (newPage: number) => {
    if (newPage === 1) {
      navigate("/")
    } else {
      navigate(`/page/${newPage}`)
    }
  }

  const memoizedPosts = useMemo(() => {
    return posts?.posts
      ?.filter((post) => post.highlighted)
      .map((post) => {
        return <MemoizedPostCard post={post} key={post._id} />
      })
  }, [posts?.posts])

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <ClipLoader color="#111111" size={40} />
      </div>
    )
  }

  console.log(memoizedPosts)

  return (
    <>
      <Helmet>
        <title>Home | Overland Angola</title>
        <meta
          name="description"
          content="Explore o mundo do overlanding com Overland Angola, seu destino principal para aventuras todo-terreno em Angola. Descubra dicas, roteiros e histórias inspiradoras de exploração."
        />
        <meta
          name="keywords"
          content="Overland Angola, aventuras todo-terreno Angola, exploração Angola, roteiros overland, dicas de overlanding, histórias de exploração"
        />
        <link rel="canonical" href="https://overland-angola-ao.netlify.app/" />
      </Helmet>

      <main className="relative w-full min-h-screen px-8 pb-3 flex-col mt-6">
        <div className="w-full flex gap-10 ">
          <FadeInEffect>
            <div className="flex-[3] min-h-screen">
              <HighlightedCard />
              <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
                {memoizedPosts}
              </div>
            </div>
          </FadeInEffect>

          <aside className="lg:flex flex-col flex-[1] hidden md:hidden">
            <SideBarHome />
          </aside>
        </div>

        <div className="w-full flex items-center justify-center">
          <PaginationController
            totalPages={posts?.pages}
            handlePaginate={handlePaginate}
          />
        </div>
        <GoBackButton />
      </main>
    </>
  )
}

export default Home
