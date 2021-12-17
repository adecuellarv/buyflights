import { LOAD_CITIES } from "../constants/action-types";

const initialState = {
  cities: {}
};

function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CITIES:
      return Object.assign({}, state, {
        cities: action.payload
      });
    default:
      return state;
  }
}

export default citiesReducer;