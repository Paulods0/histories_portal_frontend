import { ClipLoader } from "react-spinners"
import ClassifiedCard from "../../components/global/classified-card"
import { useGetClassifiedPosts } from "@/lib/react-query"
import FadeInEffect from "@/components/motion/fade-in"
import { memo, useMemo } from "react"
import SwiperPosts from "@/components/global/SwiperPosts"
// import PaginationController from "@/components/pagination/pagination-controller"
import { useSearchParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const MemoizedClassifiedCard = memo(ClassifiedCard)

const Classificados = () => {
  const [page, _] = useSearchParams({ page: "1" })
  const currentPage = Number(page.get("page"))
  const { data: posts, isLoading } = useGetClassifiedPosts(currentPage)

  // const handlePaginate = (newPage: number) => {
  //   setPage((prev) => {
  //     prev.set("page", String(newPage))
  //     return prev
  //   })
  //   window.scrollTo(0, 0)
  // }

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

  return (
    <>
      <Helmet>
        <title>Classificados | Overland Angola</title>
        <meta name="description" content={`Veja classificados no Overland`} />
      </Helmet>
      <div className="w-full min-h-screen gap-10 lg:px-12 lg:mb-12 flex-col">
        <p className="w-full items-center text-justify gap-x-3 flex font-normal lg:text-xl text-base font-Oswald mt-6 mb-10">
          Queres vender/comprar algum artigo? Então estás no lugar certo!
          Anuncia connosco de forma gratuita, preenche os dados na opção quero
          comprar ou quero vender, nós iremos analisar e publicamos! Os anúncios
          têm uma duração limitada, porém se deres indicação que a operação foi
          realizada com sucesso será eliminado. Todos os anúncios após 45 dias
          serão eliminados da página, podes sempre solicitar para o anúncio ser
          reposto na montra. Esta plataforma de anúncios compra/venda é
          exclusiva para os membros da comunidade Clube Overland Angola. Tens um
          negócio profissional? Queres anunciar connosco? Entra em contacto na
          opção “Quero ver vosso”.
        </p>

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
        {/* <PaginationController pages={posts!!.pages} paginate={handlePaginate} /> */}
        <SwiperPosts />
        <p className="w-full items-center text-justify gap-x-3 flex font-normal lg:text-xl text-base font-Oswald mt-6 mb-10">
          Nota: O sistema de classificados é uma montra digital gratuita e
          dedicada a pessoas singulares com foco nos negócios de ocasião,
          exclusivo a membros da comunidade Clube Overland Angola. Está vedado o
          uso para profissionais. Os negócios são efectuados entre os membros da
          comunidade ponto-a-ponto, o site Overland Angola, afastasse de
          qualquer responsabilidade nas transações. Em caso de alguma
          irregularidade deves contactar sempre o vendedor ou comprador. No caso
          de haver má fé, o Overland Angola reserva-se ao direito de banir os
          anúncios fraudulentos bem como banir o membro da comunidade.
        </p>
      </div>
    </>
  )
}

export default Classificados
