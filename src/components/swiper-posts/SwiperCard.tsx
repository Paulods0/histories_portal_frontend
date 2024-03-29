import { Link, useNavigate } from "react-router-dom"
import { IPostData } from "../../api/types"
import { createMarkup } from "../../utils/helpers"

const SwiperCard = ({ post }: { post: IPostData }) => {
  const content = createMarkup(post.content)
  const navigate = useNavigate()
  const navigateToDetailPage = () => {
    navigate(`/post/${post?.title}__${post?._id}`)
    window.scrollTo(0, 0)
  }
  return (
    <div
      onClick={navigateToDetailPage}
      className="h-[200px] cursor-pointer hover:-translate-y-[2px] duration-200 transition-all ease-linear w-[200px] flex flex-col pb-2 rounded-md border border-colorGray-light/20"
    >
      <Link to={`/post/${post.title}__${post._id}`}>
        <div className="relative w-full h-[100px]">
          <img
            src={post?.mainImage}
            className="absolute w-full h-full object-cover rounded-t-md inset-0"
            alt=""
          />
          <h1 className="absolute line-clamp-2 bottom-1 text-[16px] left-2 text-white font-Roboto font-semibold">
            {post.title}
          </h1>
        </div>
        <div className="p-2 w-full flex flex-col  font-Roboto">
          <h1 className="text-colorGray-light font-semibold text-[12px] ">
            {post.createdAt.split("T")[0]}
          </h1>
          <p
            className="text-colorBlack-dark line-clamp-3 w-full text-[14px] font-normal"
            dangerouslySetInnerHTML={content}
          />
        </div>
      </Link>
    </div>
  )
}

export default SwiperCard
