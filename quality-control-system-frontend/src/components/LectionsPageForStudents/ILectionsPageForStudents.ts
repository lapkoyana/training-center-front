import { LectionsType, UserLessonsType } from '../../constants'

export type StatePropsType = {
    lections: Array<LectionsType>,
    userLessons: Array<UserLessonsType>
    file: string | undefined
}

export type DispatchPropsType = {
    setLections: (lections: Array<LectionsType>) => void,
    setUserLessons: (lections: Array<UserLessonsType>) => void,
    setLessonFile: (filename: string | undefined) => void
}