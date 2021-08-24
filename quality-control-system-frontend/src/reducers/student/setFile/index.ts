import { SetFileType, SET_FILE } from '../../../constants'

type InitialStateType = {
    file: string | undefined
};

let initialState: InitialStateType = {
    file: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SetFileType): InitialStateType => {
    return action.type === SET_FILE
    ? {
        ...state,
        file: action.file
    }
    : state
}