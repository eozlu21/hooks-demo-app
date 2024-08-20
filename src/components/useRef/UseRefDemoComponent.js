import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';
import Button from '../custom/Button';
import { useNavigate } from 'react-router-dom';
function UseRefDemoComponent() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        border: '2px solid black',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Parent Component</h1>
      <ChildComponent inputRef={inputRef} />
      <Button onClick={focusInput}>Focus Input in Child</Button>
      <br />
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
}

export default UseRefDemoComponent;
