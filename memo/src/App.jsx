import { useState, useCallback, useMemo } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  // ✅ memoized object
  const user = useMemo(() => {
    return { name: "Shahin" };
  }, []);

  // ✅ memoized function
  const sayHello = useCallback(() => {
    console.log("Hi");
  }, []);

  console.log("Parent rendered");

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child user={user} sayHello={sayHello} />
    </>
  );
}