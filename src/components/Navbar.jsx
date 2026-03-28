//Import
import {Link} from "react-router-dom"
import "./Navbar.css"

//logic
function Navbar() {
    return(
        <div className="navbar">
          <h1 className="navbar-brand">My React Store</h1>
          <div className="navbar-search">
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
          </div>
          <div className="navbar-links">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/catalog'}>Catalog</Link>
            <Link to ={'/contact'}>Contact</Link>
          </div>
        </div>
    )
}


//Export
export default Navbar;
