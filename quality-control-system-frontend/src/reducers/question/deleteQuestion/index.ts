import { QuestionsType, DeleteQuestionsType, DELETE_QUESTION} from '../../../constants'


let initialState = {
    questions: [] as Array<QuestionsType>
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DeleteQuestionsType): InitialStateType => {
    return action.type === DELETE_QUESTION
    ? {
        ...state,
        questions: state.questions.filter(l => l.id !== action.questionId)
    }
    : state
}