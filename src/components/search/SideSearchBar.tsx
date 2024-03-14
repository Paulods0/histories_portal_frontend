import { FaSearch } from "react-icons/fa"

const SideSearchBar = () => {
  return (
    <div className="w-full h-[50px] border border-[1px_solid_#a4a4a4] flex">
      <input
        type="text"
        placeholder="Pesquise..."
        className="flex-[4] h-full bg-transparent p-4 outline-none border-none"
      />
      <button className="flex-[1] bg-black/80 flex items-center justify-center">
        <FaSearch size={24} color="#FFF" />
      </button>
    </div>
  )
}

export default SideSearchBar
