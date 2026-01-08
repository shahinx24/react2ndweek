import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users?_page=${page}&_limit=${limit}`)
      .then((res) => {
        setUsers(res.data);
        const total = res.headers["x-total-count"];
        setTotalPages(Math.ceil(total / limit));
      });
  }, [page]);

  return (
    <div>
      <h2>Users List (Pagination)</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}. {user.name}
          </li>
        ))}
      </ul>

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <span> Page {page} of {totalPages} </span>

      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}