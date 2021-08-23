export type StatePropsType = {
    isLoggedIn: boolean
}

export type DispatchPropsType = {
    login: (username: string, password: string) => void
}