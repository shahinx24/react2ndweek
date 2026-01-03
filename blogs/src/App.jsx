import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import CreateBlog from "./pages/CreateBlog";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

export default function App() {
  const [blogs, setBlogs] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/createblog" />} />
      <Route
        path="/createblog"
        element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />}
      />
      <Route path="/blogs" element={<Blogs blogs={blogs} />} />
      <Route
        path="/blogs/:id"
        element={<BlogDetails blogs={blogs} />}
      />
    </Routes>
  );
}