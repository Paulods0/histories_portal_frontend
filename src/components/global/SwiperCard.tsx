import { Link } from "react-router-dom"
import { Post } from "../../api/types"
import { createMarkup, formateData } from "../../utils/helpers"

const SwiperCard = ({ post }: { post: Post }) => {
  const content = createMarkup(post.content)
  const date = formateData(post?.createdAt)
  // const navigateToDetailPage = () => {
  //   window.location.href = `/post/${post._id}`
  // }

  return (
    <Link
      to={`/post/${post._id}`}
      className="h-[200px] w-[200px] cursor-pointer hover:-translate-y-[2px] duration-200 transition-all ease-linear flex flex-col pb-2 rounded-md border border-colorGray-light/20"
    >
      <div>
        <div className="relative w-full h-[100px]">
          <img
            loading="lazy"
            src={post?.mainImage}
            className="absolute w-full h-full object-cover rounded-t-md inset-0"
            alt="post-imagem"
          />
          <h1 className="absolute line-clamp-2 bottom-1 text-[16px] left-2 text-white font-Roboto font-semibold">
            {post.title}
          </h1>
        </div>
        <div className="p-2 w-full flex flex-col  font-Roboto">
          <h1 className="text-colorGray-light font-semibold text-[12px] ">
            {date}
          </h1>
          <p
            className="text-colorBlack-dark line-clamp-3 w-full text-[14px] font-normal"
            dangerouslySetInnerHTML={content}
          />
        </div>
      </div>
    </Link>
  )
}

export default SwiperCard
