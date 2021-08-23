import { QuestionsType } from '../../redux/type'

export type StatePropsType = {
    questions: Array<QuestionsType>
}

export type DispatchPropsType = {
    setQuestions: (lectionId: number) => void,
    addQuestion: (lectionId: number, question: QuestionsType) => void,
    deleteQuestion: (lectionId: number, questionId: number | undefined) => void,
    updateQuestion: (lectionId: number, question: QuestionsType) => void
}

export type PathParamType = {lectionId: string}