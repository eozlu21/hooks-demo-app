import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 15px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
