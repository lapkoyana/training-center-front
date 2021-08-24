import { SetUsersType } from '../../../constants'
import { SET_USERS } from '../../../constants'
import { UsersType } from '../../../constants'

let initialState = {
    users: [] as Array<UsersType>
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SetUsersType): InitialStateType => {
    return action.type === SET_USERS
    ? { ...state,
        users: action.users
    }
    : state;
}