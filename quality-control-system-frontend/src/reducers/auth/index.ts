import { combineReducers } from "redux"
import currentUser from "./currentUser"
import isLoggedIn from "./isLoggedIn"

export default combineReducers({
    currentUser,
    isLoggedIn,
})