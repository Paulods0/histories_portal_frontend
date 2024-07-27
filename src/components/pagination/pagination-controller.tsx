import { useNavigate, useParams } from "react-router-dom"
import {
  ChevronRight,
  ChevronLeft,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-react"
import PaginationButton from "./pagination-button"

type Props = {
  totalPages?: number
  handlePaginate: (page: number) => void
}

const MAX_BUTTONS = 3

const PaginationController = ({ totalPages: pages, handlePaginate }: Props) => {
  const { page } = useParams()
  const navigate = useNavigate()

  if (pages === 1 || pages === undefined) {
    return
  }

  const totalPages = Array.from({ length: pages }, (_, index) => index)

  let currentPage = Number(page) || 1

  function calculateMaxVisibleButtons() {
    let maxLeft = currentPage - Math.floor(MAX_BUTTONS / 2)
    let maxRight = currentPage + Math.floor(MAX_BUTTONS / 2)

    if (maxLeft < 1) {
      maxLeft = 1
      maxRight = MAX_BUTTONS
    }

    if (maxRight > totalPages.length) {
      maxLeft = totalPages.length - (MAX_BUTTONS - 1)
      maxRight = totalPages.length
    }

    return { maxLeft, maxRight }
  }
  function goToStart() {
    navigate("/")
    window.scrollTo(0, 0)
  }
  function goToEnd() {
    navigate(`/page/${totalPages.length}`)
    window.scrollTo(0, 0)
  }
  function goToNext() {
    if (currentPage >= totalPages.length) {
      navigate(`/page/${totalPages.length}`)
    } else {
      navigate(`/page/${currentPage + 1}`)
      window.scrollTo(0, 0)
    }
  }
  function goToPrev() {
    if (currentPage <= 2) {
      navigate("/")
    } else {
      navigate(`/page/${currentPage - 1}`)
      window.scrollTo(0, 0)
    }
  }

  const { maxLeft, maxRight } = calculateMaxVisibleButtons()

  const buttons = totalPages.slice(maxLeft - 1, maxRight)

  return (
    <div className="my-12 w-full flex items-center justify-center gap-2">
      <PaginationButton handleClick={goToStart} icon={ChevronsLeft} />
      <PaginationButton handleClick={goToPrev} icon={ChevronLeft} />

      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => handlePaginate(button + 1)}
          className={`size-14  text-white ${
            currentPage === button + 1 ? "bg-orangeColor" : "bg-colorBlack"
          }`}
        >
          {button + 1}
        </button>
      ))}

      <PaginationButton handleClick={goToNext} icon={ChevronRight} />
      <PaginationButton handleClick={goToEnd} icon={ChevronsRight} />
    </div>
  )
}

export default PaginationController
