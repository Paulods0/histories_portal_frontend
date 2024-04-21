import { useLocation, useParams } from "react-router-dom"

const PaginationController = ({
  pages,
  handleNavigate,
}: {
  pages: number
  handleNavigate: (page: number) => void
}) => {
  
  const { page: currPage } = useParams()

  return (
    <div className="w-full p-2 flex items-center justify-center mt-16 gap-x-4">
      <div className="w-full flex items-center justify-between">
        <div className="w-full p-4  h-12"></div>

        <div className="flex  gap-x-5">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              disabled={currPage === (index + 1).toString()}
              key={index}
              onClick={() => handleNavigate(index + 1)}
              className={`p-3 text-white ${
                currPage === (index + 1).toString()
                  ? "bg-goldenColor"
                  : "bg-colorGray-medium"
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
