import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function FormPage() {
    const [ name,setName ] = useState("")
    const [ age,setAge ] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(){
        if(!name || !age)return;
        await axios.post("http://localhost:3000/users",{
            name,age
        })
        setName("")
        setAge("")
        navigate("/list")
    }

    return(
        <>
        <input onChange={(e)=> setName(e.target.value)} value={name} />
        <input onChange={(e)=> setAge(e.target.value)} value={age} />
        <button onClick={handleSubmit}> Click </button>
        </>
    )
}