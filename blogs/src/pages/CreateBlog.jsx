import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog({ blogs, setBlogs }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      title,
      body,
    };
    setBlogs([...blogs, newBlog]);
    navigate("/blogs");
  }

  return (
    <>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Blog Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br /><br />
        <button type="submit">Create</button>
      </form>
    </>
  );
}