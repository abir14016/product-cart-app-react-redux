import { ADDPRODUCT, ADDTOCART, REMOVEFROMCART } from "./actionTypes";
import initialState from "./initialState";

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return [
                ...state, action.payload
            ]

        case ADDTOCART:
            return state.map(product => {
                if (product.id !== action.payload) {
                    return product
                }
                else {
                    return {
                        ...product,
                        quantity: parseInt(product.quantity) - 1
                    };
                };
            });

        case REMOVEFROMCART:
            return state.map(product => {
                if (product.id !== action.payload) {
                    return product
                }
                else {
                    return {
                        ...product,
                        quantity: parseInt(product.quantity) + 1
                    };
                };
            });

        default:
            return state;
    }
}

export default homeReducer;