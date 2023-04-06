import { ADDPRODUCT, ADDTOCART } from "./actionTypes"

//actiion creators for home slice
export const addProduct = (newProduct) => {
    return {
        type: ADDPRODUCT,
        payload: newProduct
    };
};

export const addToCart = (product) => {
    return {
        type: ADDTOCART,
        payload: product
    };
};