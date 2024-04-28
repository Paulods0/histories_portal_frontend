import { useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"
// import { Navigate, useNavigate } from "react-router-dom"

const Search = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const [search, setSearch] = useState("")
  // const navigate = useNavigate()

  const closeSearchModal = () => {
    setIsSearchBarOpen(false)
  }

  const handleSearch = () => {
    console.log(search)

    // navigate(`/search?v=${search}`)
  }

  return (
    <div className="cursor-pointer ">
      <FaSearch
        onClick={() => setIsSearchBarOpen(true)}
        size={18}
        color="#FFF"
      />

      {isSearchBarOpen && (
        <>
          <div className="fixed top-0 left-0 z-[999999999] flex items-center h-full w-full justify-center">
            <div
              id="background"
              ref={ref}
              onClick={closeSearchModal}
              className="absolute inset-0 bg-black/60 z-10 cursor-pointer flex w-full min-h-screen items-center justify-center"
            />
            <div className="z-[999999] justify-self-center w-[680px] flex h-[80px] bg-black/80">
              <input
                className="flex-[6] text-[20px] font-medium p-4 outline-none border-none h-full bg-white"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="O que estás a procura?"
              />
              <button
                onClick={() => handleSearch}
                className="flex items-center justify-center flex-[1]"
              >
                <FaSearch size={24} color="#FFF" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Search
