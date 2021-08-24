import { combineReducers } from "redux"
import loginSuccess from "./loginSuccess"
import logout from "./logout"
import registerFail from "./registerFail"
import registerSuccess from "./registerSuccess"

export default combineReducers({
    loginSuccess,
    logout,
    registerFail,
    registerSuccess
})