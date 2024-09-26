import { memo, useMemo } from "react"
import { ClipLoader } from "react-spinners"
import { useSearchParams } from "react-router-dom"
import { useGetPartners } from "@/lib/tanstack-query/partner"
import FadeInEffect from "@/components/motion/fade-in"
import PartnerCard from "@/components/card/partner-card"
import { Helmet } from "react-helmet-async"
import MoreViewedContainer from "@/components/global/more-viewed/more-viewed-container"

const MemoPostCard = memo(PartnerCard)

const PartnersPage = () => {
  const [page, _] = useSearchParams({ page: "1" })
  const currPage = Number(page.get("page"))

  const { data: posts, isLoading } = useGetPartners(currPage)

  const memoPosts = useMemo(() => {
    return posts?.partners?.map((post) => (
      <MemoPostCard post={post} key={post._id} />
    ))
  }, [posts?.partners])

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
        <title>Parceiros | Overland</title>
        <meta name="description" content="Parceiros Overland." />
      </Helmet>
      <div className="w-full min-h-screen gap-10 px-4 lg:px-12 flex-col">
        <FadeInEffect>
          {memoPosts?.length === 0 ? (
            <div className="w-full flex items-center justify-center mt-6">
              <h1>Nenhum post ainda.</h1>
            </div>
          ) : (
            <div className="place-items-center grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-12 gap-8">
              {memoPosts}
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

export default PartnersPage
