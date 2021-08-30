import { QuestionsType, StudentAnswersType } from '../../constants'

export type StatePropsType = {
    questions: Array<QuestionsType>
}

export type DispatchPropsType = {
    setQuestions: (questions: Array<QuestionsType>) => void,
    setAnswers: (answers: Array<StudentAnswersType>) => void
}