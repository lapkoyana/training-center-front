import { combineReducers } from "redux";
import lesson from "./lesson";
import auth from "./auth";
import message from "./message";


export default combineReducers({
    lesson,
    auth,
    message
});