import React from 'react';

function ChildComponent({ inputRef }) {
    return (
        <div style={{  fontFamily: 'Arial, sans-serif', maxWidth: '600px', textAlign: 'center', border: '2px solid black', padding: '10px' , display: 'flex', flexDirection: 'column' }}>
            <h2>Child Component</h2>
            <input ref={inputRef} type="text" placeholder="Focus using the parent's button" />
        </div>
    );
}

export default ChildComponent;
