import { QuestionsType, StudentAnswersType } from '../../redux/type'

export type StatePropsType = {
    questions: Array<QuestionsType>
}

export type DispatchPropsType = {
    setQuestions: (lectionId: number) => void,
    addAnswers: (lectionId: number, answers: Array<StudentAnswersType>) => void
}