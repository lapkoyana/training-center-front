import { IIsLoggedIn } from '../../../constants';
import { SET_IS_LOGGED_IN } from '../../../constants';
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.auth.isLoggedIn, action: IIsLoggedIn): boolean => {
    return action.type === SET_IS_LOGGED_IN
    ? action.isLoggedIn
    : state
}