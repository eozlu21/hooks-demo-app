// MyContext.js
import {createContext} from 'react';

const MyContext = createContext({
    value: '',
    setValue: (value) => {}
});

export default MyContext;