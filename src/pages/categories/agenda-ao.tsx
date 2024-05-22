import { Link } from "react-router-dom"
import { PiDownloadSimpleThin } from "react-icons/pi"
import { useGetSchedulePost } from "@/lib/react-query"
import { ClipLoader } from "react-spinners"
import { formateData } from "@/utils/helpers"
import FadeInEffect from "@/components/motion/fade-in"
import { useState } from "react"
import PaginationController from "@/components/pagination/pagination-controller"

const AgendaAo = () => {
  const [page, setPage] = useState(1)
  const { data: posts, isLoading } = useGetSchedulePost(page)

  if (isLoading) {
    return (
      <main className="w-full flex items-center justify-center h-full">
        <ClipLoader size={40} color="#111111" />
      </main>
    )
  }

  if (posts?.posts.length === 0) {
    return (
      <main className="w-full flex items-center justify-center">
        <h1>Não há posts ainda.</h1>
      </main>
    )
  }

  const handlePaginate = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <div className="w-full min-h-screen gap-8 flex-col mb-4">
      <FadeInEffect>
        <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-1 gap-8">
          {posts?.posts.map((post, index) => (
            <Link
              key={index}
              className=" w-full flex relative flex-col group p-4 items-center hover:bg-zinc-100 transition-all duration-200 ease-in-out justify-center  border rounded-md"
              to={post.file}
              download
              target="_blank"
            >
              <PiDownloadSimpleThin
                size={20}
                className="absolute hidden transition-all duration-200 ease-in-out group-hover:block top-2 right-2"
              />
              <div className="relative w-[80px] h-[110px]">
                <img
                  src="/others/pdf-image.png"
                  className="absolute w-full h-full object-cover"
                  alt={post.title}
                />
              </div>
              <div className="relative flex w-full  justify-center">
                <h3 className="uppercase self-center text-[14px] font-semibold text-goldenColor">
                  {post.title}
                </h3>

                <span className="text-[13px] flex absolute right-2 text-goldenColor">
                  {formateData(post.createdAt)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </FadeInEffect>
      <PaginationController paginate={handlePaginate} pages={posts!!.pages} />
    </div>
  )
}

export default AgendaAo
