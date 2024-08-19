// src/components/UseStateDemo.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../custom/Button";

function UseStateDemo() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

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
      <h2>useState Demo</h2>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <br />
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </div>
  );
}

export default UseStateDemo;
