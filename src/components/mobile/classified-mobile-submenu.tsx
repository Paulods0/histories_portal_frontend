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
    <div className="flex ml-4 flex-col gap-2">
      {category.children.map((child, index) => (
        <Link
          onClick={handleToggle}
          key={index}
          to={child.link}
          className="text-xl text-orangeColor capitalize"
        >
          {child.label}
        </Link>
      ))}
    </div>
  )
}

export default ClassifiedMobileSubmenu
