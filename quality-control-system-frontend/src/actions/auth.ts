import { Dispatch } from 'redux';
import { ActionType } from '../reducers/auth'
import AuthenticationService from "../../services/AuthenticationService";
import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        LOGOUT} from '../type'

import { loginAction } from '../type'

export const register = (username: string, password: string) => (dispatch: Dispatch<ActionType>) => {
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

export const login = (username: string, password: string) => async (dispatch: Dispatch<ActionType>) => {
    return await AuthenticationService.login(username, password).then(
        (data) => {
            dispatch(loginAction(data))
            return Promise.resolve();
        }
    );
};

export const logout = () => (dispatch: Dispatch<ActionType>) => {
    AuthenticationService.logout();
    dispatch({
        type: LOGOUT
    });
};