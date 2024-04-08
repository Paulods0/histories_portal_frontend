import { useLocation } from "react-router-dom"
import HomeCategoryControlller from "../components/home_category/HomeCategoryControlller"
import { useEffect, useState } from "react"
import { IPostData } from "../api/types"
import { getSearchedPosts } from "../api"
import PostCard from "../components/card/PostCard"
import SideBar from "../components/sidebar/SideBar"
import { ClipLoader } from "react-spinners"
import SwiperPosts from "../components/swiper-posts/SwiperPosts"

const Search = () => {
  const location = useLocation()
  const search = new URLSearchParams(location.search).get("v")
  console.log(search)
  const [posts, setPosts] = useState<IPostData[]>([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSearchedPosts(search!!)
      setPosts(data.data)
      setIsLoading(false)
    }
    fetchData()
  }, [search])
  return (
    <main className="w-full min-h-screen px-8 pb-10 flex-col mt-6">
      <div className="w-full flex gap-10 ">
        <div className="flex-[3] min-h-screen">
          <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
            {isLoading ? (
              <div className="w-full lg:col-span-3 my-12 flex px-12 items-center justify-center">
                <div>
                  <ClipLoader color="#1a101F" size={100} />
                </div>
              </div>
            ) : (
              posts.map((post) => <PostCard key={post._id} post={post} />)
            )}
          </div>
        </div>

        <aside className="lg:flex flex-col flex-[1] hidden md:hidden">
          <SideBar />
        </aside>
      </div>

      <SwiperPosts />
    </main>
  )
}

export default Search
