import { useState,useEffect } from 'react'
import axios from "axios"

function App() {
  const [data,setData] = useState([])

  useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.data)
  },[])
  

  return (
    <>
      {data.map((item)=>(
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  )
}

export default App