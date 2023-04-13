import { ADDPRODUCTTOCART, DECREMENT, DELETED, INCREMENT } from "./actionTypes";
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
                        quantity: parseInt(cart.quantity) + 1
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
                        quantity: parseInt(cart.quantity) - 1
                    };
                };
            });

        case ADDPRODUCTTOCART:
            const { newProduct } = action.payload;
            console.log(action.payload)
            const cartIndex = state.findIndex(cart => cart.key === newProduct.key);
            if (cartIndex === -1) {
                // Product not found in the cart, add new product
                return [
                    ...state,
                    {
                        ...newProduct,
                        quantity: 1
                    }
                ];
            } else {
                // Product already exists in the cart, update quantity
                const updatedCart = {
                    ...state[cartIndex],
                    quantity: state[cartIndex].quantity + 1
                };
                return [
                    ...state.slice(0, cartIndex),
                    updatedCart,
                    ...state.slice(cartIndex + 1)
                ];
            }
        // const { productId, newProduct } = action.payload;
        // console.log(action.payload)
        // if (state.length >= 1) {
        //     return state.map(cart => {
        //         if (cart.key !== newProduct.key) {
        //             console.log('addedinner')
        //             return [
        //                 ...state,
        //                 newProduct
        //             ]
        //         }
        //         else {
        //             console.log('edited');
        //             return {
        //                 ...cart,
        //                 quantity: parseInt(cart.quantity) + 1
        //             };
        //         };
        //     });
        // } else {
        //     return [
        //         ...state,
        //         newProduct
        //     ]
        // }

        // return [
        //     ...state,
        //     newProduct
        // ]

        case DELETED:
            return state.filter(cart => cart.id !== action.payload);

        default:
            return state;
    }
}

export default cartReducer;