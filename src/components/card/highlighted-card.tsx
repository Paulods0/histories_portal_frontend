import { Link } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { createMarkup, formateData } from "../../utils/helpers"
import { useGetHighlightedPost } from "@/lib/tanstack-query/post/query"

const HighlightedCard = () => {
  const { data: post, isLoading } = useGetHighlightedPost()

  if (isLoading) {
    return (
      <main className="w-full h-[300px] md:h-[415px] flex items-start gap-4 flex-col justify-center mb-4">
        <div className="w-full h-20 bg-zinc-200" />
        <div className="w-full h-full relative flex items-center bg-zinc-200  justify-center">
          <ClipLoader size={24} color="#fff" />
        </div>
      </main>
    )
  }

  if (!post) return null

  const dataContent = createMarkup(post?.content)
  const formatedDate = formateData(post?.date)

  return (
    <div className="w-full flex flex-col mb-12 items-center justify-center">
      <h1 className="text-[41px] lg:line-clamp-2 text-center text-[#111111] font-Oswald font-normal">
        {post?.title}
      </h1>
      <h5 className="text-[15px] mb-6 text-[#AAAAAA] font-OpenSans font-normal text-center">
        {`${post?.author?.firstname} ${post?.author?.lastname} / ${formatedDate}`}
      </h5>
      <Link
        to={`/post/${post?._id}`}
        className="w-full h-[300px] md:h-[415px] relative"
      >
        <img
          src={post?.mainImage}
          alt={post?.title}
          className="absolute object-cover inset-0 w-full h-full"
        />
      </Link>
      <div
        className="text-center line-clamp-3 text-[15px] font-OpenSans my-6"
        dangerouslySetInnerHTML={dataContent}
      />

      <button className="py-3 w-[150px] font-OpenSans hover:w-[170px] hover:bg-blueColor/80 duration-200 font-semibold transition-all ease-in text-center text-white uppercase text-[14px] bg-blueColor">
        <Link to={`/post/${post?._id}`}>Ver Post</Link>
      </button>
    </div>
  )
}

export default HighlightedCard
