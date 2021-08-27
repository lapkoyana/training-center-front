import { LectionsType, UsersType, AnswersType } from '../../constants'

export interface StatePropsType {
    lections: Array<LectionsType>,
    users: Array<UsersType>,
    answers: Array<AnswersType>
}

export interface DispatchPropsType {
    setAnswers: () => void,
    setUsers: () => void,
    setLections: () => void
}