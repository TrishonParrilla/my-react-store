
import { useState } from 'react';
import "./Admin.css";
function Admin(){
    // const [state, setState] = useState(initialValue);
    const [productTitle, setProductTitle] = useState("");
    const [productCatagory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [products, setProducts] = useState([]);

    function saveProduct() {
        console.log("saving Product");

        const product = {
            title: productTitle,
            category: productCatagory,
            image: productImage,
            price: productPrice
        }

        setProducts([ ...products ,product])

        setProductTitle("")
        setProductCategory("")
        setProductImage("")
        setProductPrice(0)
    }
    return(
        <>
            <h1 className="store-admin-title">Store Administration</h1>

            <section className="admin-form-container">
                <h2 className="admin-form-title"> Add Products</h2>
                <div className="form-controller">
                    <label>Title:</label>
                    <input 
                    type="text" 
                    value={productTitle}
                    onChange={(event) => setProductTitle(event.target.value)}
                     />
                </div>

                <div className="form-controller">
                    <label>Category:</label>
                    <input 
                    type="text" 
                    value={productCatagory}
                    onChange={(event) => setProductCategory(event.target.value)}
                    />
                    
                </div>

                <div className="form-controller">
                    <label>Image <span className="url-text">(URL)</span></label>
                    <input 
                    type="text" 
                    placeholder='https://www.IO.com'
                    value={productImage}
                    onChange={(event) => setProductImage(event.target.value)}    
                    />
                </div>

                <div className="form-controller">
                    <label>Price</label>
                    <input 
                    type="number"
                    value={productPrice}
                    onChange={(event) => setProductPrice(event.target.value)}
                    />
                </div>
                <div>
                    <button onClick={saveProduct} className="store-admin-button">Save</button>
                </div>
            </section>

            <section className='products-section'>
                <div>
                    <h5>Products List:</h5>

                    {
                        products.length === 0
                        ? <p>No Products In Cart</p>
                        :(
                         <div className='product-container'>
                            {products.map(product =>(
                                <div className='product-real' key={product.title}>
                                    <div className='product-card'>
                                        <img src={product.image} alt={product.title} />
                                        <div className='card-body'>
                                            <p>{product.category}</p>
                                            <h5>{product.title}</h5>
                                            <h6>${product.price}</h6>
                                        </div>
                                    </div>

                                </div>

                            ))}
                         </div>
                        )
                    }

                    
                </div>
            </section>
            
       </>
    )
}

export default Admin;