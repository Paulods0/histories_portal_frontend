import React from "react"

type Props = {
  icon: React.ElementType
  handleClick?: () => void
}

const PaginationButton = ({ handleClick, icon: Icon }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="size-14 flex items-center justify-center bg-colorBlack text-white"
    >
      <Icon />
    </button>
  )
}

export default PaginationButton
