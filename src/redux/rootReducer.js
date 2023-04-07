import homeReducer from "./home/reducer";
import { combineReducers } from 'redux';
import cartReducer from "./shoppingCart/reducer";

const rootReducer = combineReducers({
    products: homeReducer,
    carts: cartReducer
});

export default rootReducer;