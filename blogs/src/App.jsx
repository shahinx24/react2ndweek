import { Routes, Route, Navigate } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/createblog" />} />
      <Route path="/createblog" element={<CreateBlog />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
    </Routes>
  );
}