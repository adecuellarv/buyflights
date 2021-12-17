import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";

export default combineReducers({
    flightsInfo: citiesReducer
});