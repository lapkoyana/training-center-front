import { combineReducers } from "redux"
import addQuestion from "./addQuestion"
import deleteQuestion from "./deleteQuestion"
import editQuestion from "./editQuestion"
import setQuestions from "./setQuestions"

export default combineReducers({
    addQuestion,
    deleteQuestion,
    editQuestion,
    setQuestions
})