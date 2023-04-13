import { INCREMENT, DECREMENT, DELETED, ADDPRODUCTTOCART } from "./actionTypes"

//action creators for home slice
export const increment = (productId) => {
    return {
        type: INCREMENT,
        payload: productId
    };
};

export const decrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId
    };
};

export const deleted = (productId) => {
    return {
        type: DELETED,
        payload: productId
    };
};

export const addProductToCart = (productId, newProduct) => {
    return {
        type: ADDPRODUCTTOCART,
        payload: {
            productId,
            newProduct
        }
    };
};