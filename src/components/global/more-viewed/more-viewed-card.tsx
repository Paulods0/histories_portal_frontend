import { Link } from "react-router-dom"
import { Post } from "@/api/post/post.types"
import { createMarkup, formateData } from "../../../utils/helpers"

const MoreViewedCard = ({ post }: { post: Post }) => {
  const content = createMarkup(post.content)
  const date = formateData(post?.date)

  return (
    <Link
      to={`/post/${post._id}`}
      className="h-[200px] w-[300px] cursor-pointer hover:-translate-y-[2px] duration-200 transition-all ease-linear flex flex-col pb-2 rounded-md border border-colorGray-light/20"
    >
      <div className="relative w-full h-[150px]">
        <img
          loading="lazy"
          src={post?.mainImage}
          className="absolute w-full h-full object-cover rounded-t-md inset-0"
          alt="post-imagem"
        />

        <h4 className="absolute top-1 right-1 text-xs text-white italic font-semibold">
          {date}
        </h4>
        <h1 className="font-bold absolute bottom-1 text-white line-clamp-1 left-1">
          {post.title}
        </h1>
      </div>
      <div className="flex flex-col w-full text-black p-2">
        <p className="line-clamp-1" dangerouslySetInnerHTML={content} />
      </div>
    </Link>
  )
}

export default MoreViewedCard
