import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
export default combineReducers({
    app: filterReducer
});
