
import products from "./products.json";

//to get all products
export function getAllProducts() {
    return Promise.resolve(products)
    
}

//to get product by id 
export function getProdByID(prodID){
const prodById = products.find(item => item.id === prodID);

return Promise.resolve(prodById)
}

export default {
    getAllProducts,
    getProdByID
}

