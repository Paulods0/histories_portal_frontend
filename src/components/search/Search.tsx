import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogClose,
} from "@/components/ui/dialog"
import { useNavigate } from "react-router-dom"

const Search = () => {
  const [searchText, setSearchText] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(`/search?v=${searchText}`)
    setSearchText("")
  }

  return (
    <Dialog>
      <DialogTrigger
        className="bg-colorGray-dark size-10 cursor-pointer text-xl lg:text-base p-2 lg:p-3 rounded-md"
        asChild
      >
        <div>
          <FaSearch color="#FFF" />
        </div>
      </DialogTrigger>

      <DialogContent className="z-[9999999999] py-2 px-4 rounded-none">
        <div className="flex items-center justify-between pr-6 h-full w-full">
          <input
            type="text"
            value={searchText}
            placeholder="O que estás a procura?"
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full h-full outline-none border-none"
          />
          <DialogClose asChild>
            <button
              onClick={handleSearch}
              className="flex items-center bg-zinc-700 p-2 h-full justify-center flex-[1]"
            >
              <FaSearch size={24} color="#FFF" />
            </button>
          </DialogClose>
        </div>
      </DialogContent>
      <DialogOverlay className="z-[9999] opacity-30" />
    </Dialog>
  )
}

export default Search
