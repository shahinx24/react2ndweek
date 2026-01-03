import { useParams } from "react-router-dom";

export default function BlogDetails({ blogs }) {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <h3>Blog not found</h3>;

  return (
    <>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </>
  );
}