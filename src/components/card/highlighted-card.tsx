// import { Link } from "react-router-dom"
import { createMarkup, formateData } from "../../utils/helpers"
import { ClipLoader } from "react-spinners"
import { useGetHighlightedPost } from "@/lib/react-query"

const HighlightedCard = () => {
  const { data: post, isLoading } = useGetHighlightedPost()

  const dataContent = createMarkup(post?.content)
  const formatedDate = post?.createdAt ? formateData(post?.createdAt) : ""

  if (isLoading) {
    return (
      <main className="w-full h-44 flex items-center justify-center">
        <ClipLoader size={40} color="#111111" />
      </main>
    )
  }

  if (!post) {
    return
  }

  return (
    <a
      href={`/post/${post?._id}`}
      className="w-full flex flex-col mb-12 items-center justify-center"
    >
      <h1 className="text-[41px] line-clamp-2 text-center text-[#111111] font-Oswald font-normal">
        {post?.title}
      </h1>
      <h5 className="text-[15px] mb-6 text-[#AAAAAA] font-OpenSans font-normal text-center">
        {`${post?.author?.firstname} ${post?.author?.lastname} / ${formatedDate}`}
      </h5>
      <div className="w-full h-[415px] relative">
        <img
          src={post?.mainImage}
          alt="photo"
          className="absolute object-cover inset-0 w-full h-full"
        />
      </div>
      <div
        className="text-center line-clamp-4 text-[15px] font-OpenSans my-6"
        dangerouslySetInnerHTML={dataContent}
      />

      <button
        onClick={() => (window.location.href = `/post/${post?._id}`)}
        className="py-3 w-[150px] font-OpenSans hover:w-[170px] hover:bg-colorGray-light duration-200 font-semibold transition-all ease-in text-center text-white uppercase text-[14px] bg-colorGray-dark"
      >
        Ver Post
      </button>
    </a>
  )
}

export default HighlightedCard
