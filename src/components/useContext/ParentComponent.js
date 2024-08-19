// ParentComponent.js
import React from "react";
import MyContext from "./MyContext";
import ChildComponent from "./ChildComponent";
import { useNavigate } from "react-router-dom";
import MyContextProvider from "./MyContextProvider";
import { useContext } from "react";
import Button from "../custom/Button";
// NOTE: useContext must be used inside a component that is a child of the Context Provider
function ParentComponent() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        border: "2px solid black",
        padding: "10px",
      }}
    >
      <h2>useContext Demo</h2>
      <MyContextProvider>
        <ChildComponent />
      </MyContextProvider>
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </div>
  );
}

export default ParentComponent;
