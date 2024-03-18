import { useLocation } from "react-router-dom"
import PostCard from "../../components/card/PostCard"
import { useEffect, useState } from "react"
import { IPostData } from "../../api/types"
import { getPostByCategory } from "../../api/apiCalls"
import { ClipLoader } from "react-spinners"

const Passeios = () => {
  const path = useLocation()
  const category_id = path.search.split("=")[1]
  const [isLoading, setIsLoading] = useState(true)

  const [posts, setPosts] = useState<IPostData[]>([])

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const data = await getPostByCategory(category_id)
        setPosts(data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="w-full min-h-screen gap-10 px-12 flex-col ">
      <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
        {isLoading ? (
          <div className="col-span-2 flex items-center justify-center">
            <ClipLoader size={80} color="#1A101F" />
          </div>
        ) : (
          posts?.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </div>
    </div>
  )
}

export default Passeios
