import { SetCurrentUser } from '../../../constants';
import { SET_CURRENT_USER } from '../../../constants';
import { initialState, UserLoginType } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.auth.currentUser, action: SetCurrentUser): UserLoginType | null => {
    return action.type === SET_CURRENT_USER
    ? action.currentUser
    : state
}
