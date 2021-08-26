import { QuestionsType, StudentAnswersType } from '../../constants'

export type StatePropsType = {
    questions: Array<QuestionsType>
}

export type DispatchPropsType = {
    setQuestions: (lectionId: number) => void,
    addAnswers: (lectionId: number, answers: Array<StudentAnswersType>) => void
}