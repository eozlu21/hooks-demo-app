import React, { useRef, useState } from 'react';
import Button from '../custom/Button';
import { useNavigate } from 'react-router-dom';

function UseRefDemoMutableValue() {
    const countRef = useRef(0);
    const [, setRenderCount] = useState(0);
    const navigate = useNavigate();
    const incrementRef = () => {
        countRef.current += 1;
        console.log('Ref count:', countRef.current);
    };

    const updateState = () => {
        setRenderCount(countRef.current);
    };

    return (
        <div style={{  fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', textAlign: 'center', border: '2px solid black', padding: '10px' , display: 'flex', flexDirection: 'column' }}>
            <p>Ref count: {countRef.current}</p>
            <Button onClick={incrementRef}>Increment Ref</Button>
            <br/>
            <Button onClick={updateState}>Update Component</Button>
            <br />
            <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
    );
}

export default UseRefDemoMutableValue;