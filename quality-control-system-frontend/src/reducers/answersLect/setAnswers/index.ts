import { SetAnswersType } from '../../../constants'
import { SET_ANSWERS } from '../../../constants'
import { AnswersType } from '../../../constants'

let initialState = {
    answers: [] as Array<AnswersType>
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SetAnswersType): InitialStateType => {
    return action.type === SET_ANSWERS
    ? { ...state,
        answers: action.answers
    }
    : state;
}