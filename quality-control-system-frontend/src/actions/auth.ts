import { UserLoginType } from './../constants/index'

import { SET_CURRENT_USER, SET_IS_LOGGED_IN } from './../constants/index'

export const setCurrentUser = (currentUser: UserLoginType | null) => {
    return {
        type: SET_CURRENT_USER,
        currentUser
    }
}

export const setIsLoggedIn = (isLoggedIn: boolean) => {
    return {
        type: SET_IS_LOGGED_IN,
        isLoggedIn
    }
}