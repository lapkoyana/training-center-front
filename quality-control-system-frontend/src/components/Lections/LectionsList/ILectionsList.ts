import {LectionsType} from '../../../constants'

export type PropsType = {
    lections: Array<LectionsType>
    delete: (lectionId: number) => void
    setCurrentLection: (lectionId: number) => void
}