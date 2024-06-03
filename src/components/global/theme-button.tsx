import { useThemeContext } from "@/context/theme-context"
import { motion } from "framer-motion"
import { MdOutlineLightMode } from "react-icons/md"

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext()
  const textColor = theme === "dark-mode" ? "text-white" : "text-colorBlack"
  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{
        scale: 0.95,
        boxShadow: "0px 1px 8px 0.5px #111",
        transition: { duration: 0.2 },
      }}
      className={`${textColor} text-xl p-2 rounded-lg`}
    >
      <MdOutlineLightMode />
    </motion.button>
  )
}

export default ThemeButton
