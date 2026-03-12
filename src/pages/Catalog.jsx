import Product from "../components/product"
import "./Catalog.css"
import DataService from "../services/dataService";
import { useEffect, useState } from "react";


function Catalog(){
    const [products, setProducts] = useState ([]);
    //const products = [];
    useEffect(()=>   // useEffect(()=>{},[]);
        {
        //load the data
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    },[]); //the empty array [] means this effect runs only ONCE



        return(
            <div className="catalog">
                <h1>Check  Out Our Amazing Products</h1>
                {products.map(prod => <Product key={prod._id} data={prod}/>)}
            </div>
        )
    }

export default Catalog;