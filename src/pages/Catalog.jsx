import Product from "../components/Product"
import "./Catalog.css"
import DataService from "../services/dataService";
import { useEffect, useState } from "react";


function Catalog(){
    const [products, setProducts] = useState ([]);
    const [categories, setCategories] = useState([]); // hold categories data
    const[productsToDisplay, setProductsToDisplay] = useState([]); // holds products

    function loadCatalog(){
        let service = new DataService();
        let data = service.getProducts();
        setProductsToDisplay(data); //initially display all products
        let cats = ["fruit","berry"] // placeholder for categories
        setCategories(cats);
    }

    function filter(category){
        let list=[];
        //find products that match the category
        for(let i=0; i < products.length; i++){
            let prod = products[i];
            if (prod.category === category){
                list.push(prod);
            }
        }
        setProductsToDisplay(list);
    }
    //const products = [];
    useEffect(()=>   // useEffect(()=>{},[]);
        {
        //load the data
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        loadCatalog();
    },[]); //the empty array [] means this effect runs only ONCE



        return(
            <div className="catalog">
                <div className="catalog-hero">
                    <h1>Check Out Our Amazing Products</h1>
                    <div className="categories-buttons">
                    {categories.map(cat => <button key = {cat} onClick={() => filter(cat)}>{cat}</button>)}
                    </div>
                    {productsToDisplay.map(prod => <Product key={prod._id} data={prod}/>)}
                </div>
            </div>
        )
    }
    //prod is a temporary variable that represents each product in the products array. We use the map function to loop through the products array and create a Product component for each product. The key prop is used to give each product a unique identifier, which helps React optimize rendering. The data prop is used to pass the product data to the Product component, which can then display the product information.

export default Catalog;