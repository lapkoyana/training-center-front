import { QuestionsType, AddQuestionsType, ADD_QUESTION} from '../../../constants'
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.question.questions, action: AddQuestionsType): Array<QuestionsType> => {
    return action.type === ADD_QUESTION
    ? Array<QuestionsType>(state.push(action.question))
    : state
}