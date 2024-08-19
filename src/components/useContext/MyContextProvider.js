// MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

function MyContextProvider({ children }) {
    const [value, setValue] = useState('');

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;