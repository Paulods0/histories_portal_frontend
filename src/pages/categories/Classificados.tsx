import { ClipLoader } from "react-spinners"
import ClassifiedCard from "../../components/global/classified-card"
import { useGetClassifiedPosts } from "@/lib/react-query"
import FadeInEffect from "@/components/motion/fade-in"
import { memo, useMemo } from "react"
import SwiperPosts from "@/components/global/SwiperPosts"
import PaginationController from "@/components/pagination/pagination-controller"
import { useSearchParams } from "react-router-dom"
// import { useLocation } from "react-router-dom"

const MemoizedClassifiedCard = memo(ClassifiedCard)

const Classificados = () => {
  // const path = useLocation()
  // const currPage = parseInt(path.search.split("=")[1]) || 1
  const [page, setPage] = useSearchParams({ page: "1" })
  const currentPage = Number(page.get("page"))
  const { data: posts, isLoading } = useGetClassifiedPosts(currentPage)

  const handlePaginate = (newPage: number) => {
    setPage((prev) => {
      prev.set("page", String(newPage))
      return prev
    })
    window.scrollTo(0, 0)
  }

  const memoizedPosts = useMemo(() => {
    return posts?.posts
      .filter((post) => post.status === "active")
      .map((post) => <MemoizedClassifiedCard post={post} key={post._id} />)
  }, [posts?.posts])

  if (isLoading) {
    return (
      <main className="w-full flex items-center justify-center h-full">
        <ClipLoader size={40} color="#111111" />
      </main>
    )
  }

  // const handlePaginate = (newPage: number) => {
  //   window.location.href = `?page=${newPage}`
  // }

  return (
    <div className="w-full min-h-screen gap-10 lg:px-12 lg:mb-12 flex-col ">
      <div className="w-full items-center gap-x-3 flex mb-4"></div>
      <FadeInEffect>
        {memoizedPosts?.length === 0 ? (
          <div className="flex items-center justify-center mt6">
            <h1>Não há nenhum post ainda.</h1>
          </div>
        ) : (
          <div className="place-items-center grid md:grid-cols-2 grid-cols-1 w-full lg:grid-cols-2 gap-8">
            {memoizedPosts}
          </div>
        )}
      </FadeInEffect>
      <PaginationController pages={posts!!.pages} paginate={handlePaginate} />
      <SwiperPosts />
    </div>
  )
}

export default Classificados
