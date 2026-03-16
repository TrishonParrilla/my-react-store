//Import
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
            <a href="#home">Home</a>
            <a href="#catalog">Catalog</a>
            <a href="#about">About</a>
          </div>
        </div>
    )
}


//Export
export default Navbar;
