import { QuestionsType } from '../../constants'

export type StatePropsType = {
    questions: Array<QuestionsType>
}

export type DispatchPropsType = {
    setQuestions: (questions: Array<QuestionsType>) => void,
}

export type PathParamType = {id: string}