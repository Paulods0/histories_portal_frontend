import { Post } from "@/api/types"
import { Link } from "react-router-dom"

type Props = {
  post: Post
}

const TopPosts = ({ post }: Props) => {
  return (
    <Link to={`/post/${post._id}`}>
      <div className="w-full flex items-start text-black gap-3">
        <div className="w-full flex flex-col justify-start gap-2">
          <span className="text-xs underline font-semibold">
            {post.category.name}
          </span>
          <h2 className="text-black font-semibold font-Roboto line-clamp-2">
            {post.title}
          </h2>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">{`${post.author.firstname} ${post.author.lastname}`}</span>
            <div className="space-x-2 text-xs">
              <span className="underline">views</span>
              <span>{post.rating}</span>
            </div>
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
