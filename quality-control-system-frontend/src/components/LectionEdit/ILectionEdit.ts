import { LectionsType } from '../../constants'

export type StatePropsType = {
    currentLection: LectionsType
    lections: Array<LectionsType>
}

export type DispatchPropsType = {
    setLections: (lections: Array<LectionsType>) => void
}