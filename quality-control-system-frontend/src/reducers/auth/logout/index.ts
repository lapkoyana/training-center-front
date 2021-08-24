import { LogoutType } from '../../../constants';
import { LOGOUT } from '../../../constants';

let storedUser = localStorage.getItem("user")
let currentUser = null

if (typeof storedUser === 'string'){
    currentUser = JSON.parse(storedUser)
}

const initialState = currentUser
    ? { isLoggedIn: true, currentUser }
    : { isLoggedIn: false, currentUser: null }

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: LogoutType): InitialStateType => {
    return action.type === LOGOUT
    ? {
        ...state,
        isLoggedIn: false,
        currentUser: null
    }
    : state
}