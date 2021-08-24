import { QuestionsType, AddQuestionsType, ADD_QUESTION} from '../../../constants'


let initialState = {
    questions: [] as Array<QuestionsType>
};

type InitialStateType = typeof initialState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: AddQuestionsType): InitialStateType => {
    return action.type === ADD_QUESTION
    ? {
        ...state,
        questions: [...state.questions, action.question],
    }
    : state
}