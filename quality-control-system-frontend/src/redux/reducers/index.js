import { combineReducers } from "redux";
import lesson from "./lesson";
import auth from "./auth";
import question from "./questions";
import student from "./student";
import answersLect from "./answers-lect";



export default combineReducers({
    lesson,
    question,
    student,
    answersLect,
    auth
});