import { combineReducers } from "redux";
import lectionReducer from "./lesson-reducer";
import auth from "./auth-reducer";
import message from "./message-reducer";


export default combineReducers({
    lessonPage: lectionReducer,
    auth,
    message
})