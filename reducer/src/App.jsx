import {useReducer} from "react";

function reducer(state,action){
    if(action.type === "INC"){
      return state + 1;
    }
    if(action.type === "DEC"){
      return state - 1;
    }
    if(action.type === "RESET"){
      return 0;
    }else{
      return state;
    }
}

export default function App(){
  const [count, dispatch] = useReducer(reducer,0);

  return(
    <>
    <p>{count}</p>
    <button onClick={()=> dispatch({type : "INC"})}>+</button>
    <button onClick={()=> dispatch({type : "DEC"})}>-</button>
    <button onClick={()=> dispatch({type : "RESET"})}>RESET</button>
    </>
  )
}