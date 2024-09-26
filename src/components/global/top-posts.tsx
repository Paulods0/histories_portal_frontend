import { Link } from "react-router-dom"
import { Post } from "@/api/post/post.types"

type Props = {
  post: Post
}

const TopPosts = ({ post }: Props) => {
  return (
    <div className="w-full flex items-center text-black gap-3">
      <div className="w-full flex flex-col justify-center gap-2">
        <h2 className="text-black font-semibold font-Roboto line-clamp-3">
          {post.title}
        </h2>
        <div className="flex flex-col gap-1">
          <Link
            to={`/post/${post._id}`}
            className="text-xs underline font-semibold"
          >
            Ler mais
          </Link>
        </div>
      </div>

      <img
        src={post.mainImage}
        className="h-32 w-36 object-cover"
        alt="post-imagem"
        loading="lazy"
      />
    </div>
  )
}

export default TopPosts
