import * as types from "../constants/action-types";

export const setCities = (data) => {
    return  { 
        type: types.LOAD_CITIES,
        payload: Object.values(data)
    };
};