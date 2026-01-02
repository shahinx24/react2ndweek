import { Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/list" element={<ListPage />} />
    </Routes>
  );
}
export default App