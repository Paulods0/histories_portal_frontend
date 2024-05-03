import SideSearchBar from "../search/side-search-bar"

const SideBar = () => {
  return (
    <div className="flex-[1] hidden lg:flex gap-5 flex-col">
      <SideSearchBar />
      <main className="text-white flex flex-col h-full gap-12 ">
        <img src="/banners/boldy-1.jpeg" alt="" />
        {/* <img src="/banners/boldy-2.jpeg" alt="" /> */}
        {/* <img src="/banners/vert.jpeg" alt="" /> */}
        {/* <img src="/banners/xm-1.gif" alt="" /> */}
        {/* <img src="/banners/xm-2.jpeg" alt="" /> */}
      </main>
    </div>
  )
}

export default SideBar

{
  /* <div className="relative w-full h-[37%]">
          <img
            src="/banners/xm-1.gif"
            className="w-full h-full absolute object-cover inset-0"
            alt=""
          />
        </div>

        <div className="relative w-full h-[43%]">
          <img
            src="/banners/xm-2.jpeg"
            className="w-full h-full absolute object-cover inset-0"
            alt=""
          />
        </div>

        <div className="relative w-full h-[70%] object-cover">
          <img
            src="/banners/vert.jpeg"
            className="w-full h-full absolute object-cover  inset-0"
            alt=""
          />
        </div> */
}
