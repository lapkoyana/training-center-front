import { SetFileType, SET_FILE } from '../../../constants'
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.students.file, action: SetFileType): string | undefined => {
    return action.type === SET_FILE
    ? action.file
    : state
}