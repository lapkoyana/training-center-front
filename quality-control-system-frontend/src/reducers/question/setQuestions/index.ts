import { QuestionsType, SetQuestionsType, SET_QUESTIONS} from '../../../constants'


let initialState = {
    questions: [] as Array<QuestionsType>
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SetQuestionsType): InitialStateType => {
    return action.type === SET_QUESTIONS
    ? {
        ...state,
        questions: action.questions
    }
    : state
}