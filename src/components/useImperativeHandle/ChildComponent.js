import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
    // Custom functions
    const greet = () => {
        console.log('Hello!');
    };

    const goodbye = () => {
        console.log('Goodbye!');
    };

    // Expose custom functions to parent component
    useImperativeHandle(ref, () => ({
        greet,
        goodbye
    }));

    return (
        <div>
            <p>Child Component has greet and goodbye methods</p>
        </div>
    );
});

export default ChildComponent;