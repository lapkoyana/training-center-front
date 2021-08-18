import AuthenticationService from "../../services/AuthenticationService";

import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        LOGOUT} from '../type'

import { loginAction } from '../type'

export const register = (username: string, password: string) => (dispatch: any) => {
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

export const login = (username: string, password: string) => async (dispatch: any) => {
    return await AuthenticationService.login(username, password).then(
        (data) => {
            dispatch(loginAction(data))
            return Promise.resolve();
        }
    );
};

export const logout = () => (dispatch: any) => {
    AuthenticationService.logout();
    dispatch({
        type: LOGOUT
    });
};