import { useContext } from "react"
import { ThemeContext } from "./ThemeContext.jsx"

export default function App(){
  const {theme,setTheme} = useContext(ThemeContext)

  return(
    <>
      <h2>Current theme : {theme}</h2>
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    </>
  )
}