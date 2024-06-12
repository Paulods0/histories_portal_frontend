import { FC } from "react"
import { Link } from "react-router-dom"
import { createMarkup } from "../../utils/helpers"
import { Tip } from "@/api/types"
import LazyImage from "../global/lazy-image"

type Props = {
  post: Tip
}

const PartnerCard: FC<Props> = ({ post }) => {
  const dataContent = createMarkup(post.content)

  return (
    <Link
      to={`/parceiro/${post._id}`}
      className="relative w-full h-fit flex flex-col items-center justify-center"
    >
      <div className="w-full relative">
        <div className="cursor-pointer relative w-full md:h-[350px] lg:h-[270px]">
          <Link className="h-full w-full" to={`/parceiro/${post._id}`}>
            <div className="absolute inset-0 w-full h-full hover:bg-colorGray-light/30 transition-all duration-200 ease-linear" />
            <LazyImage
              id={post._id}
              image={post!!.image}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div>
          <h1 className="text-center font-normal text-[27px] line-clamp-1 font-Oswald mt-2 mb-2">
            {post.title}
          </h1>
        </div>
        <div
          className="text-center text-[15px] font-OpenSans line-clamp-4"
          dangerouslySetInnerHTML={dataContent}
        />

        <div className="flex items-center gap-2 justify-center mt-4">
          <img
            loading="lazy"
            src={post.author!!.image}
            className="w-9 h-9 rounded-full object-contain"
            alt={post.title}
          />
          <div className=" text-center text-colorGray-light font-OpenSans font-normal text-[15px]">
            {`${post.author?.firstname} ${post.author?.lastname} `}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PartnerCard
