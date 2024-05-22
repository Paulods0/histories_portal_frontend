import { useGetMostLikedPosts } from "@/lib/react-query"
import { ClipLoader } from "react-spinners"
import TopPosts from "../global/top-posts"
import SideSearchBar from "../search/side-search-bar"

const SideBarHome = () => {
  const { data: post, isLoading } = useGetMostLikedPosts()

  if (isLoading) {
    return (
      <main className="w-full text-colorBlack-light flex items-center justify-center">
        <ClipLoader size={20} />
      </main>
    )
  }

  return (
    <div className="flex-[1] hidden lg:flex gap-5 flex-col">
      <SideSearchBar />
      <main className="text-white flex flex-col h-full gap-12 ">
        <img src="/ads/boldy-1.jpeg" alt="" />

        <div className="flex flex-col w-full">
          <h1 className="capitalize text-2xl font-Oswald border-b pb-2 font-semibold text-black">
            Top dos leitores
          </h1>
          <ul className="w-full flex flex-col gap-2">
            {post?.map((post) => (
              <li key={post._id} className="border-b pb-1">
                <TopPosts post={post} />
              </li>
            ))}
          </ul>
        </div>

        {/* <img src="/ads/boldy-2.jpeg" alt="" />
        <img src="/ads/vert.jpeg" alt="" />
        <img src="/ads/xm-1.gif" alt="" />
        <img src="/ads/xm-2.jpeg" alt="" /> */}
      </main>
    </div>
  )
}

export default SideBarHome
