import React from "react"
import { Link } from "react-router-dom"

type Props = {
  handleToggle: () => void
  category: {
    label: string
    children: {
      label: string
      link: string
    }[]
  }
}

const ClassifiedMobileSubmenu: React.FC<Props> = ({
  category,
  handleToggle,
}) => {
  return (
    <div className="flex flex-col w-full gap-4 my-4">
      {category.children.map((child, index) => (
        <Link
          onClick={handleToggle}
          key={index}
          to={child.link}
          className={`text-2xl text-orangeColor w-full capitalize ${
            index !== category.children.length - 1 ? "border-b" : ""
          } `}
        >
          {child.label}
        </Link>
      ))}
    </div>
  )
}

export default ClassifiedMobileSubmenu
