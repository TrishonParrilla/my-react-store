import './NotFound.css'

function NotFound() {
    return(
        <div style={{textAlign: 'center'}}>
            <h1>404-Error Not Found</h1>
            <p>That Page doesn't exist</p>
            
            <button className="not-found-button"><a href="/">Go Home</a></button>
        </div>
    )
}



export default NotFound;