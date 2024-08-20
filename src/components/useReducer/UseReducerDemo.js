// src/components/UseEffectDemo.js
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../custom/Button';

// we could also use seperate functions for each case
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'double':
      return { count: state.count * 2 };
    case 'reset':
      return { count: initialState.count };
    default:
      return state;
  }
}

const initialState = { count: 0 };

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '300px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h2>useReducer Demo</h2>
      <br />
      <p>Count: {state.count}</p>
      <Button onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
      <Button onClick={() => dispatch({ type: 'double' })}>Double</Button>
      <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
      <br />
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
}

export default UseReducerDemo;
