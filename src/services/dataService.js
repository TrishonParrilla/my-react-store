// products into the catalog


const catalog = [
    {
        "title":"Orange",
        "description":"Juicy and sweet citrus fruit, packed with vitamin C and perfect for snacking or fresh juice.",
        "category":"fruit",
        "price": 15.99,
        "image":"Orange.png", //placeholder img
        "_id":"1" // Must be Unique
    },

    {
        "title":"Apple",
        "description":"Crisp and refreshing, a versatile fruit great for eating raw, baking, or making cider.",
        "category":"fruit",
        "price": 20.99,
        "image":"Apple.png", //placeholder img
        "_id":"2" // Must be Unique
    },

    {
        "title":"Strawberries",
        "description":"Sweet and fragrant berries, perfect for desserts, smoothies, or eating fresh from the basket.",
        "category":"berry",
        "price": 15.99,
        "image":"Strawberry.png", //placeholder img
        "_id":"3" // Must be Unique
    },
];

class DataService {  // make a class with a method to grab the data from the json/catalog
    getProducts(){
        return catalog;
    }
}

//export it so the catalog component can be used
export default DataService;