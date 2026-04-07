import { useContext } from 'react';
import GlobalContext from '../state/globalContext';

function Profile() {
    // const { user } = useContext(GlobalContext);
    const user = useContext(GlobalContext).user;
    return(
       
        <div>
            <h1>Profile Page</h1>
            <h2>{user.firstName} {user.lastName}</h2>
            <h3>{user.email}</h3>
            <h4>{user.address.city}</h4>
        </div>
    )
}

export default Profile;