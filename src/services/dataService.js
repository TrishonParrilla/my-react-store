// products into the catalog


const catalog = [
    {
        "title":"Hand Bag",
        "description":"A stylish and practical hand bag, perfect for carrying your essentials in style.",
        "category":"accessory",
        "price": 15.99,
        "image":"handbag.jpg", //placeholder img
        "_id":"1" // Must be Unique
    },

    {
        "title":"Jacket",
        "description":"A stylish and comfortable jacket, perfect for keeping warm in cooler weather.",
        "category":"clothing",
        "price": 20.99,
        "image":"jacket.jpg", //placeholder img
        "_id":"2" // Must be Unique
    },

    {
        "title":"Dress",
        "description":"A stylish and elegant dress, perfect for any occasion.",
        "category":"clothing",
        "price": 15.99,
        "image":"dress.jpg", //placeholder img
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