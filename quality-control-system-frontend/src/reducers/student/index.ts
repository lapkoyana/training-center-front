import { combineReducers } from "redux"
import addAnswers from "./addAnswers"
import setAnswers from "../answersLect/setAnswers"
import setFile from "./setFile"
import setLections from "../answersLect/setLections"
import setUserLesson from "./setUserLesson"

export default combineReducers({
    addAnswers,
    setAnswers,
    setFile,
    setLections,
    setUserLesson
})