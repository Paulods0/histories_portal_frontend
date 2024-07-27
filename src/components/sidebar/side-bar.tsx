import SideSearchBar from "../search/side-search-bar"

const SideBar = () => {
  return (
    <div className="flex-[1] hidden lg:flex gap-5 flex-col">
      <SideSearchBar />
      <main className="text-white flex flex-col h-full gap-12 ">
        
      </main>
    </div>
  )
}

export default SideBar
