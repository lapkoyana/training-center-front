import { QuestionsType, DeleteQuestionsType, DELETE_QUESTION} from '../../../constants'
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.question.questions, action: DeleteQuestionsType): Array<QuestionsType> => {
    return action.type === DELETE_QUESTION
    ? state.filter(l => l.id !== action.questionId)
    : state
}