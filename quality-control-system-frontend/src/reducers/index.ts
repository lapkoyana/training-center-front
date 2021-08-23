import { combineReducers } from "redux";
import lesson from "./lesson";
import auth from "./auth";
import question from "./questions";
import student from "./student";
import answersLect from "./answers-lect";



let rootReducer = combineReducers({
    lesson,
    question,
    student,
    answersLect,
    auth
})

type RootReducerType = typeof rootReducer
export type StateType = ReturnType<RootReducerType>

export default rootReducer