import { useGetMostLikedPosts } from "@/lib/react-query"
import { ClipLoader } from "react-spinners"
import TopPosts from "../global/top-posts"
import SideSearchBar from "../search/side-search-bar"

const SideBarHome = () => {
  const { data: post, isLoading } = useGetMostLikedPosts()

  if (isLoading) {
    return (
      <section className="w-[270px] flex flex-col gap-4 mt-2">
        <SideSearchBar />
        {Array.from({ length: 3 })?.map((_, index) => (
          <div key={index} className="border-b pb-1 w-full">
            <div className="relative w-full bg-zinc-300 h-[250px]">
              <ClipLoader
                size={20}
                color="#fff"
                className="absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-1/2 z-20"
              />
            </div>
          </div>
        ))}
      </section>
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
      </main>
    </div>
  )
}

export default SideBarHome
