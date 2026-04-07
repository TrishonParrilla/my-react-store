//Import
import { useContext } from 'react';
import GlobalContext from '../state/globalContext.js'
import {Link} from "react-router-dom"
import "./Navbar.css"
import { IconUser } from '@tabler/icons-react';

//logic
function Navbar() {
  const user = useContext(GlobalContext).user;
    return(
        <div className="navbar">
          <h1 className="navbar-brand">My React Store</h1>
          <div className="navbar-links">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/catalog'}>Catalog</Link>
            <Link to ={'/contact'}>Contact</Link>
            <Link to ={'/Admin'}>Admin</Link>
            <Link to ={'/profile'}><IconUser size={24} color='orange'/>{user.firstName}</Link>
          </div>
        </div>
    )
}


//Export
export default Navbar;
