import { useContext } from 'react';
import GlobalContext from '../state/globalContext';
import './profile.css';

function Profile() {
    // const { user } = useContext(GlobalContext);
    const user = useContext(GlobalContext).user;
    return(
       
        <>
            <main className='profile-main'>
                <div className='profile-status-container'>
                    <div className='profile-Status'>
                        <h2>{user.firstName} {user.lastName}</h2>
                        <img src={user.avatar}/>
                    </div>
                </div>
                <div className='profile-info-container'>
                    <div className='profile-info'>
                        <h1>Profile</h1>
                        <h3>{user.email}</h3>
                        <h4>{user.address.city}</h4>
                        <h4>{user.address.street}</h4>
                    </div>
                    <div className='profile-info'>
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</p>
                    </div>
                </div>
            </main>
        
        </>
      
    )
}

export default Profile;