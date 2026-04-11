import './home.css'
import {Link} from "react-router-dom"


function Home() {
    return(
        <div className='home-container'>
            <div className='home-welcome'>
                <h2>Welcome to Joel's Market!</h2>
                <p className='welcome-intro-text'>Your one-stop shop for all your needs. Explore our wide range of products and enjoy a seamless shopping experience.
                Discover amazing deals and exclusive offers on our catalog. Happy shopping!</p>
            </div>
            <div className='home-image'>
                <div className='shopping-cart-image'>
                    <img src='https://images.unsplash.com/photo-1601598505513-7489a6272d2a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                    <p>Wholesale</p>
                </div>
                <div className='mens'>
                    <Link to={"/catalog"}><img src='https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3Dh'/></Link>
                    <p>Mens</p>
                </div>
                <div className='womens'>
                    <Link to={"/catalog"}><img src='https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D'/></Link>
                    <p>Womens</p>
                </div>
                <div className='kids'>
                    <Link to={"/catalog"}><img src='https://images.unsplash.com/photo-1560506840-ec148e82a604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMHNob3BwaW5nfGVufDB8fDB8fHww'/></Link>
                    <p>Kids</p>
                </div>
                <div className='accessories'>
                    <Link to={"/catalog"}><img src='https://images.unsplash.com/photo-1660246156333-eea5fc75b540?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></Link>
                    <p>Accessories</p>
                </div>
            </div>

        </div>
    )
}

export default Home;