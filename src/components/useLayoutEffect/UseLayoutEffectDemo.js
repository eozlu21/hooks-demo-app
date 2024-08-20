import React, { useState, useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../custom/Button';

function UseLayoutEffectDemo() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    function updateSize() {
      if (elementRef.current) {
        setWidth(elementRef.current.offsetWidth);
        setHeight(elementRef.current.offsetHeight);
      }
    }

    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const divStyle = {
    border: '2px solid blue',
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#f0f0f0',
    width: '100vw',
    height: '50vh',
  };

  return (
    <div>
      <h2>useLayoutEffect Demo</h2>
      <p>
        This component uses useLayoutEffect to measure and display its own
        dimensions. Try resizing the window to see it update in real-time.
      </p>
      <div ref={elementRef} style={divStyle}>
        <p>This is the measured element.</p>
        <p>Its dimensions are:</p>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
      </div>
      <br />
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
}

export default UseLayoutEffectDemo;
