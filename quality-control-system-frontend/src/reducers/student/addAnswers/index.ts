import { StudentAnswersType, AddAnswersType, ADD_ANSWERS } from '../../../constants'
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.students.answers, action: AddAnswersType): Array<StudentAnswersType> => {
    return action.type === ADD_ANSWERS
    ? action.answers
    : state
}