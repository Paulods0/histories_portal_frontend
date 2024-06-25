import { IoMenu } from "react-icons/io5"
import MobileSheetMenu from "./mobile-sheet-menu"
import { useState } from "react"

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <button onClick={handleToggle} className="text-4xl text-orangeColor">
        <IoMenu />
      </button>
      {isOpen && <MobileSheetMenu handleToggle={handleToggle} />}
    </>
  )
}

export default MobileMenuButton
