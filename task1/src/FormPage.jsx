import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    if (!name || !age) return;
    await axios.post("http://localhost:3000/users", {
      name,
      age
    });
    setName("");
    setAge("");
    navigate("/list");
  }

  return (
    <>
      <h2>Add User</h2>
      <input placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <input placeholder="Age" value={age}
        onChange={(e) => setAge(e.target.value)}
      /><br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}