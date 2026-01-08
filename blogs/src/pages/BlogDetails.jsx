import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

function BlogDetails() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((b) => b.id === Number(id));
  if (!blog) return <h3>Blog not found</h3>;
 
  return (
    <>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <hr />
      <p>
        <strong>Created at:</strong> {blog.createdAt}
      </p>
    </>
  );
}
export default BlogDetails
