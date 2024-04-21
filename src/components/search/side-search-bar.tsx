import { FormEvent, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const SideSearchBar = () => {
  const [searchText, setSearchText] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(`/search?v=${searchText.toLowerCase()}`)
    setSearchText("")
  }

  return (
    <div className="w-full h-[50px] mt-[8px] border border-[1px_solid_#a4a4a4] flex">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Pesquise..."
        className="flex-[4] h-full bg-transparent p-4 outline-none border-none"
      />
      <button
        onClick={handleSearch}
        className="flex-[1] bg-black/80 flex items-center justify-center"
      >
        <FaSearch size={24} color="#FFF" />
      </button>
    </div>
  )
}

export default SideSearchBar
