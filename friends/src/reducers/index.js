import { combineReducers } from "redux";
import authReducer from "./authReducer";
import friendsReducer from "./friendsReducer";

const reducer = combineReducers({
    authReducer,
    friendsReducer
});

export default reducer;
