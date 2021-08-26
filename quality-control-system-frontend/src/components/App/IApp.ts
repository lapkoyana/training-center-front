import { UserLoginType } from '../../constants'

export type StatePropsType = {
    currentUser: UserLoginType
}

export type DispatchPropsType = {
    logout: () => void
}