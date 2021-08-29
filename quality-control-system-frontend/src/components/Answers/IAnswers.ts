import { LectionsType, UsersType, AnswersType } from '../../constants'

export interface StatePropsType {
    lections: Array<LectionsType>,
    users: Array<UsersType>,
    answers: Array<AnswersType>
}

export interface DispatchPropsType {
    setAnswers: (answers: Array<AnswersType>) => void,
    setUsers: (users: Array<UsersType>) => void,
    setLections: (lections: Array<LectionsType>) => void
}