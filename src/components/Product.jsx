import "./product.css"
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";


function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const total = props.data.price * quantity;
    return(
        <div className="product">
            <img src={"/images/" + props.data.image} alt="product" />
            <div className="product-info">
                <h5>{props.data.title}</h5>
                <p className="product-description">{props.data.description}</p>
                <div className="prices">
                    <label>${props.data.price.toFixed(2)}</label>
                    <label>Total: ${total.toFixed(2)}</label>
                </div>
                <QuantityPicker quantity={quantity} setQuantity={setQuantity} />
            </div>
        </div>
        
    )
}

export default Product;