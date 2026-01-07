import { Routes, Route} from "react-router-dom"
import FormPage from "./pages/FormPage"
import ListPage from "./pages/ListPage.jsx"

function App() {
  return(
    <Routes>
      <Route path="/" element={<FormPage />}/>
      <Route path="/list" element={<ListPage />}/>
    </Routes>
  )
}
export default App