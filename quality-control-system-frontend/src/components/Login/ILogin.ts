import { UserLoginType } from "../../constants"

export type StatePropsType = {
    currentUser: UserLoginType | null,
    isLoggedIn: boolean
}

export type DispatchPropsType = {
    setCurrentUser: (currentUser: UserLoginType | null) => void
    setIsLoggedIn: (isLoggedIn: boolean) => void
}