// MyComponent.js
import React from "react";
import NestedChildComponent from "./NestedChildComponent";
import { useContext } from "react";
import MyContext from "./MyContext";
import Button from "../custom/Button";

function ChildComponent() {
  const { value, setValue } = useContext(MyContext);

  const handleChange = () => {
    const userInput = prompt("Enter your message:");
    setValue(userInput);
  };

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
      <h1>Beginning of ChildComponent</h1>
      <p>Context Value Displayed in ChildComponent: {value}</p>
      <Button onClick={handleChange}>
        Change Context Value in ChildComponent
      </Button>
      <NestedChildComponent />
      <h1>End of ChildComponent</h1>
    </div>
  );
}

export default ChildComponent;
