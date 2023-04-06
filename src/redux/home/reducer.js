import { ADDPRODUCT } from "./actionTypes";
import initialState from "./initialState";

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return [
                ...state, action.payload
            ]

        default:
            return state;
    }
}

export default homeReducer;