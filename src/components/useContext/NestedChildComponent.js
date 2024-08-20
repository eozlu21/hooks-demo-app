// NestedChildComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

function NestedChildComponent() {
  const { value, setValue } = useContext(MyContext);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        border: '2px solid black',
        padding: '10px',
      }}
    >
      <h2>Beginning of NestedChildComponent</h2>
      <p>Context Value Displayed in NestedChildComponent: {value}</p>
      <h2>End of NestedChildComponent</h2>
    </div>
  );
}

export default NestedChildComponent;
