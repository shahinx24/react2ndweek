import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

function CreateBlog() {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const now = new Date();
    const newBlog = {
      id: Date.now(),
      title, body,
      createdAt: now.toLocaleString(), // date + time stored ONCE
    };
    setBlogs([...blogs, newBlog]);
    navigate("/blogs");
  }

  return (
    <>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br /><br />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
export default CreateBlog