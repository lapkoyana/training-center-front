import { QuestionsType } from '../../../redux/type'

export type OwnPropsType = {
    questions: Array<QuestionsType>
    update: (question: QuestionsType) => void
    remove: (questionId: number | undefined) => void
}