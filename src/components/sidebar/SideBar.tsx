import SideSearchBar from "../search/SideSearchBar"

const SideBar = () => {
  return (
    <div className=" flex-[1] h-screen flex gap-5 flex-col">
      <SideSearchBar />
      <main className="text-white bg-black/20 h-full"></main>
    </div>
  )
}

export default SideBar
