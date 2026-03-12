import "./QuantityPicker.css";
import  { useState } from "react";
function QuantityPicker() {
    
    // set the [variable, function] and give what usestate it will start to = useState (1);
    const [quantity, setQuantity] = useState (1);

    function handleDecrease(){

        let nextVal = quantity - 1;
        if (nextVal > 0){
            setQuantity(nextVal)
        }
    }

    function handleIncrease(){
        let nextVal = quantity + 1;
        setQuantity(nextVal)

    }

    return(
        <div className="quantity-picker">
            <button className="btn-minus" onClick={handleDecrease} disabled={quantity===1}>-</button>
            <label>{quantity}</label>
            <button className="btn-plus" onClick={handleIncrease} disabled={quantity===10}>+</button>
        </div>
    )
}

export default QuantityPicker;