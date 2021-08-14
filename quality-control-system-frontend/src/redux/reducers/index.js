import { combineReducers } from "redux";
import lesson from "./lesson";
import auth from "./auth";
import question from "./questions";
import student from "./student";



export default combineReducers({
    lesson,
    question,
    student,
    auth
});