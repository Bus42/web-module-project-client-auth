import { combineReducers } from "redux";
import friendReducer from "./friendReducer";

const reducer = combineReducers(friendReducer);

export default reducer;
