import AuthenticationService from "../../services/AuthenticationService";

import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        LOGIN_SUCCESS,
        LOGOUT} from './../type'

export const register = (username, password) => (dispatch) => {
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

export const login = (username, password) => (dispatch) => {
    return AuthenticationService.login(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data }
            });

            return Promise.resolve();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthenticationService.logout();

    dispatch({
        type: LOGOUT
    });
};