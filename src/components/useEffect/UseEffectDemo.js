// src/components/UseEffectDemo.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../custom/Button";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Component mounted OR count changed. Count: ", count);
    return () => {
      console.log(
        "Component unmounted OR count changed (cleaning up BEFORE count changes). Count: ",
        count
      );
    };
  }, [count]);

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
      <h2>useEffect Demo</h2>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <br />
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </div>
  );
}

export default UseEffectDemo;
