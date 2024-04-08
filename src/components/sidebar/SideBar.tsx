import SideSearchBar from "../search/SideSearchBar"

const SideBar = () => {
  return (
    <div className=" flex-[1] h-screen flex gap-5 flex-col">
      <SideSearchBar />
      <main className="text-white h-full flex flex-col gap-12">
        <div className="relative w-full h-[10%]">
          <img
            src="/ads.jpeg"
            className="w-full h-full absolute object-cover inset-0"
            alt=""
          />
        </div>
        <div className="relative w-full h-[30%]">
          <img
            src="/ads.jpeg"
            className="w-full h-full absolute object-cover inset-0"
            alt=""
          />
        </div>
        <div className="relative w-full h-[15%]">
          <img
            src="/ads.jpeg"
            className="w-full h-full absolute object-cover inset-0"
            alt=""
          />
        </div>
        <div className="relative w-full h-[20%]">
          <img
            src="/ads.jpeg"
            className="w-full h-full absolute object-cover inset-0"
            alt=""
          />
        </div>
        <div className="relative w-full h-[40%]">
          <img
            src="/ads.jpeg"
            className="w-full h-full absolute object-cover inset-0"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}

export default SideBar
