import { combineReducers } from "redux";
import lesson from "./lesson";
import question from "./question";
import student from "./student";
import answersLect from './answersLect'
import auth from './auth'

export default combineReducers({
    lesson,
    question,
    student,
    answersLect,
    auth
})
