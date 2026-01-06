import { useContext, useEffect } from "react"
import { ThemeContext } from "./ThemeContext.jsx"
import "./App.css"

export default function App(){
  const {theme,setTheme} = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return(
    <>
      <h2>Current theme : {theme}</h2>
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    </>
  )
}