interface PagenationProps {
  postsPerPage: number
  totalPosts: number
  paginate: (page: number) => void
  currentPage: number
}

const PaginationController: React.FC<PagenationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = []
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="w-[250px] items-center gap-4 justify-between flex">
      <ul className="flex">
        {pageNumbers.map((page) => (
          <li
            key={page}
            onClick={() => {
              paginate(page)
              window.scrollTo(0, 800)
            }}
            className={` cursor-pointer mr-6 bg-black/80 px-4 py-2  ${
              page === currentPage ? "bg-yellow-600/70" : ""
            }`}
          >
            <button className="text-white">{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PaginationController
