// products into the catalog


const catalog = [
    {
        "title":"Orange",
        "category":"fruit",
        "price": 15.99,
        "image":"orange.jpg", //placeholder img
        "_id":"1" // Must be Unique
    },

    {
        "title":"Apple",
        "category":"fruit",
        "price": 20.99,
        "image":"apple.jpg", //placeholder img
        "_id":"2" // Must be Unique
    },

    {
        "title":"Strawberries",
        "category":"berry",
        "price": 15.99,
        "image":"strawberries.jpg", //placeholder img
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