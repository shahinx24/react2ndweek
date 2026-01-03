import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

function Blogs() {
  const { blogs } = useContext(BlogContext);

  return (
    <>
      <h2>Blogs</h2>
      {blogs.length === 0 && <p>No blogs yet</p>}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
          </Link>
        </div>
      ))}
    </>
  );
}
export default Blog