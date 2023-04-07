import { DECREMENT, DELETED, INCREMENT } from "./actionTypes";
import initialState from "./initialState";

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state.map(cart => {
                if (cart.id !== action.payload) {
                    return cart
                }
                else {
                    return {
                        ...cart,
                        quantity: cart.quantity + 1
                    };
                };
            });

        case DECREMENT:
            return state.map(cart => {
                if (cart.id !== action.payload) {
                    return cart
                }
                else {
                    return {
                        ...cart,
                        quantity: cart.quantity - 1
                    };
                };
            });

        case DELETED:
            return state.filter(cart => cart.id !== action.payload);

        default:
            return state;
    }
}

export default cartReducer;