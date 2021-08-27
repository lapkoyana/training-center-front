import { combineReducers } from "redux"
import lections from "./lections"
import currentLection from "./currentLection"

export default combineReducers({
    lections,
    currentLection,
})