import { useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "ADD") {
    return [...state, action.text];
  }
  if (action.type === "DELETE") {
    return state.filter((_, index) => index !== action.index);
  }
  return state;
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  function addTodo() {
    dispatch({ type: "ADD", text });
    setText("");
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch({ type: "DELETE", index })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}