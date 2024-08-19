import React, { useState, useLayoutEffect, useRef } from 'react';

const UseLayoutEffectDemo = ({ defaultHeight = 20 }) => {
  const [height, setHeight] = useState(defaultHeight);
  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const scrollHeight = textareaRef.current.scrollHeight;
      setHeight(scrollHeight);
    };

    textareaRef.current.addEventListener('input', updateHeight);
    
    // Initial height adjustment
    updateHeight();

    return () => {
      textareaRef.current?.removeEventListener('input', updateHeight);
    };
  }, []);

  return (
    <textarea
      ref={textareaRef}
      style={{
        height: `${height}px`,
        overflow: 'hidden',
        resize: 'none',
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
      }}
      placeholder="Type something..."
    />
  );
};

export default UseLayoutEffectDemo;