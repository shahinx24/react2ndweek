import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users?_page=${page}&_limit=2`)
      .then(res => setData(res.data));
  }, [page]);

  return (
    <div>
      <h3>Pagination</h3>
      {data.map(u => (
        <p key={u.id}>{u.id} - {u.name}</p>
      ))}
      <button disabled={page===1} onClick={() => setPage(page-1)}>Prev</button>
      <button onClick={() => setPage(page+1)}>Next</button>
    </div>
  );
}