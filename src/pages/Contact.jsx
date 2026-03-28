import './Contact.css'
import {useState} from 'react';


function Contact() {
            //[state         setState]
    const[isEmailVisible, setIsEmailVisible] = useState(false)
    function showEmail() {
        setIsEmailVisible(true)

    }
        function hideEmail() {
        setIsEmailVisible(false)

    }

    return(
        <div>
            <p>Welcome. You Can find us at 123 React Street, JavaScript City, JS 12345</p>

            

            { // ternary operator statement
                isEmailVisible == true
                ? <p>contact@myreactstore.com</p> //if true show this
                : <p>Click the button to show my email</p> //if not show this
            }
            
            
            <button onClick={showEmail}className='global-button'>Show my email</button>
            <button onClick={hideEmail}className='global-button'>Hide my email</button>
        </div>

    )
}


export default Contact;