import { ClipLoader } from "react-spinners"
import { memo, useMemo, useState } from "react"
import FadeInEffect from "@/components/motion/fade-in"
import { useGetSchedulePost } from "@/lib/react-query"
import AgendaCard from "@/components/card/agenda-card"
import SwiperPosts from "@/components/global/SwiperPosts"
import PaginationController from "@/components/pagination/pagination-controller"
import { Helmet } from "react-helmet-async"

const MemoizedAgendaCard = memo(AgendaCard)

const AgendaAo = () => {
  const [page, setPage] = useState(1)
  const { data: posts, isLoading } = useGetSchedulePost(page)

  const memoizedPosts = useMemo(() => {
    return posts?.posts.map((post, index) => (
      <MemoizedAgendaCard post={post} key={index} />
    ))
  }, [posts?.posts])

  if (isLoading) {
    return (
      <main className="w-full flex items-center justify-center h-full">
        <ClipLoader size={40} color="#111111" />
      </main>
    )
  }

  const handlePaginate = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <>
      <Helmet>
        <title>Agenda AO | Overland Angola</title>
        <meta name="description" content={`Veja agenda ao no Overland`} />
      </Helmet>

      <div className="w-full min-h-screen gap-8 flex-col mb-4">
        <FadeInEffect>
          {memoizedPosts?.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-cenrer">
              <h1>Não há nenhum post ainda.</h1>
            </div>
          ) : (
            <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-1 gap-8">
              {memoizedPosts}
            </div>
          )}
          <PaginationController
            paginate={handlePaginate}
            pages={posts!!.pages}
          />
        </FadeInEffect>

        <SwiperPosts />
      </div>
    </>
  )
}

export default AgendaAo
