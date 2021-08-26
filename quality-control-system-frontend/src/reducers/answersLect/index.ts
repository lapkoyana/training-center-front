import { combineReducers } from "redux"
import answers from "./answers"
import lections from "./lections"
import users from "./users"

export default combineReducers({
    answers,
    lections,
    users
})