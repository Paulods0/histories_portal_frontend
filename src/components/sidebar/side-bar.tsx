import SideSearchBar from "../search/side-search-bar"

const SideBar = () => {
  return (
    <div className="flex-[1] flex gap-5 flex-col">
      <SideSearchBar />
      <main className="text-white h-[100%] flex flex-col gap-12">
        <div className="relative w-full h-[37%]">
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
        </div>
      </main>
    </div>
  )
}

export default SideBar
