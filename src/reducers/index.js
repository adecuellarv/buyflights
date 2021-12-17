import { combineReducers } from "redux";
import categorysReducer from "./categoryReducer";

export default combineReducers({
    flightsInfo: categorysReducer
});