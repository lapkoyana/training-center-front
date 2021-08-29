import { Dispatch } from 'redux';
import { UserLoginType, SetCurrentUser, LogoutType, RegisterSuccessType, RegisterFailType } from './../constants/index'
import AuthenticationService from "./../services/AuthenticationService";
import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        LOGOUT} from './../constants/index'

import { SET_CURRENT_USER, SET_IS_LOGGED_IN } from './../constants/index'

export const setCurrentUser = (currentUser: UserLoginType | null) => {
    return {
        type: SET_CURRENT_USER,
        currentUser
    }
}

export const setIsLoggedIn = (isLoggedIn: boolean) => {
    return {
        type: SET_IS_LOGGED_IN,
        isLoggedIn
    }
}

// export const register = (username: string, password: string) => (dispatch: Dispatch< RegisterFailType | RegisterSuccessType >) => {
//     return AuthenticationService.register(username, password).then(
//         (response) => {
//             dispatch({
//                 type: REGISTER_SUCCESS
//             });
//             return Promise.resolve();
//         },
//         (error) => {
//             dispatch({
//                 type: REGISTER_FAIL
//             });
//             return Promise.reject();
//         }
//     );
// };

// export const login = (username: string, password: string) => async (dispatch: Dispatch<SetCurrentUser>) => {
//     return await AuthenticationService.login(username, password).then(
//         (data) => {
//             dispatch(loginAction(data))
//             return Promise.resolve();
//         }
//     );
// };

// export const logout = () => {
//     return {
//         type: LOGOUT
//     };
// };