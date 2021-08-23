import { LectionsType } from '../../redux/type'

export type StatePropsType = {
    lections: Array<LectionsType>,
    file: string | undefined
}

export type DispatchPropsType = {
    setLections: () => void,
    setUserLesson: () => void,
    getLessonFile: (filename: string | undefined) => void
}