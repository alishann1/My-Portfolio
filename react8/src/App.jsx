import React, { useState } from "react";
import ExpenseComponent from "./ExpenseComponent";

const App = () => {
  console.log("App Rendered");
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Parent Component</h1>
      <p>Count value is {counter} </p>
      <ExpenseComponent />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
};

export default App;
