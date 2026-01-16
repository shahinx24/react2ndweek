import {useState,useEffect} from "react"

export default function ProductsPage(){
    const [search,setSearch] = useState("")
    const [product,setProduct] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then((res)=> res.json())
        .then((data)=> setProduct(data));
    },[])

    const filtered= product.filter((p)=>
    p.name.toLowerCase().includes(search.toLowerCase())
    )
    
    return(
    <>
    <input onChange={(p)=> setSearch(p.target.value)} value={search}/>
    {filtered.map((p)=>(
        <div key={p.id} className="card">
            <p>{p.name}</p>
            <p>{p.price}</p>
        </div>
    ))}
    </>
    )
}