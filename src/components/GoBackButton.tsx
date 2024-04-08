import { useEffect, useState } from "react"
import { GoArrowUp } from "react-icons/go"

const GoBackButton = () => {
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  const handleShow = () => {
    if (window.scrollY >= 400) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleShow)
    return () => window.removeEventListener("scroll", handleShow)
  }, [visible])
  return (
    <button
      // disabled={visible}
      onClick={scrollToTop}
      className={`bg-green-600 flex fixed bottom-4 left-4 duration-200 transition-all ease-in-out z-50 p-2 w-12 h-12 items-center justify-center ${
        visible ? "block" : "hidden"
      }`}
    >
      <GoArrowUp color="#FFF" />
    </button>
  )
}

export default GoBackButton
