import React, { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { IPostData } from "../api/types"
import { useParams } from "react-router-dom"
import PaginationController from "../components/pagination/PaginationController"
import SideBar from "../components/sidebar/SideBar"
import PostCard from "../components/card/PostCard"

const UserPosts = () => {
  const { userId } = useParams()

  const [posts, setPosts] = useState<IPostData[]>([])
  const [pages, setPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleNavigate = (page: number) => {
    if (page === 1) {
      window.location.href = "/"
    } else {
      window.location.href = `/page/${page}`
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
      const response = await fetch(
        `http://localhost:8080/api/post/get/userposts/${userId}`
      )
      const data = await response.json()
      setPosts(data)
      setIsLoading(false)
    }
    fetchData()
  }, [userId])
  return (
    <main className="w-full">
      <main className="w-full px-8 pb-3 flex-col mt-6">
        <div className="w-full flex gap-10 ">
          <div className="flex-[3] ">
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

        <div className="w-full flex items-center justify-center">
          <PaginationController handleNavigate={handleNavigate} pages={pages} />
        </div>
      </main>
    </main>
  )
}

export default UserPosts
