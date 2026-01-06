import { useReducer,useState } from "react"

function reducer(state,action){
    if(action.type === "ADD"){
        return [...state,action.task]
    }if(action.type === "DLT"){
        return state.filter((_,index)=> index !== action.index)
    }return state;
}

export default function app(){
    const [todo,dispatch] = useReducer(reducer,[])
    const [task,setTask] = useState("")

    function toDo(){
        if(task.trim() === "")return;
        dispatch({type : "ADD",task})
        setTask("")
    }

    return(
        <>
        <input onChange={(e)=> setTask(e.target.value)} value={task} />
        <button onClick={toDo} >Add</button>
        {todo.map((item,index)=>(
            <p key={index}>{item}
            <button onClick={()=> dispatch({type : "DLT",index})}>Delete</button>
            </p>
        ))}
        </>
    )
}