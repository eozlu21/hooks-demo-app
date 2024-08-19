import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChildComponent from "./ChildComponent";
import Button from "../custom/Button";

function UseImperativeHandleDemo() {
  const navigate = useNavigate();
  const ref = useRef(null);
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
      <h2>useImperativeHandleDemo Demo</h2>
      <ChildComponent ref={ref} />
      <br />
      <Button onClick={() => ref.current.greet()}>
        Use Greet Method from Child
      </Button>
      <br />
      <Button onClick={() => ref.current.goodbye()}>
        Use Goodbye Method from Child
      </Button>
      <br />
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </div>
  );
}

export default UseImperativeHandleDemo;
