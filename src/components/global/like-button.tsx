import { useState } from "react"
import { BsStar } from "react-icons/bs"
import { BsStarFill } from "react-icons/bs"
import { useDeslikePost, useLikePost } from "@/lib/tanstack-query/post/mutation"

const LikeButton = ({ postId }: { postId: string }) => {
  const { mutateAsync: likePost } = useLikePost()
  const { mutateAsync: deslikePost } = useDeslikePost()

  const [likes, setLikes] = useState(0)
  const [clicked, setClicked] = useState(false)

  const handleLike = async () => {
    try {
      const like = await likePost(postId)
      setClicked(true)
      setLikes(like)
    } catch (error) {
      console.error(error)
    }
  }
  const handleDeslike = async () => {
    try {
      const like = await deslikePost(postId)
      setClicked(false)
      setLikes(like)
    } catch (error) {
      console.error(error)
    }
  }

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const data = await getSinglePost(postId)
  //     setLikes(data.rating)
  //   }
  //   fetchPost()
  // }, [clicked])

  return (
    <div className="flex gap-x-2 items-center">
      <button onClick={clicked ? handleDeslike : handleLike}>
        {clicked ? (
          <BsStarFill fill="#9d9d9d" />
        ) : (
          <BsStar className="text-zinc-400" />
        )}
      </button>
      <p className="text-zinc-400">{likes}</p>
    </div>
  )
}

export default LikeButton
