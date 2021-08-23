import { LectionsType, UsersType, AnswersType } from './../../redux/type'

export type StatePropsType = {
    lections: Array<LectionsType>,
    users: Array<UsersType>,
    answers: Array<AnswersType>
}

export type DispatchPropsType = {
    setAnswers: () => void,
    setUsers: () => void,
    setLections: () => void
}