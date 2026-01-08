import { useState, useEffect } from "react"
import axios from "axios"

export default function App(){
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)

  useEffect(()=>{
      axios.get(`http://localhost:3001/users?_page=${page}&_limit=2`)
      .then(res => setData(res.data))
      .catch(err => console.log("error",err.message))
  },[page])

  return(
    <>
    {data.map((item)=>(
      <p key={item.id}>{item.id} - {item.name}</p>
    ))}
    <button disabled={page===1} onClick={()=> setPage(page-1)}>Prev</button>
    <button onClick={()=> setPage(page+1)}>Next</button>
    </>
  )
}