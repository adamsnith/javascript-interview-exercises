import { SET_FILTERS, SET_DATA } from "./types";

export const setFilter = filteredCities => dispatch => {
    dispatch({
        type: SET_FILTERS,
        payload: filteredCities
    });
};
export const setData = data => dispatch => {
    dispatch({
        type: SET_DATA,
        payload: data
    });
};
