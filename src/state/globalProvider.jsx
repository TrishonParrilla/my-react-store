import { useState } from 'react';
import GlobalContext from './globalContext';

const GlobalProvider = (props) => {
    //state and setState = useState(initialvalue);
    const [user, setUser] = useState({
        id: 65,
        firstName: 'Trishon',
        lastName: 'Parrilla',
        email: 'parrioTrish@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: {
            street: '1932 simeon street',
            city: 'San francisco',
            state: 'California',
            zip: 28831,
        }
    })

    return (
        <GlobalContext.Provider value={{
            user
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;