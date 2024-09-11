import { memo, useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { ClipLoader } from "react-spinners"
import { useGetTips } from "@/lib/react-query"
import TipCard from "@/components/card/tip-card"
import { useSearchParams } from "react-router-dom"
import FadeInEffect from "@/components/motion/fade-in"
import SwiperPosts from "@/components/global/SwiperPosts"

const MemoTipCard = memo(TipCard)

const TipsPage = () => {
  const [page, _] = useSearchParams({ page: "1" })
  const currPage = Number(page.get("page"))

  const { data: posts, isLoading } = useGetTips(currPage)

  const memoPosts = useMemo(() => {
    return posts?.posts.map((post) => (
      <MemoTipCard post={post} key={post._id} />
    ))
  }, [posts?.posts])

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
        <title>Dicas | Overland</title>
        <meta
          name="description"
          content="área de partilha de informação
          útil para overlanders, viajantes, manutenções, dicas off-road,
          informações uteis para quem faz do overland um modo de vida."
        />
      </Helmet>
      <div className="w-full min-h-screen px-4 gap-10 lg:px-12 flex-col">
        <h1 className="my-12 font-Oswald w-full lg:w-[800px] lg:mx-auto md:text-3xl text-2xl">
          Esta secção é dedicada a dicas! É uma área de partilha de informação
          útil para overlanders, viajantes, manutenções, dicas off-road,
          informações uteis para quem faz do overland um modo de vida! Podes
          sempre colaborar connosco, basta preencheres na aba “Escreve para nós”
          nós analisaremos e mediante o nosso parecer publicaremos.
        </h1>
        <FadeInEffect>
          {memoPosts?.length === 0 ? (
            <div className="w-full flex mt-6 items-center justify-center">
              <h1>Não há nada ainda.</h1>
            </div>
          ) : (
            <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
              {memoPosts}
            </div>
          )}
        </FadeInEffect>

        <div className="mt-12">
          <div className="flex flex-col self-start">
            {/* <PaginationController pages={posts!!.pages} /> */}
          </div>
          <SwiperPosts />
        </div>
      </div>
    </>
  )
}

export default TipsPage
