import { SET_FILTERS, SET_DATA } from "../actions/types";
const initialState = {
    filteredCities: [],
    data: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERS:
            return { ...state, filteredCities: action.payload };
        case SET_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
