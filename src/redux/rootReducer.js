import homeReducer from "./home/reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    home: homeReducer,
});

export default rootReducer;