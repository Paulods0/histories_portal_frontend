import React from "react"
import { Link } from "react-router-dom"
import { createMarkup } from "../../utils/helpers"

interface PostCardProps {
  post: {
    _id: string
    title: string
    subtitle: string
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
  post: { _id, mainImage, content, subtitle, title },
}) => {
  const dataContent = createMarkup(content.substring(0, 220))
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

        <h1 className="text-center font-normal text-[27px] font-Oswald mt-2 mb-2">
          {title}
        </h1>
        <p
          className="text-center text-[15px] font-OpenSans"
          dangerouslySetInnerHTML={dataContent}
        />
        <h5 className=" text-center text-colorGray-light font-OpenSans font-normal text-[15px] mt-2">
          {subtitle}
        </h5>
      </div>
    </div>
  )
}

export default PostCard
