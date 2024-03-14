import PostCard from "../components/card/PostCard"
import SideBar from "../components/sidebar/SideBar"
import PaginationController from "../components/pagination/PaginationController"
import { useEffect, useState } from "react"
import { getAllPosts } from "../api/apiCalls"
import { IPostData } from "../api/types"
import HighlightedCard from "../components/card/HighlightedCard"
import { ClipLoader } from "react-spinners"

const Home = () => {
  const [posts, setPosts] = useState<IPostData[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const postsPerPage = 4

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
      const data = await getAllPosts()
      setPosts(data)
      setIsLoading(false)
    }
    fetchData()
  }, [currentPage])

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPost: IPostData[] = posts.slice(
    indexOfFirstPost,
    indexOfLastPost
  )

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <main className="w-full min-h-screen px-12 pb-12 flex-col">
      <div className="w-full flex gap-10 ">
        <div className="flex-[3] min-h-screen">
          {/** FIRST CARD TO SHOW UP */}
          <HighlightedCard />
          <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
            {isLoading ? (
              <div className="w-full lg:col-span-3 my-12 flex items-center justify-center">
                <div>
                  <ClipLoader color="#1a101F" size={100} />
                </div>
              </div>
            ) : (
              currentPost.map((post) => <PostCard key={post._id} post={post} />)
            )}
          </div>
        </div>

        <aside className="lg:flex flex-col flex-[1] hidden md:hidden">
          <SideBar />
        </aside>
      </div>

      <PaginationController
        paginate={paginate}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
      />
    </main>
  )
}

export default Home
