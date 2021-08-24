import { combineReducers } from "redux"
import setAnswers from "./setAnswers"
import setLection from "./setLections"
import setUsers from "./setUsers"

export default combineReducers({
    setAnswers,
    setLection,
    setUsers
})