import { useLocation, useParams } from "react-router-dom"

type Props = {
  pages: number
  paginate: (newPage: number) => void
}

const PaginationController = ({ pages, paginate }: Props) => {
  const { page: currPageId } = useParams()
  const { search } = useLocation()
  const pageQuery = search.split("=")[1]

  const currPage = currPageId || pageQuery

  return (
    <div className="w-full p-2 flex items-center justify-center mt-16 gap-x-4">
      <div className="w-full flex items-center justify-between">
        <div className="w-full p-4  h-12"></div>

        <div className="flex  gap-x-5">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              disabled={currPage === (index + 1).toString()}
              onClick={() => paginate(index + 1)}
              className={`p-3 text-white ${
                currPage === (index + 1).toString()
                  ? "bg-orangeColor"
                  : "bg-colorBlack"
              } w-12 h-12 flex hover:bg-colorGray-dark/70 cursor-pointer duration-200 transition-all ease-in-out items-center justify-center`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full p-4 h-12"></div>
    </div>
  )
}

export default PaginationController
