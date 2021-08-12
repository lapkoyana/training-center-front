import { combineReducers } from "redux";
import lesson from "./lesson";
import auth from "./auth";

export default combineReducers({
    lesson,
    auth
});