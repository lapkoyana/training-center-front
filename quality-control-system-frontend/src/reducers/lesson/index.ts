import { combineReducers } from "redux"
import addLections from "./addLections"
import deleteLections from "./deleteLections"
import editLection from "./editLection"
import setCurrentLection from "./setCurrentLection"
import setLections from "../answersLect/setLections"

export default combineReducers({
    addLections,
    deleteLections,
    editLection,
    setCurrentLection,
    setLections
})