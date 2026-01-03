import React from "react";

const Child = React.memo(function Child({ user, sayHello }) {
  console.log("Child rendered");

  return (
    <>
      <p>{user.name}</p>
      <button onClick={sayHello}>Hello {user.name}</button>
    </>
  );
});
export default Child;
huiuc