import { initialState } from './../../../constants/index';
import { SetAnswersType } from '../../../constants'
import { SET_ANSWERS } from '../../../constants'
import { AnswersType } from '../../../constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.answersLect.answers, action: SetAnswersType): Array<AnswersType> => {
    return action.type === SET_ANSWERS
    ? action.answers
    : state
}