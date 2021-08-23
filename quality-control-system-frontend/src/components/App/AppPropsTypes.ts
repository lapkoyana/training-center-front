import { CurrentUser } from '../../redux/type'

export type StatePropsType = {
    currentUser: CurrentUser
}

export type DispatchPropsType = {
    logout: () => void
}