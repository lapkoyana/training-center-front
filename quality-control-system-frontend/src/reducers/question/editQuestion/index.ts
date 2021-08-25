import { QuestionsType, EditQuestionsType, EDIT_QUESTION} from '../../../constants'
import { initialState } from './../../../constants/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.question.questions, action: EditQuestionsType): Array<QuestionsType> => {
    return action.type === EDIT_QUESTION
    ? state.map(l => {
        if (l.id === action.question.id){
            return action.question;
        }
        return l;
    })
    : state
}