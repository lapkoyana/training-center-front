import { QuestionsType, EditQuestionsType, EDIT_QUESTION} from '../../../constants'


let initialState = {
    questions: [] as Array<QuestionsType>
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: EditQuestionsType): InitialStateType => {
    return action.type === EDIT_QUESTION
    ? {
        ...state,
        questions: state.questions.map(l => {
            if (l.id === action.question.id){
                return action.question;
            }
            return l;
        }),
    }
    : state
}