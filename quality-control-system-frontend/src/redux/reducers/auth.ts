import { LoginType, RegisterSuccessType, RegisterFailType, LogoutType } from './../type';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
} from "../type";

let storedUser = localStorage.getItem("user")
let user = null

if (typeof storedUser === 'string'){
    user = JSON.parse(storedUser);
}

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

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
                user: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        default:
            return state;
    }
}

type ActionType = LoginType | RegisterSuccessType | RegisterFailType | LogoutType

export default authReducer;