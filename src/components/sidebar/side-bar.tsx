import SideSearchBar from "../search/side-search-bar"

const SideBar = () => {
  return (
    <div className="flex-[1] hidden lg:flex gap-5 flex-col">
      <SideSearchBar />
      <main className="text-white flex flex-col h-full gap-12 ">
        {/* <img src="/ads/boldy-1.jpeg" alt="" />
        <img src="/ads/boldy-2.jpeg" alt="" />
        <img src="/ads/vert.jpeg" alt="" />
        <img src="/ads/xm-1.gif" alt="" />
        <img src="/ads/xm-2.jpeg" alt="" /> */}
      </main>
    </div>
  )
}

export default SideBar
