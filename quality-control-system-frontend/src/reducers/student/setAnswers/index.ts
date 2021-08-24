import { StudentAnswersType, SetStudentAnswersType, SET_ANSWERS } from '../../../constants'

type InitialStateType = {
    answers: Array<StudentAnswersType>,
};

let initialState: InitialStateType = {
    answers: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SetStudentAnswersType): InitialStateType => {
    return action.type === SET_ANSWERS
    ? {
        ...state,
        answers: action.answers
    }
    : state
}