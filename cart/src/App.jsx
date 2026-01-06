import {useReducer,useState} from "react"

function reducer(state,action){
  if(action.type === "ADD"){
    return [...state,{name : action.product, price : action.price , qty : 0}]
  }
  if(action.type === "INC"){
    return state.map((item,index)=>
    index === action.index ? {...item,qty : item.qty + 1}:item );
  }
  if(action.type === "DEC"){
    return state.map((item,index)=>
    index === action.index ? {...item,qty : Math.max(0,item.qty - 1)}:item );
  }
  if(action.type === "DLT"){
    return state.filter((_,index)=> index !== action.index)
  }
  return state;
}

export default function app(){
  const [cart,dispatch] = useReducer(reducer,[])
  const [product,setProduct] = useState("")
  const [price,setPrice] = useState("")

  function Add(){
    if(product.trim() === "")return;
    dispatch({type:"ADD",product,price})
    setProduct("")
    setPrice("")
  }

  return(
    <>
    <input onChange={(e)=> setProduct(e.target.value)} value={product} placeholder="Enter the peroduct"/>
    <input type="number" onChange={(e)=> setPrice(e.target.value)} value={price} placeholder="Enter the price"/>
    <button onClick={Add}>Add</button>
    {cart.map((item,index)=>(
      <p key={index}>{item.name} - ${item.price} | QTY : {item.qty} 
      <button onClick={()=> dispatch({type:"INC",index})}> + </button>
      <button onClick={()=> dispatch({type:"DEC",index})}> - </button>
      <button onClick={()=> dispatch({type:"DLT",index})}> Delete </button>
      </p>
    ))}
    </>
  )
}