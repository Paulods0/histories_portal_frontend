import { useLocation } from "react-router-dom"
import PostCard from "../components/card/post-card"
import SideBar from "../components/sidebar/side-bar"
import { ClipLoader } from "react-spinners"
import SwiperPosts from "../components/global/SwiperPosts"
import { useGetSearchResults } from "@/lib/react-query"

const Search = () => {
  const location = useLocation()
  const search = new URLSearchParams(location.search).get("v")!!
  const decodedSearchValue = decodeURIComponent(search)
  console.log(decodedSearchValue)
  const { data, isLoading } = useGetSearchResults(decodedSearchValue)

  if (isLoading) {
    return (
      <div className="w-full lg:col-span-3 my-12 flex px-12 items-center justify-center">
        <ClipLoader color="#1a101F" size={100} />
      </div>
    )
  }

  if (data?.length == 0) {
    return (
      <main className="w-full flex items-center justify-center">
        <h1>Não há posts ainda.</h1>
      </main>
    )
  }
  const posts = data?.filter((post) =>
    post.title.toLowerCase().includes(search!!)
  )

  return (
    <main className="w-full min-h-screen px-8 pb-10 flex-col mt-6">
      <div className="w-full flex gap-10 ">
        <div className="flex-[3] min-h-screen">
          <div className="place-items-center grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-8">
            {posts?.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
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
