import PostCard from "../components/card/PostCard"
import SideBar from "../components/sidebar/SideBar"
import PaginationController from "../components/pagination/PaginationController"
import { useEffect, useState } from "react"
import { getPostsAndPagination } from "../api"
import { IPostData } from "../api/types"
import HighlightedCard from "../components/card/HighlightedCard"
import { ClipLoader } from "react-spinners"
import GoBackButton from "../components/GoBackButton"

const Home = () => {
  const [posts, setPosts] = useState<IPostData[]>([])
  const [pages, setPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleNavigate = (page: number) => {
    if (page === 1) {
      window.location.href = "/"
    } else {
      window.location.href = `page/${page}`
    }
  }
  if (!posts) {
    return (
      <div className="w-full my-12 flex items-center justify-center">
        <div className="self-center">
          <ClipLoader color="#1a101F" size={100} />
        </div>
      </div>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const data = await getPostsAndPagination(1)
      setPosts(data.posts)
      setPages(data.pages)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center h-12">
        <ClipLoader color="#111111" size={40} />
      </div>
    )
  }

  return (
    <main className="w-full min-h-screen px-8 pb-3 flex-col mt-6">
      <div className="w-full flex gap-10 ">
        <div className="flex-[3] min-h-screen">
          {/** FIRST CARD TO SHOW UP */}
          <HighlightedCard />
          <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>

        <aside className="lg:flex flex-col flex-[1] hidden md:hidden">
          <SideBar />
        </aside>
      </div>

      <div className="w-full flex items-center justify-center">
        <PaginationController handleNavigate={handleNavigate} pages={pages} />
      </div>

      <GoBackButton />
    </main>
  )
}

export default Home
