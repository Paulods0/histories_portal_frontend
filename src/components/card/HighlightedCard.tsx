import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getHighlightedPost } from "../../api"
import { IPostData } from "../../api/types"
import { createMarkup, formatarData } from "../../utils/helpers"
import { ClipLoader } from "react-spinners"

const HighlightedCard = () => {
  const [
    { _id, author, content, createdAt, mainImage, title },
    setHighlightedPost,
  ] = useState<IPostData>({} as IPostData)
  const [isLoading, setIsLoading] = useState(true)
  const dataContent = createMarkup(content)
  const formatedDate = createdAt ? formatarData(createdAt) : ""

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHighlightedPost()
      setHighlightedPost(data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Link
      to={`/post/${title}__${_id}`}
      className="w-full flex flex-col mb-12 items-center justify-center"
    >
      <h1 className="text-[41px] line-clamp-2 text-center text-[#111111] font-Oswald font-normal">
        {title}
      </h1>
      <h5 className="text-[15px] mb-6 text-[#AAAAAA] font-OpenSans font-normal text-center">
        {`${author?.firstname} ${author?.lastname} / ${formatedDate}`}
      </h5>
      <div className="w-full h-[415px] relative">
        <img
          src={mainImage}
          alt="photo"
          className="absolute object-cover inset-0 w-full h-full"
        />
      </div>
      <div
        className="text-center line-clamp-4 text-[15px] font-OpenSans my-6"
        dangerouslySetInnerHTML={dataContent}
      />

      <button
        onClick={() => (window.location.href = `/post/${title}__${_id}`)}
        // to={}
        className="py-3 w-[150px] font-OpenSans hover:w-[170px] hover:bg-colorGray-light duration-200 font-semibold transition-all ease-in text-center text-white uppercase text-[14px] bg-colorGray-dark"
      >
        View Post
      </button>
    </Link>
  )
}

export default HighlightedCard
