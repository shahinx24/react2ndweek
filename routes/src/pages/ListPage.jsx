import { useEffect, useState } from "react";
import axios from "axios";

export default function ListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  }

  async function updateUser(id, updatedUser) {
    await axios.patch(`http://localhost:3000/users/${id}`,
      updatedUser
    );
    fetchUsers();
  }

  async function deleteUser(id) {
  try {
    await axios.delete(`http://localhost:3000/users/${id}`);
    fetchUsers(); // reload list after delete
  } catch (err) {
    console.error("Delete failed", err);
  }
}

  return (
    <>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <input value={user.name} onChange={(e) =>
            setUsers((prev) => prev.map((u) => u.id === user.id
                ? { ...u, name: e.target.value } : u 
            ))}
          />
          <input value={user.age} onChange={(e) =>
              setUsers((prev) => prev.map((u) => u.id === user.id
                    ? { ...u, age: e.target.value } : u
            ))}
          />
          <button onClick={() => updateUser(user.id, user)}>
            Update
          </button>
          <button onClick={() => deleteUser(user.id)}>
          Delete
          </button>
        </div>
      ))}
    </>
  );
}