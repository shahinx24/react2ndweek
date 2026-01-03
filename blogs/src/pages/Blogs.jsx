import { Link } from "react-router-dom";

export default function Blogs({ blogs }) {
  return (
    <>
      <h2>All Blogs</h2>

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
