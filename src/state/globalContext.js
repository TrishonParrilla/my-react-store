import  { createContext } from 'react';

// GlobalContext defines context structure
const GlobalContext = createContext({

    user: {} //default user in as empty object to store user info first name etc
    
})

export default GlobalContext;