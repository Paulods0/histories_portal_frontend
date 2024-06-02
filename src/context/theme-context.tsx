import { createContext, useContext, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme() {},
})

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const theme = localStorage.getItem("theme") as Theme
    return theme ? theme : "light"
  })

  function toggleTheme() {
    setTheme(() => {
      const changedTheme = theme === "light" ? "dark" : "light"
      localStorage.setItem("theme", changedTheme)
      return changedTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeContext)
}

export default ThemeContextProvider
