import { ADDPRODUCT, ADDTOCART, REMOVEFROMCART } from "./actionTypes"

//actiion creators for home slice
export const addProduct = (newProduct) => {
    return {
        type: ADDPRODUCT,
        payload: newProduct
    };
};

export const addToCart = (productId) => {
    return {
        type: ADDTOCART,
        payload: productId
    };
};
export const removeFromCart = (productId) => {
    return {
        type: REMOVEFROMCART,
        payload: productId
    };
};