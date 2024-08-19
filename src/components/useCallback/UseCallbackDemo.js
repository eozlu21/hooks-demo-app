import React, { useState, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../custom/Button";

// Child component that receives the callback function as a prop
const ChildComponent = memo(({ increment }) => {
  console.log("ChildComponent rendered");
  return (
    <div>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  // useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        maxWidth: "300px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>Count: {count}</h1>
      <ChildComponent increment={increment} />
      <br />
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </div>
  );
}

export default UseCallbackDemo;
