import { LoginType, RegisterSuccessType, RegisterFailType, LogoutType } from '../../constants';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
} from "../../constants";

let storedUser = localStorage.getItem("user")
let currentUser = null

if (typeof storedUser === 'string'){
    currentUser = JSON.parse(storedUser);
}

const initialState = currentUser
    ? { isLoggedIn: true, currentUser }
    : { isLoggedIn: false, currentUser: null };

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                currentUser: null
            };
        default:
            return state;
    }
}

export type ActionType = LoginType | RegisterSuccessType | RegisterFailType | LogoutType

export default authReducer;