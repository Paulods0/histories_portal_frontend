import { Link } from "react-router-dom"

const HomeCategoryControlller = ({
  text,
  label,
  hide,
}: {
  label: string | undefined
  text?: string
  hide: boolean
}) => {
  return (
    <>
      {hide ? (
        ""
      ) : (
        <div className="w-full px-12 items-center border border-colorGray-light/20 bg-[#F9F9F9] py-3 font-normal mb-12 text-[14px] text-[#9B9B9B] 40 flex">
          <Link to="/" className="mr-2">
            Home
          </Link>
          <span className="text-[12px] font-medium">/</span>
          <h1 className="ml-2  capitalize">
            {text} {label}
          </h1>
        </div>
      )}
    </>
  )
}

export default HomeCategoryControlller
