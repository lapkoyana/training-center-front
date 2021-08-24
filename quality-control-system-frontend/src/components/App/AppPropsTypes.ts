import { CurrentUser } from '../../constants'

export type StatePropsType = {
    currentUser: CurrentUser
}

export type DispatchPropsType = {
    logout: () => void
}