import SideSearchBar from "../search/SideSearchBar"

const SideBar = () => {
  return (
    <div className=" flex-[1] h-screen flex gap-5 flex-col">
      <SideSearchBar />
      <main className="text-white h-full flex flex-col gap-12">
        <div className="relative w-full h-[250px]">
          <img
            src="/ads.jpeg"
            className="w-full h-full absolute object-cover inset-0"
            alt=""
          />
        </div>
        <div className="relative w-full h-[700px]">
          <img
            src="/ads.jpeg"
            className="w-full h-full absolute object-cover inset-0"
            alt=""
          />
        </div>
        <div className="relative w-full h-[150px]">
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
