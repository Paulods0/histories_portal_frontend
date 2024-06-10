import { SchedulePost } from "@/api/types"
import { formateData } from "@/utils/helpers"
import React from "react"
import { PiDownloadSimpleThin } from "react-icons/pi"
import { Link } from "react-router-dom"

type Props = {
  post: SchedulePost
}

const AgendaCard: React.FC<Props> = ({ post }) => {
  return (
    <Link
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
        <h3 className="uppercase self-center text-[14px] font-semibold text-orangeColor">
          {post.title}
        </h3>

        <span className="text-[13px] flex absolute right-2 text-orangeColor">
          {formateData(post.createdAt)}
        </span>
      </div>
    </Link>
  )
}

export default AgendaCard
