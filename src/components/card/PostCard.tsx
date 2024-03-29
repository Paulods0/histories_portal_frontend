import React from "react"
import { Link } from "react-router-dom"
import { createMarkup, formatarData } from "../../utils/helpers"

interface PostCardProps {
  post: {
    _id: string
    title: string
    author: {
      _id: string
      firstname: string
      lastname: string
    }
    mainImage: string
    content: string
    isHighlighted: boolean
    category: {
      name: string
    }
    createdAt: string
  }
}

const PostCard: React.FC<PostCardProps> = ({
  post: { _id, mainImage, content, author, title, createdAt },
}) => {
  const dataContent = createMarkup(content)
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center">
      <div className="w-full relative">
        <div className="w-full h-[250px] relative">
          <Link to={`/post/${title}__${_id}`}>
            <div className="absolute inset-0 w-full h-full hover:bg-colorGray-light/30 transition-all duration-200 ease-linear" />
            <img
              src={mainImage}
              className="w-full h-full object-cover"
              alt="photo"
            />
          </Link>
        </div>

        <h1 className="text-center font-normal text-[27px] line-clamp-1 font-Oswald mt-2 mb-2">
          {title}
        </h1>
        <p
          className="text-center text-[15px] font-OpenSans line-clamp-4"
          dangerouslySetInnerHTML={dataContent}
        />
        <h5 className=" text-center text-colorGray-light font-OpenSans font-normal text-[15px] mt-2">
          {`${author?.firstname} ${author?.lastname} / ${formatarData(
            createdAt
          )}`}
        </h5>
      </div>
    </div>
  )
}

export default PostCard
