import { UserLoginType } from '../../constants'

export type StatePropsType = {
    currentUser: UserLoginType | null
}

export type DispatchPropsType = {
    logout: () => void
}