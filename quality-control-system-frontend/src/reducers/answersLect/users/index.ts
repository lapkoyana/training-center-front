import { SetUsersType } from '../../../constants'
import { SET_USERS } from '../../../constants'
import { UsersType } from '../../../constants'
import { initialState } from '../../../constants'


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.answersLect.users, action: SetUsersType): Array<UsersType> => {
    return action.type === SET_USERS
    ? action.users
    : state;
}