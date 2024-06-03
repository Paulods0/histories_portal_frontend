import { createContext, useContext, useState } from "react"

type Theme = "light-mode" | "dark-mode"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType>({
  theme: "light-mode",
  toggleTheme() {},
})

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const theme = localStorage.getItem("theme") as Theme
    return theme ? theme : "light-mode"
  })

  function toggleTheme() {
    setTheme(() => {
      const changedTheme = theme === "light-mode" ? "dark-mode" : "light-mode"
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
