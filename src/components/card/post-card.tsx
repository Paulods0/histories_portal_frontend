import { Link } from "react-router-dom"
import { createMarkup, formateData } from "../../utils/helpers"
import { Post } from "@/api/types"
import LazyImage from "../global/lazy-image"

type Props = {
  post: Post
}

const PostCard = ({
  post: { _id, mainImage, content, author, title, createdAt },
}: Props) => {
  const dataContent = createMarkup(content)
  const date = formateData(createdAt)
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center">
      <div className="w-full relative">
        <div className="cursor-pointer relative w-full md:h-[350px] lg:h-[320px]">
          <Link className="h-full w-full" to={`/post/${_id}`}>
            <div className="absolute inset-0 w-full h-full hover:bg-colorGray-light/30 transition-all duration-200 ease-linear" />
            <LazyImage
              id={_id}
              image={mainImage}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <Link to={`/post/${_id}`}>
          <h1 className="text-center font-normal text-[27px] line-clamp-1 font-Oswald mt-2 mb-2">
            {title}
          </h1>
        </Link>
        <p
          className="text-center text-[15px] font-OpenSans line-clamp-4"
          dangerouslySetInnerHTML={dataContent}
        />

        <div className="flex items-center gap-2 justify-center mt-4">
          <img
            loading="lazy"
            src={author!!.image}
            className="w-9 h-9 rounded-full object-contain"
            alt={title}
          />
          <Link
            to={`/post/user/${author._id}`}
            className=" text-center text-colorGray-light font-OpenSans font-normal text-[15px]"
          >
            {`${author?.firstname} ${author?.lastname} / ${date}`}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
