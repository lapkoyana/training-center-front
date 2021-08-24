import { Dispatch } from 'redux';
import { LoginType, LogoutType, RegisterSuccessType, RegisterFailType } from './../constants/index'
import AuthenticationService from "./../services/AuthenticationService";
import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        LOGOUT} from './../constants/index'

import { loginAction } from './../constants/index'

export const register = (username: string, password: string) => (dispatch: Dispatch< RegisterFailType | RegisterSuccessType >) => {
    return AuthenticationService.register(username, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: REGISTER_FAIL
            });
            return Promise.reject();
        }
    );
};

export const login = (username: string, password: string) => async (dispatch: Dispatch<LoginType>) => {
    return await AuthenticationService.login(username, password).then(
        (data) => {
            dispatch(loginAction(data))
            return Promise.resolve();
        }
    );
};

export const logout = () => (dispatch: Dispatch<LogoutType>) => {
    AuthenticationService.logout();
    dispatch({
        type: LOGOUT
    });
};