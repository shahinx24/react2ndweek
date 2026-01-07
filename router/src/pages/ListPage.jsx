import axios from "axios"
import { useState,useEffect } from "react"

export default function ListPage(){
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetchUsers();
    },[])

    async function fetchUsers(){
        const res = await axios.get("http://localhost:3000/users");
        setUser(res.data)
    }
    async function deleteUser(id){
        try{
            await axios.delete(`http://localhost:3000/users/${id}`)
            fetchUsers()
        }catch(err){
            console.log("Delete Failed !",err)
        }
    }

    return(
        <>
        {user.map((item)=>(
            <p key={item.id}>Name: {item.name} - Age: {item.age}
            <button onClick={()=> deleteUser(item.id)}>delete</button>
            </p>
        ))}
        </>
    )
}