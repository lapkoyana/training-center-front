import { LoginType } from '../../../constants';
import { LOGIN_SUCCESS } from '../../../constants';
import { initialState, UserLoginType } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.auth.isLoggedIn, action: LoginType): UserLoginType => {
    //нзнзнзнзнзнзнзнзнзнз
    return action.type === LOGIN_SUCCESS
    ? action.payload
    : state
}
