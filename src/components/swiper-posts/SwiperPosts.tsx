import { useEffect, useState } from "react"
import { IPostData } from "../../api/types"
import SwiperCard from "./SwiperCard"
import { getMostViewedPosts } from "../../api/apiCalls"
import { Link } from "react-router-dom"

const SwiperPosts = () => {
  const [posts, setPosts] = useState<IPostData[]>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMostViewedPosts()
      setPosts(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <div className="w-[820px] self-start scroll mt-2 overflow-x-auto scroll-bar py-3 flex gap-2 ">
        {posts?.map((post, index) => (
          <div key={index}>
            <SwiperCard post={post} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SwiperPosts
