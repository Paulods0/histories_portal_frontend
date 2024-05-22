import { Post } from "@/api/types"
import { Link } from "react-router-dom"

type Props = {
  post: Post
}

const TopPosts = ({ post }: Props) => {
  return (
    <Link to={`/post/${post._id}`}>
      <div className="w-full flex items-center text-black gap-3">
        <div className="w-full flex flex-col justify-center gap-2">
          <h2 className="text-black font-semibold font-Roboto line-clamp-3">
            {post.title}
          </h2>
          <div className="flex flex-col gap-1">
            {/* <span className="text-sm font-medium">{`${post.author.firstname} ${post.author.lastname}`}</span> */}
            {/* <span className="text-sm font-medium">{post.category}</span> */}
            <span className="text-xs underline font-semibold">
              {post.category}
            </span>
          </div>
        </div>

        <img
          src={post.mainImage}
          className="h-32 w-36 object-cover"
          alt="post-imagem"
          loading="lazy"
        />
      </div>
    </Link>
  )
}

export default TopPosts
