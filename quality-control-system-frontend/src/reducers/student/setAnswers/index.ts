import { StudentAnswersType, SetStudentAnswersType, SET_ANSWERS } from '../../../constants'
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.students.answers, action: SetStudentAnswersType): Array<StudentAnswersType> => {
    return action.type === SET_ANSWERS
    ? action.answers
    : state
}