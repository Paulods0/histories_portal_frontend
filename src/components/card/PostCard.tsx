import React from "react"
import { Link } from "react-router-dom"
import { createMarkup } from "../../utils"

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
    <div className="relative w-full h-[600px] flex flex-col items-center justify-center">
      <div className="inset-0 absolute w-full">
        <div className=" w-full h-[250px] ">
          <Link to={`/post/${_id}`}>
            <img
              src={mainImage}
              className="w-full h-full object-cover"
              alt="photo"
            />
          </Link>
        </div>
        <h1 className="text-center font-bold text-[22px] mt-2 mb-2">{title}</h1>
        <p
          className="text-center text-[15px]"
          dangerouslySetInnerHTML={dataContent}
        />
        <h5 className=" text-center text-[#D0D0D0] text-[16px] mt-2">
          {subtitle}
        </h5>
      </div>
    </div>
  )
}

export default PostCard
