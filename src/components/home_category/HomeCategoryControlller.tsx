import { Link } from "react-router-dom"

const HomeCategoryControlller = ({
  text,
  label,
}: {
  label: string | undefined
  text?: string
}) => {
  return (
    <div className="w-full items-center shadow-[0px_2px_8px_1px_#dcdcdc] bg-black/5 p-3 font-medium mb-12 text-[18px] text-black/40 flex">
      <Link to="/" className="text-[14px] mr-2">
        Home
      </Link>
      <span className="text-[15px]">/</span>
      <h1 className="ml-2 text-[14px] capitalize">
        {text} {label}
      </h1>
    </div>
  )
}

export default HomeCategoryControlller
