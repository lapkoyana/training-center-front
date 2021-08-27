import { QuestionsType, SetQuestionsType, SET_QUESTIONS} from '../../../constants'
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.question.questions, action: SetQuestionsType): Array<QuestionsType> => {
    return action.type === SET_QUESTIONS
    ? action.questions
    : state
}