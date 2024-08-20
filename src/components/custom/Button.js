import React from 'react';

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '12px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s, transform 0.3s',
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = '#0056b3';
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = '#007bff';
      }}
      onMouseDown={(e) => {
        e.target.style.backgroundColor = '#004085';
      }}
      onMouseUp={(e) => {
        e.target.style.backgroundColor = '#0056b3';
      }}
    >
      {children}
    </button>
  );
}

export default Button;
