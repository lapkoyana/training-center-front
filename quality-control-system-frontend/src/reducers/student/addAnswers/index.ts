import { StudentAnswersType, AddAnswersType, ADD_ANSWERS } from '../../../constants'

type InitialStateType = {
    answers: Array<StudentAnswersType>,
};

let initialState: InitialStateType = {
    answers: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: AddAnswersType): InitialStateType => {
    return action.type === ADD_ANSWERS
    ? {
        ...state,
        answers: action.answers
    }
    : state
}