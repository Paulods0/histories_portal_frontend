import { useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"

const Search = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const closeSearchModal = () => {
    setIsSearchBarOpen(false)
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
          <div className="absolute inset-0 flex items-center h-full w-full justify-center">
            <div
              id="background"
              ref={ref}
              onClick={closeSearchModal}
              className="absolute inset-0 bg-black/60 z-10 cursor-pointer flex w-full min-h-screen items-center justify-center"
            />
            <div className="z-10 justify-self-center w-[680px] flex h-[80px] bg-black/80">
              <input
                className="flex-[6] text-[20px] font-medium p-4 outline-none border-none h-full bg-white"
                type="text"
                placeholder="O que estás a procura?"
              />
              <button className="flex items-center justify-center flex-[1]">
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
