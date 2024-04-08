import { useEffect, useState } from "react"
import { IPostData } from "../../api/types"
import SwiperCard from "./SwiperCard"
import { getMostViewedPosts } from "../../api"
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
      <div className="lg:w-[65vw] w-[80vw] flex md:w-full self-start scroll mt-2 overflow-x-auto scroll-bar py-3 lg:flex gap-2 ">
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
