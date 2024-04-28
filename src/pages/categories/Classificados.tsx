import { ClipLoader } from "react-spinners"
import ClassifiedCard from "../../components/classified-card"
import { useGetClassifiedPosts } from "@/lib/react-query"
import FadeInEffect from "@/components/motion/fade-in"

const Classificados = () => {
  const { data: posts, isLoading } = useGetClassifiedPosts()

  if (isLoading) {
    return (
      <main className="w-full flex items-center justify-center h-full">
        <ClipLoader size={40} color="#111111" />
      </main>
    )
  }
  if (posts?.length === 0) {
    return (
      <main className="w-full flex items-center justify-center h-full">
        <h1>Não há nenhum post ainda.</h1>
      </main>
    )
  }

  return (
    <div className="w-full min-h-screen gap-10 px-12 flex-col ">
      <div className="w-full items-center gap-x-3 flex mb-4"></div>
      <FadeInEffect>
        <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
          {isLoading ? (
            <div className="col-span-2 flex items-center justify-center">
              <ClipLoader size={80} color="#1A101F" />
            </div>
          ) : (
            posts!!.map((post) => <ClassifiedCard key={post._id} post={post} />)
          )}
        </div>
      </FadeInEffect>
    </div>
  )
}

export default Classificados
