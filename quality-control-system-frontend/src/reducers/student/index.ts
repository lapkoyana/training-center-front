import { combineReducers } from "redux"
import answers from "./answers"
import file from "./file"
import lections from "./lections"
import userLessons from "./userLessons"

export default combineReducers({
    answers,
    file,
    lections,
    userLessons
})