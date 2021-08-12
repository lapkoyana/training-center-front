import { combineReducers } from "redux";
import lesson from "./lesson";
import auth from "./auth";
import question from "./questions";


export default combineReducers({
    lesson,
    question,
    auth
});